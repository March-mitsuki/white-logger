import path from "path";
import { DateTime } from "luxon";
import { parseMsgs } from "@white-logger/shared";

import { colorize, ansiColor, ansiStyle } from "./colors";
import { createFile } from "./filesys";
import { getTrace } from "./tracer";

type LoggerMode = "normal" | "console" | "write" | "string";
type LoggerLevel = "err" | "warn" | "info" | "log";

type NodeLoggerConfig = {
  logPath?: string;
  logDateFmt: string;
  filenameDateFmt: string;
  trace?: boolean;
};

const defaultConfig: NodeLoggerConfig = {
  logPath: undefined,
  logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
  filenameDateFmt: "yyyy'-'LL'-'dd",
  trace: true,
};

const logger = (
  backColor: ansiColor,
  level: LoggerLevel,
  loggerMode: LoggerMode,
  config: NodeLoggerConfig,
) => {
  return (prefix: string, ...msgs: unknown[]): string | void => {
    const { logPath, logDateFmt, filenameDateFmt, trace } = config;

    const parsedMsgs = parseMsgs(...msgs);

    const logDateStr = DateTime.now().toFormat(logDateFmt);
    const colorizedStr =
      colorize(` ${prefix} `, backColor) +
      colorize(` ${logDateStr} `, ansiColor.brightBlack, ansiStyle.fontBold) +
      `${parsedMsgs}`;
    const normalStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}`;

    if (loggerMode === "string") {
      return `(${level})${normalStr}`;
    }
    if (loggerMode === "normal" || loggerMode === "console") {
      if (level === "err" && trace) {
        console.error(colorizedStr, getTrace());
      } else if (level === "warn" && trace) {
        console.warn(colorizedStr, getTrace());
      } else {
        console.log(colorizedStr);
      }
    }
    if (loggerMode === "normal" || loggerMode === "write") {
      if (logPath) {
        const filenameDate = DateTime.now().toFormat(filenameDateFmt);
        const logFilePath = `${filenameDate}_${level}.log`;

        let writePath = "";
        const fullPathReg = /^\//;
        if (fullPathReg.test(logPath)) {
          writePath = path.resolve(logPath, logFilePath); // eslint-disable-line
        } else {
          writePath = path.resolve(process.cwd(), logPath, logFilePath); // eslint-disable-line
        }

        if (level === "err" || level === "warn") {
          const printStr = normalStr + getTrace() + "\n";
          createFile(writePath, printStr, { flag: "a" });
        } else {
          createFile(writePath, normalStr + "\n", { flag: "a" });
        }
      }
    }
    return;
  };
};

export const createNodeLogger = (config?: Partial<NodeLoggerConfig>) => {
  let _config = JSON.parse(JSON.stringify(defaultConfig)) as NodeLoggerConfig;
  if (config) {
    _config = {
      ..._config,
      ...config,
    };
  }

  return {
    log: logger(ansiColor.bgGreen, "log", "normal", _config),
    info: logger(ansiColor.bgBlue, "info", "normal", _config),
    warn: logger(ansiColor.bgYellow, "warn", "normal", _config),
    err: logger(ansiColor.bgRed, "err", "normal", _config),
    console: {
      log: logger(ansiColor.bgGreen, "log", "console", _config),
      info: logger(ansiColor.bgBlue, "info", "console", _config),
      warn: logger(ansiColor.bgYellow, "warn", "console", _config),
      err: logger(ansiColor.bgRed, "err", "console", _config),
    },
    write: {
      log: logger(ansiColor.bgGreen, "log", "write", _config),
      info: logger(ansiColor.bgBlue, "info", "write", _config),
      warn: logger(ansiColor.bgYellow, "warn", "write", _config),
      err: logger(ansiColor.bgRed, "err", "write", _config),
    },
    string: {
      log: logger(ansiColor.bgGreen, "log", "string", _config),
      info: logger(ansiColor.bgBlue, "info", "string", _config),
      warn: logger(ansiColor.bgYellow, "warn", "string", _config),
      err: logger(ansiColor.bgRed, "err", "string", _config),
    },
  };
};
