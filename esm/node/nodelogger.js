import { _err, _err_c, _err_s, _err_w, _info, _info_c, _info_s, _info_w, _normal, _normal_c, _normal_s, _normal_w, _warn, _warn_c, _warn_s, _warn_w, } from "./nodelogger-core";
export function err(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _err(prefix, filename, ...msgs);
        }
    }
}
export function errWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err_w(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err_w(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _err_w(prefix, filename, ...msgs);
        }
    }
}
export function errConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err_c(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err_c(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _err_c(prefix, filename, ...msgs);
        }
    }
}
export function sErr(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err_s(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err_s(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _err_s(prefix, filename, ...msgs);
        }
    }
}
export function warn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn(prefix, filename, ...msgs);
        }
    }
}
export function warnWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn_w(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn_w(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn_w(prefix, filename, ...msgs);
        }
    }
}
export function warnConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn_c(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn_c(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn_c(prefix, filename, ...msgs);
        }
    }
}
export function sWarn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn_s(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn_s(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn_s(prefix, filename, ...msgs);
        }
    }
}
export function normal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _normal(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _normal(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _normal(prefix, filename, ...msgs);
        }
    }
}
export function normalWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _normal_w(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _normal_w(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _normal_w(prefix, filename, ...msgs);
        }
    }
}
export function normalConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _normal_c(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _normal_c(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _normal_c(prefix, filename, ...msgs);
        }
    }
}
export function sNormal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _normal_s(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _normal_s(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _normal_s(prefix, filename, ...msgs);
        }
    }
}
export function info(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _info(prefix, filename, ...msgs);
        }
    }
}
export function infoWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info_w(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info_w(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _info_w(prefix, filename, ...msgs);
        }
    }
}
export function infoConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info_c(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info_c(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _info_c(prefix, filename, ...msgs);
        }
    }
}
export function sInfo(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info_s(prefix, "");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info_s(prefix, filename);
        }
        else {
            const [...msgs] = args.slice(2);
            return _info_s(prefix, filename, ...msgs);
        }
    }
}
