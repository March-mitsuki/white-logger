import { ansiFont } from "./ansicode";
export const getTrace = (options) => {
    const obj = {};
    Error.captureStackTrace(obj, getTrace);
    if (!obj.stack) {
        throw new Error("Can not get trance.");
    }
    const stackArr = obj.stack.split("\n").slice(3);
    if (options && options.flag === "p") {
        obj.stack = "\n" + stackArr.join("\n");
        return obj.stack;
    }
    obj.stack = ansiFont.brightBlack + "\n" + stackArr.join("\n") + ansiFont.reset;
    return obj.stack;
};
export const getTraceBrowser = () => {
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
