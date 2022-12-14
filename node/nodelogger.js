"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoConsole = exports.infoWrite = exports.info = exports.nomalConsole = exports.nomalWrite = exports.nomal = exports.warnConsole = exports.warnWrite = exports.warn = exports.sErr = exports.errConsole = exports.errWrite = exports.err = void 0;
const nodelogger_core_1 = require("./nodelogger-core");
function err(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err)(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err)(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err)(prefix, filename, "normal", ...msgs);
        }
    }
}
exports.err = err;
function errWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err)(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err)(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err)(prefix, filename, "write", ...msgs);
        }
    }
}
exports.errWrite = errWrite;
function errConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err)(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err)(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err)(prefix, filename, "console", ...msgs);
        }
    }
}
exports.errConsole = errConsole;
function sErr(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err)(prefix, "", "string");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err)(prefix, filename, "string");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err)(prefix, filename, "string", ...msgs);
        }
    }
}
exports.sErr = sErr;
function warn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn)(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn)(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn)(prefix, filename, "normal", ...msgs);
        }
    }
}
exports.warn = warn;
function warnWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn)(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn)(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn)(prefix, filename, "write", ...msgs);
        }
    }
}
exports.warnWrite = warnWrite;
function warnConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn)(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn)(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn)(prefix, filename, "console", ...msgs);
        }
    }
}
exports.warnConsole = warnConsole;
function nomal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._nomal)(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._nomal)(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._nomal)(prefix, filename, "normal", ...msgs);
        }
    }
}
exports.nomal = nomal;
function nomalWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._nomal)(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._nomal)(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._nomal)(prefix, filename, "write", ...msgs);
        }
    }
}
exports.nomalWrite = nomalWrite;
function nomalConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._nomal)(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._nomal)(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._nomal)(prefix, filename, "console", ...msgs);
        }
    }
}
exports.nomalConsole = nomalConsole;
function info(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info)(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info)(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info)(prefix, filename, "normal", ...msgs);
        }
    }
}
exports.info = info;
function infoWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info)(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info)(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info)(prefix, filename, "write", ...msgs);
        }
    }
}
exports.infoWrite = infoWrite;
function infoConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info)(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info)(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info)(prefix, filename, "console", ...msgs);
        }
    }
}
exports.infoConsole = infoConsole;
