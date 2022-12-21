"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._info_s = exports._info_w = exports._info_c = exports._info = exports._normal_s = exports._normal_w = exports._normal_c = exports._normal = exports._warn_s = exports._warn_w = exports._warn_c = exports._warn = exports._err_s = exports._err_w = exports._err_c = exports._err = exports.configNodeLogger = void 0;
const promises_1 = require("fs/promises");
const luxon_1 = require("luxon");
const path_1 = __importDefault(require("path"));
const ansicode_1 = require("../utils/ansicode");
const replacer_1 = require("../utils/replacer");
let __config__ = {
    logPath: undefined,
    logDateFmt: "yyyy'-'LL'-'dd HH'-'mm'-'ss Z",
    filenameDateFmt: "yyyy'-'LL'-'dd",
};
const logger = (backColor, level, mode) => {
    return (prefix, filename, ...msgs) => {
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
        const colorizedStr = `${backColor} ${prefix} ${ansicode_1.ansiFont.reset}` +
            ` ${ansicode_1.ansiFont.fontBold}${ansicode_1.ansiFont.brightBlack}${logDateStr}${ansicode_1.ansiFont.reset}` +
            ` ${parsedMsgs}` +
            ` ${ansicode_1.ansiFont.underLine}${filePath}${ansicode_1.ansiFont.reset}`;
        const normalStr = `[${prefix}]-[${logDateStr}] ${parsedMsgs}`;
        if (mode === "string") {
            return `(${level})${normalStr}`;
        }
        if (mode === "normal" || mode === "console") {
            console.log(colorizedStr);
        }
        if (mode === "normal" || mode === "write") {
            if (logPath) {
                const filenameDate = luxon_1.DateTime.now().toFormat(filenameDateFmt);
                const logFilePath = `${filenameDate}_${level}.log`;
                let writePath;
                const fullPathReg = /^\//;
                if (fullPathReg.test(logPath)) {
                    writePath = path_1.default.resolve(logPath, logFilePath);
                }
                else {
                    writePath = path_1.default.resolve(process.cwd(), logPath, logFilePath);
                }
                (0, promises_1.writeFile)(writePath, normalStr + "\n", {
                    flag: "a",
                }).catch((err) => {
                    console.log(`[${ansicode_1.ansiFont.red}writeLogToFile${ansicode_1.ansiFont.reset}]`, err);
                });
            }
        }
        return;
    };
};
const configNodeLogger = (config) => {
    __config__ = {
        ...__config__,
        ...config,
    };
    return;
};
exports.configNodeLogger = configNodeLogger;
exports._err = logger(ansicode_1.ansiBack.red, "err", "normal");
exports._err_c = logger(ansicode_1.ansiBack.red, "err", "console");
exports._err_w = logger(ansicode_1.ansiBack.red, "err", "write");
exports._err_s = logger(ansicode_1.ansiBack.red, "err", "string");
exports._warn = logger(ansicode_1.ansiBack.yellow, "warn", "normal");
exports._warn_c = logger(ansicode_1.ansiBack.yellow, "warn", "console");
exports._warn_w = logger(ansicode_1.ansiBack.yellow, "warn", "write");
exports._warn_s = logger(ansicode_1.ansiBack.yellow, "warn", "string");
exports._normal = logger(ansicode_1.ansiBack.green, "normal", "normal");
exports._normal_c = logger(ansicode_1.ansiBack.yellow, "normal", "console");
exports._normal_w = logger(ansicode_1.ansiBack.yellow, "normal", "write");
exports._normal_s = logger(ansicode_1.ansiBack.yellow, "normal", "string");
exports._info = logger(ansicode_1.ansiBack.blue, "info", "normal");
exports._info_c = logger(ansicode_1.ansiBack.blue, "info", "console");
exports._info_w = logger(ansicode_1.ansiBack.blue, "info", "write");
exports._info_s = logger(ansicode_1.ansiBack.blue, "info", "string");
