"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sInfo = exports.infoConsole = exports.infoWrite = exports.info = exports.sNormal = exports.normalConsole = exports.normalWrite = exports.normal = exports.sWarn = exports.warnConsole = exports.warnWrite = exports.warn = exports.sErr = exports.errConsole = exports.errWrite = exports.err = void 0;
const nodelogger_core_1 = require("./nodelogger-core");
function err(prefix, ...args) {
    (0, nodelogger_core_1._err)(prefix, ...args);
}
exports.err = err;
function errWrite(prefix, ...args) {
    (0, nodelogger_core_1._err_w)(prefix, ...args);
}
exports.errWrite = errWrite;
function errConsole(prefix, ...args) {
    (0, nodelogger_core_1._err_c)(prefix, ...args);
}
exports.errConsole = errConsole;
function sErr(prefix, ...args) {
    return (0, nodelogger_core_1._err_s)(prefix, ...args);
}
exports.sErr = sErr;
function warn(prefix, ...args) {
    (0, nodelogger_core_1._warn)(prefix, ...args);
}
exports.warn = warn;
function warnWrite(prefix, ...args) {
    (0, nodelogger_core_1._warn_w)(prefix, ...args);
}
exports.warnWrite = warnWrite;
function warnConsole(prefix, ...args) {
    (0, nodelogger_core_1._warn_c)(prefix, ...args);
}
exports.warnConsole = warnConsole;
function sWarn(prefix, ...args) {
    return (0, nodelogger_core_1._warn_s)(prefix, ...args);
}
exports.sWarn = sWarn;
function normal(prefix, ...args) {
    (0, nodelogger_core_1._normal)(prefix, ...args);
}
exports.normal = normal;
function normalWrite(prefix, ...args) {
    (0, nodelogger_core_1._normal_w)(prefix, ...args);
}
exports.normalWrite = normalWrite;
function normalConsole(prefix, ...args) {
    (0, nodelogger_core_1._normal_c)(prefix, ...args);
}
exports.normalConsole = normalConsole;
function sNormal(prefix, ...args) {
    return (0, nodelogger_core_1._normal_s)(prefix, ...args);
}
exports.sNormal = sNormal;
function info(prefix, ...args) {
    (0, nodelogger_core_1._info)(prefix, ...args);
}
exports.info = info;
function infoWrite(prefix, ...args) {
    (0, nodelogger_core_1._info_w)(prefix, ...args);
}
exports.infoWrite = infoWrite;
function infoConsole(prefix, ...args) {
    (0, nodelogger_core_1._info_c)(prefix, ...args);
}
exports.infoConsole = infoConsole;
function sInfo(prefix, ...args) {
    return (0, nodelogger_core_1._info_s)(prefix, ...args);
}
exports.sInfo = sInfo;
