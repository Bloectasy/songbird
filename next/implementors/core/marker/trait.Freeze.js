(function() {var implementors = {};
implementors["songbird"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/struct.Config.html\" title=\"struct songbird::Config\">Config</a>","synthetic":true,"types":["songbird::config::Config"]},{"text":"impl !Freeze for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":true,"types":["songbird::driver::connection::error::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/driver/enum.CryptoMode.html\" title=\"enum songbird::driver::CryptoMode\">CryptoMode</a>","synthetic":true,"types":["songbird::driver::crypto::CryptoMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/driver/enum.DecodeMode.html\" title=\"enum songbird::driver::DecodeMode\">DecodeMode</a>","synthetic":true,"types":["songbird::driver::decode_mode::DecodeMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/driver/enum.MixMode.html\" title=\"enum songbird::driver::MixMode\">MixMode</a>","synthetic":true,"types":["songbird::driver::mix_mode::MixMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/driver/retry/enum.Strategy.html\" title=\"enum songbird::driver::retry::Strategy\">Strategy</a>","synthetic":true,"types":["songbird::driver::retry::strategy::Strategy"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/driver/retry/struct.ExponentialBackoff.html\" title=\"struct songbird::driver::retry::ExponentialBackoff\">ExponentialBackoff</a>","synthetic":true,"types":["songbird::driver::retry::strategy::ExponentialBackoff"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/driver/retry/struct.Retry.html\" title=\"struct songbird::driver::retry::Retry\">Retry</a>","synthetic":true,"types":["songbird::driver::retry::Retry"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/driver/struct.Driver.html\" title=\"struct songbird::driver::Driver\">Driver</a>","synthetic":true,"types":["songbird::driver::Driver"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/driver/struct.Connect.html\" title=\"struct songbird::driver::Connect\">Connect</a>","synthetic":true,"types":["songbird::driver::Connect"]},{"text":"impl !Freeze for <a class=\"enum\" href=\"songbird/error/enum.JoinError.html\" title=\"enum songbird::error::JoinError\">JoinError</a>","synthetic":true,"types":["songbird::error::JoinError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/error/enum.ControlError.html\" title=\"enum songbird::error::ControlError\">ControlError</a>","synthetic":true,"types":["songbird::tracks::error::ControlError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/error/enum.PlayError.html\" title=\"enum songbird::error::PlayError\">PlayError</a>","synthetic":true,"types":["songbird::tracks::error::PlayError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/events/context_data/struct.ConnectData.html\" title=\"struct songbird::events::context_data::ConnectData\">ConnectData</a>&lt;'a&gt;","synthetic":true,"types":["songbird::events::context::data::connect::ConnectData"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/events/context_data/struct.DisconnectData.html\" title=\"struct songbird::events::context_data::DisconnectData\">DisconnectData</a>&lt;'a&gt;","synthetic":true,"types":["songbird::events::context::data::disconnect::DisconnectData"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/context_data/enum.DisconnectKind.html\" title=\"enum songbird::events::context_data::DisconnectKind\">DisconnectKind</a>","synthetic":true,"types":["songbird::events::context::data::disconnect::DisconnectKind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/context_data/enum.DisconnectReason.html\" title=\"enum songbird::events::context_data::DisconnectReason\">DisconnectReason</a>","synthetic":true,"types":["songbird::events::context::data::disconnect::DisconnectReason"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/events/context_data/struct.RtcpData.html\" title=\"struct songbird::events::context_data::RtcpData\">RtcpData</a>&lt;'a&gt;","synthetic":true,"types":["songbird::events::context::data::rtcp::RtcpData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/events/context_data/struct.SpeakingUpdateData.html\" title=\"struct songbird::events::context_data::SpeakingUpdateData\">SpeakingUpdateData</a>","synthetic":true,"types":["songbird::events::context::data::speaking::SpeakingUpdateData"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/events/context_data/struct.VoiceData.html\" title=\"struct songbird::events::context_data::VoiceData\">VoiceData</a>&lt;'a&gt;","synthetic":true,"types":["songbird::events::context::data::voice::VoiceData"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"songbird/events/enum.EventContext.html\" title=\"enum songbird::events::EventContext\">EventContext</a>&lt;'a&gt;","synthetic":true,"types":["songbird::events::context::EventContext"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/enum.CoreEvent.html\" title=\"enum songbird::events::CoreEvent\">CoreEvent</a>","synthetic":true,"types":["songbird::events::core::CoreEvent"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/events/struct.EventData.html\" title=\"struct songbird::events::EventData\">EventData</a>","synthetic":true,"types":["songbird::events::data::EventData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/events/struct.EventStore.html\" title=\"struct songbird::events::EventStore\">EventStore</a>","synthetic":true,"types":["songbird::events::store::EventStore"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/enum.TrackEvent.html\" title=\"enum songbird::events::TrackEvent\">TrackEvent</a>","synthetic":true,"types":["songbird::events::track::TrackEvent"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/enum.UntimedEvent.html\" title=\"enum songbird::events::UntimedEvent\">UntimedEvent</a>","synthetic":true,"types":["songbird::events::untimed::UntimedEvent"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/events/enum.Event.html\" title=\"enum songbird::events::Event\">Event</a>","synthetic":true,"types":["songbird::events::Event"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/struct.Call.html\" title=\"struct songbird::Call\">Call</a>","synthetic":true,"types":["songbird::handler::Call"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/id/struct.ChannelId.html\" title=\"struct songbird::id::ChannelId\">ChannelId</a>","synthetic":true,"types":["songbird::id::ChannelId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/id/struct.GuildId.html\" title=\"struct songbird::id::GuildId\">GuildId</a>","synthetic":true,"types":["songbird::id::GuildId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/id/struct.UserId.html\" title=\"struct songbird::id::UserId\">UserId</a>","synthetic":true,"types":["songbird::id::UserId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/struct.ConnectionInfo.html\" title=\"struct songbird::ConnectionInfo\">ConnectionInfo</a>","synthetic":true,"types":["songbird::info::ConnectionInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/input/struct.AsyncAdapterStream.html\" title=\"struct songbird::input::AsyncAdapterStream\">AsyncAdapterStream</a>","synthetic":true,"types":["songbird::input::adapters::async_adapter::AsyncAdapterStream"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/cached/struct.Compressed.html\" title=\"struct songbird::input::cached::Compressed\">Compressed</a>","synthetic":true,"types":["songbird::input::adapters::cached::compressed::Compressed"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/input/cached/struct.OpusCompressor.html\" title=\"struct songbird::input::cached::OpusCompressor\">OpusCompressor</a>","synthetic":true,"types":["songbird::input::adapters::cached::compressed::OpusCompressor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/cached/struct.Decompressed.html\" title=\"struct songbird::input::cached::Decompressed\">Decompressed</a>","synthetic":true,"types":["songbird::input::adapters::cached::decompressed::Decompressed"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/cached/enum.Error.html\" title=\"enum songbird::input::cached::Error\">Error</a>","synthetic":true,"types":["songbird::input::adapters::cached::error::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/cached/enum.CodecCacheError.html\" title=\"enum songbird::input::cached::CodecCacheError\">CodecCacheError</a>","synthetic":true,"types":["songbird::input::adapters::cached::error::CodecCacheError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/cached/enum.LengthHint.html\" title=\"enum songbird::input::cached::LengthHint\">LengthHint</a>","synthetic":true,"types":["songbird::input::adapters::cached::hint::LengthHint"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/cached/struct.Memory.html\" title=\"struct songbird::input::cached::Memory\">Memory</a>","synthetic":true,"types":["songbird::input::adapters::cached::memory::Memory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/struct.ChildContainer.html\" title=\"struct songbird::input::ChildContainer\">ChildContainer</a>","synthetic":true,"types":["songbird::input::adapters::child::ChildContainer"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"songbird/input/struct.RawAdapter.html\" title=\"struct songbird::input::RawAdapter\">RawAdapter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["songbird::input::adapters::raw_adapter::RawAdapter"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"songbird/input/struct.AudioStream.html\" title=\"struct songbird::input::AudioStream\">AudioStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["songbird::input::audiostream::AudioStream"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/codecs/struct.DcaReader.html\" title=\"struct songbird::input::codecs::DcaReader\">DcaReader</a>","synthetic":true,"types":["songbird::input::codecs::dca::DcaReader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/codecs/struct.OpusDecoder.html\" title=\"struct songbird::input::codecs::OpusDecoder\">OpusDecoder</a>","synthetic":true,"types":["songbird::input::codecs::opus::OpusDecoder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/codecs/struct.RawReader.html\" title=\"struct songbird::input::codecs::RawReader\">RawReader</a>","synthetic":true,"types":["songbird::input::codecs::raw::RawReader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/codecs/struct.CODEC_REGISTRY.html\" title=\"struct songbird::input::codecs::CODEC_REGISTRY\">CODEC_REGISTRY</a>","synthetic":true,"types":["songbird::input::codecs::CODEC_REGISTRY"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/codecs/struct.PROBE.html\" title=\"struct songbird::input::codecs::PROBE\">PROBE</a>","synthetic":true,"types":["songbird::input::codecs::PROBE"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.AudioStreamError.html\" title=\"enum songbird::input::AudioStreamError\">AudioStreamError</a>","synthetic":true,"types":["songbird::input::error::AudioStreamError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.MakePlayableError.html\" title=\"enum songbird::input::MakePlayableError\">MakePlayableError</a>","synthetic":true,"types":["songbird::input::error::MakePlayableError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.MetadataError.html\" title=\"enum songbird::input::MetadataError\">MetadataError</a>","synthetic":true,"types":["songbird::input::error::MetadataError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.AuxMetadataError.html\" title=\"enum songbird::input::AuxMetadataError\">AuxMetadataError</a>","synthetic":true,"types":["songbird::input::error::AuxMetadataError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.LiveInput.html\" title=\"enum songbird::input::LiveInput\">LiveInput</a>","synthetic":true,"types":["songbird::input::live_input::LiveInput"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/struct.AuxMetadata.html\" title=\"struct songbird::input::AuxMetadata\">AuxMetadata</a>","synthetic":true,"types":["songbird::input::metadata::AuxMetadata"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/input/struct.Metadata.html\" title=\"struct songbird::input::Metadata\">Metadata</a>&lt;'a&gt;","synthetic":true,"types":["songbird::input::metadata::Metadata"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/struct.Parsed.html\" title=\"struct songbird::input::Parsed\">Parsed</a>","synthetic":true,"types":["songbird::input::parsed::Parsed"]},{"text":"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"songbird/input/struct.File.html\" title=\"struct songbird::input::File\">File</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":["songbird::input::sources::file::File"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/struct.HttpRequest.html\" title=\"struct songbird::input::HttpRequest\">HttpRequest</a>","synthetic":true,"types":["songbird::input::sources::http::HttpRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/input/struct.YoutubeDl.html\" title=\"struct songbird::input::YoutubeDl\">YoutubeDl</a>","synthetic":true,"types":["songbird::input::sources::ytdl::YoutubeDl"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/input/enum.Input.html\" title=\"enum songbird::input::Input\">Input</a>","synthetic":true,"types":["songbird::input::Input"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/join/struct.Join.html\" title=\"struct songbird::join::Join\">Join</a>","synthetic":true,"types":["songbird::join::Join"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/join/struct.JoinGateway.html\" title=\"struct songbird::join::JoinGateway\">JoinGateway</a>","synthetic":true,"types":["songbird::join::JoinGateway"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/struct.Songbird.html\" title=\"struct songbird::Songbird\">Songbird</a>","synthetic":true,"types":["songbird::manager::Songbird"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/serenity/struct.SongbirdKey.html\" title=\"struct songbird::serenity::SongbirdKey\">SongbirdKey</a>","synthetic":true,"types":["songbird::serenity::SongbirdKey"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/shards/enum.Sharder.html\" title=\"enum songbird::shards::Sharder\">Sharder</a>","synthetic":true,"types":["songbird::shards::Sharder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/shards/struct.SerenitySharder.html\" title=\"struct songbird::shards::SerenitySharder\">SerenitySharder</a>","synthetic":true,"types":["songbird::shards::SerenitySharder"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/shards/enum.Shard.html\" title=\"enum songbird::shards::Shard\">Shard</a>","synthetic":true,"types":["songbird::shards::Shard"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"songbird/shards/struct.SerenityShardHandle.html\" title=\"struct songbird::shards::SerenityShardHandle\">SerenityShardHandle</a>","synthetic":true,"types":["songbird::shards::SerenityShardHandle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.Action.html\" title=\"struct songbird::tracks::Action\">Action</a>","synthetic":true,"types":["songbird::tracks::action::Action"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.TrackHandle.html\" title=\"struct songbird::tracks::TrackHandle\">TrackHandle</a>","synthetic":true,"types":["songbird::tracks::handle::TrackHandle"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.TrackCallback.html\" title=\"struct songbird::tracks::TrackCallback\">TrackCallback</a>&lt;T&gt;","synthetic":true,"types":["songbird::tracks::handle::TrackCallback"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/tracks/enum.LoopState.html\" title=\"enum songbird::tracks::LoopState\">LoopState</a>","synthetic":true,"types":["songbird::tracks::looping::LoopState"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/tracks/enum.PlayMode.html\" title=\"enum songbird::tracks::PlayMode\">PlayMode</a>","synthetic":true,"types":["songbird::tracks::mode::PlayMode"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.TrackQueue.html\" title=\"struct songbird::tracks::TrackQueue\">TrackQueue</a>","synthetic":true,"types":["songbird::tracks::queue::TrackQueue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.Queued.html\" title=\"struct songbird::tracks::Queued\">Queued</a>","synthetic":true,"types":["songbird::tracks::queue::Queued"]},{"text":"impl Freeze for <a class=\"enum\" href=\"songbird/tracks/enum.ReadyState.html\" title=\"enum songbird::tracks::ReadyState\">ReadyState</a>","synthetic":true,"types":["songbird::tracks::ready::ReadyState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.TrackState.html\" title=\"struct songbird::tracks::TrackState\">TrackState</a>","synthetic":true,"types":["songbird::tracks::state::TrackState"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.View.html\" title=\"struct songbird::tracks::View\">View</a>&lt;'a&gt;","synthetic":true,"types":["songbird::tracks::view::View"]},{"text":"impl Freeze for <a class=\"struct\" href=\"songbird/tracks/struct.Track.html\" title=\"struct songbird::tracks::Track\">Track</a>","synthetic":true,"types":["songbird::tracks::Track"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()