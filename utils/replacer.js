"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMsgs = exports.replacer = void 0;
const replacer = () => {
    const seen = new WeakSet();
    return (_, v) => {
        if (typeof v === "object" && v != null) {
            if (seen.has(v)) {
                return;
            }
            seen.add(v);
        }
        return v;
    };
};
exports.replacer = replacer;
const parseMsgs = (...args) => {
    return args
        .map((elem) => {
        if (elem instanceof Object) {
            return JSON.stringify(elem, (0, exports.replacer)(), 2);
        }
        else if (typeof elem === "string") {
            return elem;
        }
        else {
            return JSON.stringify(elem);
        }
    })
        .join(` `);
};
exports.parseMsgs = parseMsgs;
