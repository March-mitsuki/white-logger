import { DateTime } from "luxon";
import { replacer } from "../utils/replacer";
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
                return JSON.stringify(elem, replacer(), 2);
            }
            else if (typeof elem === "string") {
                return elem;
            }
            else {
                return JSON.stringify(elem);
            }
        })
            .join(` `);
        const logDateStr = DateTime.now().toFormat(logDateFmt);
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
