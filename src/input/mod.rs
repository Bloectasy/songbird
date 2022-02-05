//! Raw audio input data streams and sources.
//!
//! [`Input`]s in Songbird are based on [symphonia], which provides demuxing,
//! decoding and management of synchronous byte sources (i.e., any items which
//! `impl` [`Read`]).
//!
//! Songbird adds support for the Opus codec to symphonia via [`OpusDecoder`]
//! and the [DCA1] file format via [`DcaReader`]; the format and codec registries in
//! [`registry::*`] install these on top of those you enable when you include symphonia.
//!
//! ## Adapters
//! We have 'em! For impl'ing your own sources.
//! TODO: finish this once I write the WAV adapter.
//!
//! ## Opus frame passthrough.
//! Some sources, such as [`Compressed`] or any WebM/Opus/DCA file, support
//! direct frame passthrough to the driver. This lets you directly send the
//! audio data you have *without decoding, re-encoding, or mixing*. In many
//! cases, this can greatly reduce the CPU cost required by the driver.
//!
//! This functionality requires that:
//!  * only one track is active (including paused tracks),
//!  * that track's input supports direct Opus frame reads,
//!  * this input's frames are all sized to 20ms.
//!  * and that track's volume is set to `1.0`.
//!
//! [`Input`]s which are almost suitable but which have **any** illegal frames will be
//! blocked from passthrough to prevent glitches such as repeated encoder frame gaps.
//!
//! [`Input`]: Input
//! [symphonia]: https://docs.rs/symphonia
//! [`Read`]: https://doc.rust-lang.org/std/io/trait.Read.html
//! [`Compressed`]: cached::Compressed
//! [`OpusDecoder`]: OpusDecoder
//! [DCA1]: https://github.com/bwmarrin/dca
//! [`DcaReader`]: DcaReader
//! [`registry::*`]: registry

mod adapter;
pub mod cached;
mod child;
mod compose;
mod dca;
mod error;
mod file;
mod http;
mod metadata;
mod opus;
pub mod registry;
pub mod utils;
mod ytdl;

pub use self::{
    adapter::*,
    child::*,
    compose::*,
    dca::DcaReader,
    error::*,
    file::*,
    http::*,
    metadata::AuxMetadata,
    opus::*,
    ytdl::*,
};

pub use symphonia_core as core;

use std::io::Result as IoResult;
use symphonia_core::{
    codecs::{CodecRegistry, Decoder},
    errors::Error as SymphError,
    formats::FormatReader,
    io::{MediaSource, MediaSourceStream},
    probe::{Hint, Probe, ProbedMetadata},
};

/// A possibly lazy audio source.
pub enum Input {
    /// A byte source which is not yet initialised.
    ///
    /// When a parent track is either played or explicitly readied, the inner [`Compose`]
    /// is used to create an [`Input::Live`].
    ///
    /// [`Compose`]: Compose
    /// [`Input::Live`]: Input::Live
    Lazy(
        /// A trait object which can be used to (re)create a usable byte stream.
        Box<dyn Compose>,
    ),
    /// An initialised byte source.
    ///
    /// This contains a raw byte stream, the lazy initialiser that was used,
    /// as well as any symphonia-specific format data and/or hints.
    Live(
        /// The byte source, plus symphonia-specific data.
        LiveInput,
        /// The struct used to initialise this source, if available.
        ///
        /// This is used to recreate the stream when a source does not support
        /// backward seeking, if present.
        Option<Box<dyn Compose>>,
    ),
}

/// An initialised audio source.
///
/// This type's variants reflect files at different stages of readiness for use by
/// symphonia. [`Parsed`] file streams are ready for playback.
///
/// [`Parsed`]: Self::Parsed
pub enum LiveInput {
    /// An unread, raw file stream.
    Raw(AudioStream<Box<dyn MediaSource>>),
    /// An unread file which has been wrapped with a large read-ahead buffer.
    Wrapped(AudioStream<MediaSourceStream>),
    /// An audio file which has had its headers parsed and decoder state built.
    Parsed(Parsed),
}

impl LiveInput {
    /// Converts this audio source into a [`Parsed`] object using the supplied format and codec
    /// registries.
    ///
    /// Where applicable, this will convert [`Raw`] -> [`Wrapped`] -> [`Parsed`], and will
    /// play the default track (or the first encountered track if this is not available) if a
    /// container holds multiple audio streams.
    ///
    /// *This is a blocking operation. Symphonia uses standard library I/O (e.g., [`Read`], [`Seek`]).
    /// If you wish to use this from an async task, you must do so within `spawn_blocking`.*
    ///
    /// [`Parsed`]: Self::Parsed
    /// [`Raw`]: Self::Raw
    /// [`Wrapped`]: Self::Wrapped
    /// [`Read`]: https://doc.rust-lang.org/std/io/trait.Read.html
    /// [`Seek`]: https://doc.rust-lang.org/std/io/trait.Seek.html
    pub fn promote(self, codecs: &CodecRegistry, probe: &Probe) -> Result<Self, SymphError> {
        let mut out = self;

        if let LiveInput::Raw(r) = out {
            // TODO: allow passing in of MSS options?
            let mss = MediaSourceStream::new(r.input, Default::default());
            out = LiveInput::Wrapped(AudioStream {
                input: mss,
                hint: r.hint,
            });
        }

        if let LiveInput::Wrapped(w) = out {
            let hint = w.hint.unwrap_or_default();
            let input = w.input;

            let probe_data =
                probe.format(&hint, input, &Default::default(), &Default::default())?;
            let format = probe_data.format;
            let meta = probe_data.metadata;

            let mut default_track_id = format.default_track().map(|track| track.id);
            let mut decoder: Option<Box<dyn Decoder>> = None;

            // Take default track (if it exists), take first track to be found otherwise.
            for track in format.tracks() {
                if decoder.is_some() {
                    break;
                }

                if default_track_id.is_some() && Some(track.id) != default_track_id {
                    continue;
                }

                let this_decoder = codecs.make(&track.codec_params, &Default::default())?;

                decoder = Some(this_decoder);
                default_track_id = Some(track.id);
            }

            let track_id = default_track_id.unwrap();

            let p = Parsed {
                format,
                decoder: decoder.unwrap(),
                track_id,
                meta,
            };

            out = LiveInput::Parsed(p);
        }

        Ok(out)
    }
}

/// An unread byte stream for an audio file.
pub struct AudioStream<T: Send> {
    /// The wrapped file stream.
    ///
    /// An input stream *must not* have been read into past the start of the
    /// audio container's header.
    pub input: T,
    /// Extension and MIME type information which may help guide format selection.
    pub hint: Option<Hint>,
}

/// An audio file which has had its headers parsed and decoder state built.
pub struct Parsed {
    /// Audio packet, seeking, and state access for all tracks in a file.
    ///
    /// This may be used to access packets one at a time from the input file.
    /// Additionally, this exposes container-level and per track metadata which
    /// have been extracted.
    pub format: Box<dyn FormatReader>,
    /// Decoder state for the chosen track.
    pub decoder: Box<dyn Decoder>,
    /// The chosen track's ID.
    ///
    /// This is required to identify the correct packet stream inside the container.
    pub track_id: u32,
    /// Metadata extracted by symphonia while detecting a file's format.
    ///
    /// Typically, this detects metadata *outside* the file's core format (i.e.,
    /// ID3 tags in MP3 and WAV files).
    pub meta: ProbedMetadata,
}
