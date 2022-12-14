import { _err, _info, _nomal, _warn } from "./nodelogger-core";
export function err(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return _err(prefix, filename, "normal", ...msgs);
        }
    }
}
export function errWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return _err(prefix, filename, "write", ...msgs);
        }
    }
}
export function errConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return _err(prefix, filename, "console", ...msgs);
        }
    }
}
export function sErr(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _err(prefix, "", "string");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _err(prefix, filename, "string");
        }
        else {
            const [...msgs] = args.slice(2);
            return _err(prefix, filename, "string", ...msgs);
        }
    }
}
export function warn(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn(prefix, filename, "normal", ...msgs);
        }
    }
}
export function warnWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn(prefix, filename, "write", ...msgs);
        }
    }
}
export function warnConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _warn(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _warn(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return _warn(prefix, filename, "console", ...msgs);
        }
    }
}
export function nomal(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _nomal(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _nomal(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return _nomal(prefix, filename, "normal", ...msgs);
        }
    }
}
export function nomalWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _nomal(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _nomal(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return _nomal(prefix, filename, "write", ...msgs);
        }
    }
}
export function nomalConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _nomal(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _nomal(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return _nomal(prefix, filename, "console", ...msgs);
        }
    }
}
export function info(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info(prefix, "", "normal");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info(prefix, filename, "normal");
        }
        else {
            const [...msgs] = args.slice(2);
            return _info(prefix, filename, "normal", ...msgs);
        }
    }
}
export function infoWrite(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info(prefix, "", "write");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info(prefix, filename, "write");
        }
        else {
            const [...msgs] = args.slice(2);
            return _info(prefix, filename, "write", ...msgs);
        }
    }
}
export function infoConsole(...args) {
    const prefix = args[0];
    if (args.length === 1) {
        return _info(prefix, "", "console");
    }
    else {
        const filename = args[1];
        if (args.length === 2) {
            return _info(prefix, filename, "console");
        }
        else {
            const [...msgs] = args.slice(2);
            return _info(prefix, filename, "console", ...msgs);
        }
    }
}
