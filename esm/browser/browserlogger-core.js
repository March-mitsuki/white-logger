import { DateTime } from "luxon";
import { getTraceBrowser } from "../utils/tracer";
import { parseMsgs, replacer } from "../utils/replacer";
let __config__ = {
    mode: "development",
    logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
    targetUrl: undefined,
    storagePrefix: undefined,
    trace: true,
};
const logger = (color, level, loggerMode) => {
    return (prefix, ...msgs) => {
        const { mode, logDateFmt, targetUrl, storagePrefix, trace } = __config__;
        if (mode === "production" &&
            typeof targetUrl === "undefined" &&
            typeof storagePrefix === "undefined") {
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
                    console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedMsgs} ${getTraceBrowser()}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
                }
                else if (level === "warn" && trace) {
                    console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedMsgs} ${getTraceBrowser()}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
                }
                else {
                    console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedMsgs}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
                }
            }
        }
        if (mode === "production") {
            const body = {
                level: level,
                prefix: prefix,
                msg: msgs,
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
export const configBrowserLogger = (config) => {
    __config__ = {
        ...__config__,
        ...config,
    };
    return;
};
export const err = logger("red", "err", "normal");
export const sErr = logger("red", "err", "string");
export const warn = logger("orange", "warn", "normal");
export const sWarn = logger("orange", "warn", "string");
export const normal = logger("green", "normal", "normal");
export const sNormal = logger("green", "normal", "string");
export const info = logger("blue", "info", "normal");
export const sInfo = logger("blue", "info", "string");
