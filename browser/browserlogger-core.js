"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sInfo = exports.info = exports.sNormal = exports.normal = exports.sWarn = exports.warn = exports.sErr = exports.err = exports.configBrowserLogger = void 0;
const luxon_1 = require("luxon");
const replacer_1 = require("../utils/replacer");
let __config__ = {
    mode: "development",
    logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
    targetUrl: undefined,
    storagePrefix: undefined,
};
const logger = (color, level, loggerMode) => {
    return (prefix, ...args) => {
        const { mode, logDateFmt, targetUrl, storagePrefix } = __config__;
        if (mode === "production" &&
            typeof targetUrl === "undefined" &&
            typeof storagePrefix === "undefined") {
            return;
        }
        const parsedArgs = args
            .map((elem) => {
            if (elem instanceof Object) {
                return JSON.stringify(elem, (0, replacer_1.replacer)(), 2);
            }
            else if (typeof elem === "string") {
                return elem;
            }
            else {
                return JSON.stringify(elem);
            }
        })
            .join(` `);
        const logDateStr = luxon_1.DateTime.now().toFormat(logDateFmt);
        const normalStr = `[${prefix}]-[${logDateStr}] ${parsedArgs}`;
        if (loggerMode === "string") {
            return `(${level})${normalStr}`;
        }
        if (mode === "development") {
            console.log(`%c[${prefix}]%c %c${logDateStr}%c ${parsedArgs}`, `color: ${color}; font-weight: bold;`, "", "color: gray;", "");
        }
        if (mode === "production" && targetUrl) {
            const body = {
                level: level,
                msg: normalStr,
            };
            fetch(targetUrl, {
                method: "POST",
                body: JSON.stringify(body),
            }).catch(() => {
                console.log("fetch error.");
            });
        }
        if (mode === "production" && storagePrefix && window && localStorage) {
            const storagePath = `${storagePrefix}/${level}`;
            localStorage.setItem(storagePath, normalStr);
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
