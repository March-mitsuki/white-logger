import { _err, _err_c, _err_s, _err_w, _info, _info_c, _info_s, _info_w, _normal, _normal_c, _normal_s, _normal_w, _warn, _warn_c, _warn_s, _warn_w, } from "./nodelogger-core";
export function err(prefix, ...args) {
    _err(prefix, ...args);
}
export function errWrite(prefix, ...args) {
    _err_w(prefix, ...args);
}
export function errConsole(prefix, ...args) {
    _err_c(prefix, ...args);
}
export function sErr(prefix, ...args) {
    return _err_s(prefix, ...args);
}
export function warn(prefix, ...args) {
    _warn(prefix, ...args);
}
export function warnWrite(prefix, ...args) {
    _warn_w(prefix, ...args);
}
export function warnConsole(prefix, ...args) {
    _warn_c(prefix, ...args);
}
export function sWarn(prefix, ...args) {
    return _warn_s(prefix, ...args);
}
export function normal(prefix, ...args) {
    _normal(prefix, ...args);
}
export function normalWrite(prefix, ...args) {
    _normal_w(prefix, ...args);
}
export function normalConsole(prefix, ...args) {
    _normal_c(prefix, ...args);
}
export function sNormal(prefix, ...args) {
    return _normal_s(prefix, ...args);
}
export function info(prefix, ...args) {
    _info(prefix, ...args);
}
export function infoWrite(prefix, ...args) {
    _info_w(prefix, ...args);
}
export function infoConsole(prefix, ...args) {
    _info_c(prefix, ...args);
}
export function sInfo(prefix, ...args) {
    return _info_s(prefix, ...args);
}
