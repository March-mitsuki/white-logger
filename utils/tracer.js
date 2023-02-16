"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraceBrowser = exports.getTrace = void 0;
const ansicode_1 = require("./ansicode");
const getTrace = (options) => {
    const obj = {};
    Error.captureStackTrace(obj, exports.getTrace);
    if (!obj.stack) {
        throw new Error("Can not get trance.");
    }
    const stackArr = obj.stack.split("\n").slice(3);
    if (options && options.flag === "p") {
        obj.stack = "\n" + stackArr.join("\n");
        return obj.stack;
    }
    obj.stack = ansicode_1.ansiFont.brightBlack + "\n" + stackArr.join("\n") + ansicode_1.ansiFont.reset;
    return obj.stack;
};
exports.getTrace = getTrace;
const getTraceBrowser = () => {
    let stack = "";
    try {
        throw new Error();
    }
    catch (err) {
        if (err instanceof Error) {
            if (err.stack) {
                stack = err.stack;
            }
        }
    }
    const stackArr = stack.split("\n").slice(3);
    stack = "\n" + stackArr.join("\n");
    return stack;
};
exports.getTraceBrowser = getTraceBrowser;
