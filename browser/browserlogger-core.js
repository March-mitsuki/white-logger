"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sInfo = exports.info = exports.sNormal = exports.normal = exports.sWarn = exports.warn = exports.sErr = exports.err = exports.configBrowserLogger = void 0;
const luxon_1 = require("luxon");
const tracer_1 = require("../utils/tracer");
const replacer_1 = require("../utils/replacer");
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
        const logDateStr = luxon_1.DateTime.now().toFormat(logDateFmt);
        if (loggerMode === "string" || mode === "development") {
            const parsedMsgs = (0, replacer_1.parseMsgs)(...msgs);
            const parsedStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}`;
            if (loggerMode === "string") {
                return `(${level})${parsedStr}`;
            }
            if (mode === "development") {
                if (level === "err" && trace) {
                    console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedMsgs} ${(0, tracer_1.getTraceBrowser)()}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
                }
                else if (level === "warn" && trace) {
                    console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedMsgs} ${(0, tracer_1.getTraceBrowser)()}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
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
                    body: JSON.stringify(body, (0, replacer_1.replacer)()),
                }).catch(() => {
                    console.log("fetch error.");
                });
            }
            if (storagePrefix && typeof window !== "undefined") {
                const storagePath = `${storagePrefix}/${level}`;
                localStorage.setItem(storagePath, JSON.stringify(body, (0, replacer_1.replacer)()));
            }
        }
        return;
    };
};
const configBrowserLogger = (config) => {
    __config__ = {
        ...__config__,
        ...config,
    };
    return;
};
exports.configBrowserLogger = configBrowserLogger;
exports.err = logger("red", "err", "normal");
exports.sErr = logger("red", "err", "string");
exports.warn = logger("orange", "warn", "normal");
exports.sWarn = logger("orange", "warn", "string");
exports.normal = logger("green", "normal", "normal");
exports.sNormal = logger("green", "normal", "string");
exports.info = logger("blue", "info", "normal");
exports.sInfo = logger("blue", "info", "string");
