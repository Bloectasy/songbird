use super::*;
use std::{io::Read, mem, process::Child};
use tokio::runtime::Handle;
use tracing::debug;

/// Handle for a child process which ensures that any subprocesses are properly closed
/// on drop.
///
/// # Warning
/// To allow proper cleanup of child processes, if you create a process chain you must
/// make sure to use `From<Vec<Child>>`. Here, the *last* process in the `Vec` will be
/// used as the audio byte source.
#[derive(Debug)]
pub struct ChildContainer(pub Vec<Child>);

impl Read for ChildContainer {
    fn read(&mut self, buffer: &mut [u8]) -> IoResult<usize> {
        match self.0.last_mut() {
            Some(ref mut child) => child.stdout.as_mut().unwrap().read(buffer),
            None => Ok(0),
        }
    }
}

impl From<Child> for ChildContainer {
    fn from(container: Child) -> Self {
        Self(vec![container])
    }
}

impl From<Vec<Child>> for ChildContainer {
    fn from(container: Vec<Child>) -> Self {
        Self(container)
    }
}

impl Drop for ChildContainer {
    fn drop(&mut self) {
        let children = mem::take(&mut self.0);

        if let Ok(handle) = Handle::try_current() {
            handle.spawn_blocking(move || {
                cleanup_child_processes(children);
            });
        } else {
            cleanup_child_processes(children);
        }
    }
}

fn cleanup_child_processes(mut children: Vec<Child>) {
    let attempt = if let Some(child) = children.last_mut() {
        child.kill()
    } else {
        return;
    };

    let attempt = attempt.and_then(|_| {
        children
            .iter_mut()
            .rev()
            .try_for_each(|child| child.wait().map(|_| ()))
    });

    if let Err(e) = attempt {
        debug!("Error awaiting child process: {:?}", e);
    }
}
