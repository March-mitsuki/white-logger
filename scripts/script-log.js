/* eslint-disable */

/**
 *
 * @param  {...any} message
 */
function log(...message) {
  console.log("[ LOG ]", ...message);
}

/**
 *
 * @param  {...any} message
 */
function info(...message) {
  console.log("[ INFO ]", ...message);
}

/**
 *
 * @param  {...any} message
 */
function warn(...message) {
  console.log("[ WARN ]", ...message);
}

/**
 *
 * @param  {...any} message
 */
function error(...message) {
  console.log("[ ERROR ]", ...message);
}

/**
 *
 * @param  {...any} message
 */
function cmdStdout(...message) {
  console.log("[ STDOUT ]", ...message);
}

/**
 *
 * @param  {...any} message
 */
function cmdStderr(...message) {
  console.log("[ STDERR ]", ...message);
}

/**
 * Log spawn process stdout and stderr
 * @param {ChildProcessWithoutNullStreams} spawn
 * @param {string} name
 */
function connectSpawn(spawn, name = "") {
  spawn.stdout.on("data", (data) => {
    cmdStdout(name, `${data}`);
  });
  spawn.stderr.on("data", (data) => {
    cmdStderr(name, `${data}`);
  });
}

module.exports = {
  log,
  info,
  warn,
  error,
  cmdStdout,
  cmdStderr,
  connectSpawn,
};
