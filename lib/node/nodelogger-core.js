"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._info = exports._nomal = exports._warn = exports._err = exports.configLogger = void 0;
const promises_1 = require("fs/promises");
const luxon_1 = require("luxon");
const path_1 = __importDefault(require("path"));
const ansicode_1 = require("@/utils/ansicode");
const replacer_1 = require("@/utils/replacer");
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
            filePath = path_1.default.relative(process.cwd(), filenameMatching[1]);
        }
        else {
            msgs = [filename, ...msgs];
        }
        const parsedMsgs = msgs
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
        const coloredStr = `${backColor} ${prefix} ${ansicode_1.ansiFont.reset}` +
            ` ${ansicode_1.ansiFont.fontBold}${ansicode_1.ansiFont.brightBlack}${logDateStr}${ansicode_1.ansiFont.reset}` +
            ` ${parsedMsgs}` +
            ` ${ansicode_1.ansiFont.underLine}${filePath}${ansicode_1.ansiFont.reset}`;
        const normalStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}\n`;
        if (mode === "string") {
            return normalStr;
        }
        if (mode === "normal" || mode === "console") {
            console.log(coloredStr);
        }
        if (mode === "normal" || mode === "write") {
            if (logPath) {
                const filenameDate = luxon_1.DateTime.now().toFormat(filenameDateFmt);
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
                    writePath = path_1.default.resolve(logPath, logFilePath);
                }
                else {
                    writePath = path_1.default.resolve(process.cwd(), logPath, logFilePath);
                }
                (0, promises_1.writeFile)(writePath, normalStr, {
                    flag: "a",
                }).catch((err) => {
                    console.log(`[${ansicode_1.ansiFont.red}writeLogToFile${ansicode_1.ansiFont.reset}]`, err);
                });
            }
        }
        return;
    };
};
const configLogger = (config) => {
    __config__ = {
        ...__config__,
        ...config,
    };
    return;
};
exports.configLogger = configLogger;
exports._err = logger(ansicode_1.ansiBack.red, "err");
exports._warn = logger(ansicode_1.ansiBack.yellow, "warn");
exports._nomal = logger(ansicode_1.ansiBack.green, "nomal");
exports._info = logger(ansicode_1.ansiBack.blue, "info");
