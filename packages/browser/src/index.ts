import { DateTime } from "luxon";
import { parseMsgs, replacer } from "@white-logger/shared";

import { getTrace } from "./tracer";

type LoggerMode = "normal" | "string";
type LoggerLevel = "err" | "warn" | "info" | "log";

type BrowserLoggerConfig = {
  mode: "development" | "production";
  logDateFmt: string;
  targetUrl: string | undefined;
  storagePrefix: string | undefined;
  trace?: boolean;
};

type BrowserPostBody = {
  level: string;
  prefix: string;
  msg: unknown;
  isotime: string;
};

const defaultConfig: BrowserLoggerConfig = {
  mode: "development",
  logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
  targetUrl: undefined,
  storagePrefix: undefined,
  trace: true,
};

const logger = (
  color: string,
  level: LoggerLevel,
  loggerMode: LoggerMode,
  config: BrowserLoggerConfig,
) => {
  return (prefix: string, ...msgs: unknown[]) => {
    const { mode, logDateFmt, targetUrl, storagePrefix, trace } = config;

    if (
      mode === "production" &&
      typeof targetUrl === "undefined" &&
      typeof storagePrefix === "undefined"
    ) {
      return;
    }

    const logDateStr = DateTime.now().toFormat(logDateFmt);

    if (loggerMode === "string" || mode === "development") {
      const parsedMsgs = parseMsgs(...msgs);
      const parsedStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}`;

      if (loggerMode === "string") {
        return `(${level})${parsedStr}`;
      }
      if (mode === "development") {
        if (level === "err" && trace) {
          console.log(
            `%c[${prefix}]%c %c${logDateStr}%c`,
            `color: ${color}; font-weight: bold;`,
            "",
            "color: gray;",
            "",
            ...msgs,
            getTrace(),
          );
        } else if (level === "warn" && trace) {
          console.log(
            `%c[${prefix}]%c %c${logDateStr}%c`,
            `color: ${color}; font-weight: bold;`,
            "",
            "color: gray;",
            "",
            ...msgs,
            getTrace(),
          );
        } else {
          console.log(
            `%c[${prefix}]%c %c${logDateStr}%c`,
            `color: ${color}; font-weight: bold;`,
            "",
            "color: gray;",
            "",
            ...msgs,
          );
        }
      }
    }

    if (mode === "production") {
      const body: BrowserPostBody = {
        level: level,
        prefix: prefix,
        msg: msgs,
        isotime: DateTime.now().toISO(),
      };
      if (targetUrl) {
        fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body, replacer()),
        }).catch(() => {
          console.log("fetch error.");
        });
      }
      if (storagePrefix && typeof window !== "undefined") {
        const storagePath = `${storagePrefix}/${level}`;
        localStorage.setItem(storagePath, JSON.stringify(body, replacer()));
      }
    }

    return;
  };
};

export const createBrowserLogger = (config?: Partial<BrowserLoggerConfig>) => {
  let _config = JSON.parse(
    JSON.stringify(defaultConfig),
  ) as BrowserLoggerConfig;
  if (config) {
    _config = {
      ..._config,
      ...config,
    };
  }

  return {
    log: logger("gray", "log", "normal", _config),
    info: logger("blue", "info", "normal", _config),
    warn: logger("orange", "warn", "normal", _config),
    err: logger("red", "err", "normal", _config),
    string: {
      log: logger("gray", "log", "string", _config),
      info: logger("blue", "info", "string", _config),
      warn: logger("orange", "warn", "string", _config),
      err: logger("red", "err", "string", _config),
    },
  };
};
