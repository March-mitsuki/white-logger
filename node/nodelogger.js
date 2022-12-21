"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sInfo = exports.infoConsole = exports.infoWrite = exports.info = exports.sNormal = exports.normalConsole = exports.normalWrite = exports.normal = exports.sWarn = exports.warnConsole = exports.warnWrite = exports.warn = exports.sErr = exports.errConsole = exports.errWrite = exports.err = void 0;
const nodelogger_core_1 = require("./nodelogger-core");
function err(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err)(prefix, filename, ...msgs);
        }
    }
}
exports.err = err;
function errWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err_w)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err_w)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err_w)(prefix, filename, ...msgs);
        }
    }
}
exports.errWrite = errWrite;
function errConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err_c)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err_c)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err_c)(prefix, filename, ...msgs);
        }
    }
}
exports.errConsole = errConsole;
function sErr(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._err_s)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._err_s)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._err_s)(prefix, filename, ...msgs);
        }
    }
}
exports.sErr = sErr;
function warn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn)(prefix, filename, ...msgs);
        }
    }
}
exports.warn = warn;
function warnWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn_w)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn_w)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn_w)(prefix, filename, ...msgs);
        }
    }
}
exports.warnWrite = warnWrite;
function warnConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn_c)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn_c)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn_c)(prefix, filename, ...msgs);
        }
    }
}
exports.warnConsole = warnConsole;
function sWarn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._warn_s)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._warn_s)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._warn_s)(prefix, filename, ...msgs);
        }
    }
}
exports.sWarn = sWarn;
function normal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._normal)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._normal)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._normal)(prefix, filename, ...msgs);
        }
    }
}
exports.normal = normal;
function normalWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._normal_w)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._normal_w)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._normal_w)(prefix, filename, ...msgs);
        }
    }
}
exports.normalWrite = normalWrite;
function normalConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._normal_c)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._normal_c)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._normal_c)(prefix, filename, ...msgs);
        }
    }
}
exports.normalConsole = normalConsole;
function sNormal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._normal_s)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._normal_s)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._normal_s)(prefix, filename, ...msgs);
        }
    }
}
exports.sNormal = sNormal;
function info(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info)(prefix, filename, ...msgs);
        }
    }
}
exports.info = info;
function infoWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info_w)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info_w)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info_w)(prefix, filename, ...msgs);
        }
    }
}
exports.infoWrite = infoWrite;
function infoConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info_c)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info_c)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info_c)(prefix, filename, ...msgs);
        }
    }
}
exports.infoConsole = infoConsole;
function sInfo(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return (0, nodelogger_core_1._info_s)(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return (0, nodelogger_core_1._info_s)(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return (0, nodelogger_core_1._info_s)(prefix, filename, ...msgs);
        }
    }
}
exports.sInfo = sInfo;
