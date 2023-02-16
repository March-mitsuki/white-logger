"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const createFile = (path, data, options) => {
    promises_1.default.writeFile(path, data, options).catch((err) => {
        // eslint-disable-next-line
        if (err.code === "ENOENT" && err.syscall === "open") {
            const callPath = err.path; // eslint-disable-line
            const dirPath = callPath.slice(0, callPath.lastIndexOf("/"));
            promises_1.default.mkdir(dirPath, { recursive: true })
                .then(() => {
                (0, exports.createFile)(path, data, options);
            })
                .catch((err) => {
                console.error("[createFile] mkdir:", err);
            });
        }
        else {
            console.error("[createFile]", err);
        }
    });
};
exports.createFile = createFile;
