import { writeFile } from "fs/promises";
import { DateTime } from "luxon";
import path from "path";
import { ansiFont, ansiBack } from "../utils/ansicode";
import { replacer } from "../utils/replacer";
let __config__ = {
    logPath: undefined,
    logDateFmt: "yyyy'-'LL'-'dd HH'-'mm'-'ss Z",
    filenameDateFmt: "yyyy'-'LL'-'dd",
};
const logger = (backColor, level) => {
    return (prefix, filename, mode, ...msgs) => {
        const { logPath, logDateFmt, filenameDateFmt } = __config__;
        let filePath = "";
        const filenameMatching = filename.match(/(.*\/.*\..*)\s?/);
        if (filenameMatching) {
            filePath = path.relative(process.cwd(), filenameMatching[1]);
        }
        else {
            msgs = [filename, ...msgs];
        }
        const parsedMsgs = msgs
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
        const coloredStr = `${backColor} ${prefix} ${ansiFont.reset}` +
            ` ${ansiFont.fontBold}${ansiFont.brightBlack}${logDateStr}${ansiFont.reset}` +
            ` ${parsedMsgs}` +
            ` ${ansiFont.underLine}${filePath}${ansiFont.reset}`;
        const normalStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}\n`;
        if (mode === "string") {
            return normalStr;
        }
        if (mode === "normal" || mode === "console") {
            console.log(coloredStr);
        }
        if (mode === "normal" || mode === "write") {
            if (logPath) {
                const filenameDate = DateTime.now().toFormat(filenameDateFmt);
                let logFilePath = `${filenameDate}.log`;
                switch (level) {
                    case "err":
                        logFilePath = `${filenameDate}_err.log`;
                        break;
                    case "warn":
                        logFilePath = `${filenameDate}_warn.log`;
                        break;
                    case "nomal":
                        logFilePath = `${filenameDate}_nomal.log`;
                        break;
                    case "info":
                        logFilePath = `${filenameDate}_info.log`;
                        break;
                }
                let writePath;
                const fullPathReg = /^\//;
                if (fullPathReg.test(logPath)) {
                    writePath = path.resolve(logPath, logFilePath);
                }
                else {
                    writePath = path.resolve(process.cwd(), logPath, logFilePath);
                }
                writeFile(writePath, normalStr, {
                    flag: "a",
                }).catch((err) => {
                    console.log(`[${ansiFont.red}writeLogToFile${ansiFont.reset}]`, err);
                });
            }
        }
        return;
    };
};
export const configLogger = (config) => {
    __config__ = {
        ...__config__,
        ...config,
    };
    return;
};
export const _err = logger(ansiBack.red, "err");
export const _warn = logger(ansiBack.yellow, "warn");
export const _nomal = logger(ansiBack.green, "nomal");
export const _info = logger(ansiBack.blue, "info");
