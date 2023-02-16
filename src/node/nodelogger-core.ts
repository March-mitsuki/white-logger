import { DateTime } from "luxon";
import path from "path";
import { createFile, getTrance } from "../utils/filesys";

import { ansiFont, ansiBack } from "../utils/ansicode";
import { parseMsgs } from "../utils/replacer";
import { LoggerLevel, NodeLoggerConfig } from "../utils/types";

type LoggerMode = "normal" | "console" | "write" | "string";

let __config__: NodeLoggerConfig = {
  logPath: undefined,
  logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
  filenameDateFmt: "yyyy'-'LL'-'dd",
};

const logger = (backColor: ansiBack, level: LoggerLevel, loggerMode: LoggerMode) => {
  return (prefix: string, filename: string | unknown, ...msgs: unknown[]): string | void => {
    const { logPath, logDateFmt, filenameDateFmt } = __config__;

    let filePath = "";
    if (typeof filename === "string") {
      const filenameMatching = filename.match(/(.*\/.*\..*)\s?/);
      if (filenameMatching) {
        filePath = path.relative(process.cwd(), filenameMatching[1]);
      } else {
        msgs = [filename, ...msgs];
      }
    } else {
      msgs = [filename, ...msgs];
    }

    const parsedMsgs = parseMsgs(...msgs);

    const logDateStr = DateTime.now().toFormat(logDateFmt);
    const colorizedStr =
      `${backColor} ${prefix} ${ansiFont.reset}` +
      ` ${ansiFont.fontBold}${ansiFont.brightBlack}${logDateStr}${ansiFont.reset}` +
      ` ${parsedMsgs}` +
      ` ${ansiFont.underLine}${filePath}${ansiFont.reset}`;
    const normalStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}`;

    if (loggerMode === "string") {
      return `(${level})${normalStr}`;
    }
    if (loggerMode === "normal" || loggerMode === "console") {
      if (level === "err") {
        console.error(colorizedStr, getTrance());
      } else if (level === "warn") {
        console.warn(colorizedStr, getTrance());
      } else {
        console.log(colorizedStr);
      }
    }
    if (loggerMode === "normal" || loggerMode === "write") {
      if (logPath) {
        const filenameDate = DateTime.now().toFormat(filenameDateFmt);
        const logFilePath = `${filenameDate}_${level}.log`;

        let writePath: string | undefined;
        const fullPathReg = /^\//;
        if (fullPathReg.test(logPath)) {
          writePath = path.resolve(logPath, logFilePath);
        } else {
          writePath = path.resolve(process.cwd(), logPath, logFilePath);
        }

        createFile(writePath, normalStr + "\n", { flag: "a" });
      }
    }
    return;
  };
};

export const configNodeLogger = (config: Partial<NodeLoggerConfig>) => {
  __config__ = {
    ...__config__,
    ...config,
  };
  return;
};

// prettier-ignore
type SetReturnType<F extends (...args: any) => any, R> = F extends (...args: any) => any ? (...args: Parameters<F>) => R : never; // eslint-disable-line @typescript-eslint/no-explicit-any

export const _err = logger(ansiBack.red, "err", "normal");
export const _err_c = logger(ansiBack.red, "err", "console");
export const _err_w = logger(ansiBack.red, "err", "write");
export const _err_s = logger(ansiBack.red, "err", "string") as SetReturnType<
  ReturnType<typeof logger>,
  string
>;

export const _warn = logger(ansiBack.yellow, "warn", "normal");
export const _warn_c = logger(ansiBack.yellow, "warn", "console");
export const _warn_w = logger(ansiBack.yellow, "warn", "write");
export const _warn_s = logger(ansiBack.yellow, "warn", "string") as SetReturnType<
  ReturnType<typeof logger>,
  string
>;

export const _normal = logger(ansiBack.green, "normal", "normal");
export const _normal_c = logger(ansiBack.yellow, "normal", "console");
export const _normal_w = logger(ansiBack.yellow, "normal", "write");
export const _normal_s = logger(ansiBack.yellow, "normal", "string") as SetReturnType<
  ReturnType<typeof logger>,
  string
>;

export const _info = logger(ansiBack.blue, "info", "normal");
export const _info_c = logger(ansiBack.blue, "info", "console");
export const _info_w = logger(ansiBack.blue, "info", "write");
export const _info_s = logger(ansiBack.blue, "info", "string") as SetReturnType<
  ReturnType<typeof logger>,
  string
>;
