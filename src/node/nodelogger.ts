import {
  _err,
  _err_c,
  _err_s,
  _err_w,
  _info,
  _info_c,
  _info_s,
  _info_w,
  _normal,
  _normal_c,
  _normal_s,
  _normal_w,
  _warn,
  _warn_c,
  _warn_s,
  _warn_w,
} from "./nodelogger-core";

export function err(prefix: string, ...args: unknown[]): void {
  _err(prefix, ...args);
}
export function errWrite(prefix: string, ...args: unknown[]): void {
  _err_w(prefix, ...args);
}
export function errConsole(prefix: string, ...args: unknown[]): void {
  _err_c(prefix, ...args);
}
export function sErr(prefix: string, ...args: unknown[]): string {
  return _err_s(prefix, ...args);
}

export function warn(prefix: string, ...args: unknown[]): void {
  _warn(prefix, ...args);
}
export function warnWrite(prefix: string, ...args: unknown[]): void {
  _warn_w(prefix, ...args);
}
export function warnConsole(prefix: string, ...args: unknown[]): void {
  _warn_c(prefix, ...args);
}
export function sWarn(prefix: string, ...args: unknown[]): string {
  return _warn_s(prefix, ...args);
}

export function normal(prefix: string, ...args: unknown[]): void {
  _normal(prefix, ...args);
}
export function normalWrite(prefix: string, ...args: unknown[]): void {
  _normal_w(prefix, ...args);
}
export function normalConsole(prefix: string, ...args: unknown[]): void {
  _normal_c(prefix, ...args);
}
export function sNormal(prefix: string, ...args: unknown[]): string {
  return _normal_s(prefix, ...args);
}

export function info(prefix: string, ...args: unknown[]): void {
  _info(prefix, ...args);
}
export function infoWrite(prefix: string, ...args: unknown[]): void {
  _info_w(prefix, ...args);
}
export function infoConsole(prefix: string, ...args: unknown[]): void {
  _info_c(prefix, ...args);
}
export function sInfo(prefix: string, ...args: unknown[]): string {
  return _info_s(prefix, ...args);
}
