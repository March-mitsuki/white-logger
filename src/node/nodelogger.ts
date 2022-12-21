import {
  _err,
  _err_c,
  _err_s,
  _err_w,
  _info,
  _info_c,
  _info_s,
  _info_w,
  _normal,
  _normal_c,
  _normal_s,
  _normal_w,
  _warn,
  _warn_c,
  _warn_s,
  _warn_w,
} from "./nodelogger-core";

export function err(prefix: string, ...args: unknown[]): void;
export function err(prefix: string, filename: string, ...args: unknown[]): void;
export function err(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _err(prefix, filename, ...msgs);
    }
  }
}
export function errWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function errWrite(prefix: string, ...args: unknown[]): void;
export function errWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err_w(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err_w(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _err_w(prefix, filename, ...msgs);
    }
  }
}
export function errConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function errConsole(prefix: string, ...args: unknown[]): void;
export function errConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err_c(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err_c(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _err_c(prefix, filename, ...msgs);
    }
  }
}
export function sErr(prefix: string, filename: string, ...args: unknown[]): string;
export function sErr(prefix: string, ...args: unknown[]): string;
export function sErr(...args: unknown[]): string {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err_s(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err_s(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _err_s(prefix, filename, ...msgs);
    }
  }
}

export function warn(prefix: string, filename: string, ...args: unknown[]): void;
export function warn(prefix: string, ...args: unknown[]): void;
export function warn(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _warn(prefix, filename, ...msgs);
    }
  }
}
export function warnWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function warnWrite(prefix: string, ...args: unknown[]): void;
export function warnWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn_w(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn_w(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _warn_w(prefix, filename, ...msgs);
    }
  }
}
export function warnConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function warnConsole(prefix: string, ...args: unknown[]): void;
export function warnConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn_c(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn_c(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _warn_c(prefix, filename, ...msgs);
    }
  }
}
export function sWarn(prefix: string, filename: string, ...args: unknown[]): string;
export function sWarn(prefix: string, ...args: unknown[]): string;
export function sWarn(...args: unknown[]): string {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn_s(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn_s(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _warn_s(prefix, filename, ...msgs);
    }
  }
}

export function normal(prefix: string, filename: string, ...args: unknown[]): void;
export function normal(prefix: string, ...args: unknown[]): void;
export function normal(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _normal(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _normal(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _normal(prefix, filename, ...msgs);
    }
  }
}
export function normalWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function normalWrite(prefix: string, ...args: unknown[]): void;
export function normalWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _normal_w(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _normal_w(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _normal_w(prefix, filename, ...msgs);
    }
  }
}
export function normalConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function normalConsole(prefix: string, ...args: unknown[]): void;
export function normalConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _normal_c(prefix, "");
  } else {
    const filename = args[1] as string;

    if (args.length === 2) {
      return _normal_c(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _normal_c(prefix, filename, ...msgs);
    }
  }
}
export function sNormal(prefix: string, filename: string, ...args: unknown[]): string;
export function sNormal(prefix: string, ...args: unknown[]): string;
export function sNormal(...args: unknown[]): string {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _normal_s(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _normal_s(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _normal_s(prefix, filename, ...msgs);
    }
  }
}

export function info(prefix: string, filename: string, ...args: unknown[]): void;
export function info(prefix: string, ...args: unknown[]): void;
export function info(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info(prefix, "");
  } else {
    const filename = args[1] as string;

    if (args.length === 2) {
      return _info(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _info(prefix, filename, ...msgs);
    }
  }
}
export function infoWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function infoWrite(prefix: string, ...args: unknown[]): void;
export function infoWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info_w(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _info_w(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _info_w(prefix, filename, ...msgs);
    }
  }
}
export function infoConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function infoConsole(prefix: string, ...args: unknown[]): void;
export function infoConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info_c(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _info_c(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _info_c(prefix, filename, ...msgs);
    }
  }
}
export function sInfo(prefix: string, filename: string, ...args: unknown[]): string;
export function sInfo(prefix: string, ...args: unknown[]): string;
export function sInfo(...args: unknown[]): string {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info_s(prefix, "");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _info_s(prefix, filename);
    } else {
      const [...msgs] = args.slice(2);
      return _info_s(prefix, filename, ...msgs);
    }
  }
}
