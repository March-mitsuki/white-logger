import { writeFile } from "fs/promises";
import { DateTime } from "luxon";
import path from "path";

import { ansiFont, ansiBack } from "../utils/ansicode";

type LogLevel = "err" | "warn" | "info" | "nomal";
type LoggerMode = "all" | "console" | "write";

const logDateFmt = "yyyy'-'LL'-'dd HH'-'mm'-'ss Z";

const replacer = () => {
  const seen = new WeakSet();
  return (_: unknown, v: unknown) => {
    if (typeof v === "object" && v != null) {
      if (seen.has(v)) {
        return;
      }
      seen.add(v);
    }
    return v;
  };
};

const logger = (backColor: ansiBack, level: LogLevel) => {
  return (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => {
    // 判断第二个引数是否为path, 若不是则交给msgs作为普通信息处理
    let filePath = "";
    const testFilename = filename.match(/(.*\/.*\..*)\s?/);
    if (testFilename) {
      filePath = path.relative(process.cwd(), testFilename[1]);
    } else {
      msgs = [filename, ...msgs];
    }

    const parsedmsgs = msgs
      .map((elem) => {
        if (elem instanceof Object) {
          return JSON.stringify(elem, replacer(), 2);
        } else if (typeof elem === "string") {
          return elem;
        } else {
          return JSON.stringify(elem);
        }
      })
      .join(` `);

    if (mode === "all" || mode === "console") {
      console.log(
        `${backColor} ${prefix} ${ansiFont.reset}` +
          ` ${ansiFont.fontBold}${ansiFont.brightBlack}${DateTime.now().toFormat(logDateFmt)}${
            ansiFont.reset
          }` +
          ` ${parsedmsgs}` +
          ` ${ansiFont.underLine}${filePath}${ansiFont.reset}`,
      );
    }

    if (mode === "all" || mode === "write") {
      if (process.env.DOYA_ROOT) {
        const filenameDate = DateTime.now().toFormat("yyyy'-'LL'-'dd");
        let logFilePath = `logs/${filenameDate}_server.log`;
        switch (level) {
          case "err":
            logFilePath = `logs/${filenameDate}_server_err.log`;
            break;
          case "warn":
            logFilePath = `logs/${filenameDate}_server_warn.log`;
            break;
          case "nomal":
            logFilePath = `logs/${filenameDate}_server_nomal.log`;
            break;
          case "info":
            logFilePath = `logs/${filenameDate}_server_info.log`;
            break;
        }

        const writeLogData = `[${prefix}]-[${DateTime.now().toFormat(logDateFmt)}] ${parsedmsgs}\n`;

        writeFile(path.resolve(process.env.DOYA_ROOT, logFilePath), writeLogData, {
          flag: "a",
        }).catch((err) => {
          console.log(`[${ansiFont.red}writeLogToFile${ansiFont.reset}]`, err);
        });
      }
    }

    return;
  };
};

export const _err = logger(ansiBack.red, "err");
export const _warn = logger(ansiBack.yellow, "warn");
export const _nomal = logger(ansiBack.green, "nomal");
export const _info = logger(ansiBack.blue, "info");

// 再套一层 warpper 使得函数扁平化
export function err(prefix: string, ...args: unknown[]): void;
export function err(prefix: string, filename: string, ...args: unknown[]): void;
export function err(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _err(prefix, filename, "all", args.slice(2));
}
export function errWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function errWrite(prefix: string, ...args: unknown[]): void;
export function errWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _err(prefix, filename, "write", args.slice(2));
}
export function errConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function errConsole(prefix: string, ...args: unknown[]): void;
export function errConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _err(prefix, filename, "console", args.slice(2));
}

export function warn(prefix: string, filename: string, ...args: unknown[]): void;
export function warn(prefix: string, ...args: unknown[]): void;
export function warn(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _warn(prefix, filename, "all", args.slice(2));
}
export function warnWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function warnWrite(prefix: string, ...args: unknown[]): void;
export function warnWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _warn(prefix, filename, "write", args.slice(2));
}
export function warnConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function warnConsole(prefix: string, ...args: unknown[]): void;
export function warnConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _warn(prefix, filename, "console", args.slice(2));
}

export function nomal(prefix: string, filename: string, ...args: unknown[]): void;
export function nomal(prefix: string, ...args: unknown[]): void;
export function nomal(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _nomal(prefix, filename, "all", args.slice(2));
}
export function nomalWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function nomalWrite(prefix: string, ...args: unknown[]): void;
export function nomalWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _nomal(prefix, filename, "write", args.slice(2));
}
export function nomalConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function nomalConsole(prefix: string, ...args: unknown[]): void;
export function nomalConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _nomal(prefix, filename, "console", args.slice(2));
}

export function info(prefix: string, filename: string, ...args: unknown[]): void;
export function info(prefix: string, ...args: unknown[]): void;
export function info(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _info(prefix, filename, "all", args.slice(2));
}
export function infoWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function infoWrite(prefix: string, ...args: unknown[]): void;
export function infoWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _info(prefix, filename, "write", args.slice(2));
}
export function infoConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function infoConsole(prefix: string, ...args: unknown[]): void;
export function infoConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  const filename = args[1] as string;
  return _info(prefix, filename, "console", args.slice(2));
}
