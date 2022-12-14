"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = void 0;
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
