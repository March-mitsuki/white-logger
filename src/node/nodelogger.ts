import { _err, _info, _nomal, _warn } from "./nodelogger-core";

export function err(prefix: string, ...args: unknown[]): void;
export function err(prefix: string, filename: string, ...args: unknown[]): void;
export function err(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err(prefix, "", "all");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err(prefix, filename, "all");
    } else {
      return _err(prefix, filename, "all", args.slice(2));
    }
  }
}
export function errWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function errWrite(prefix: string, ...args: unknown[]): void;
export function errWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err(prefix, "", "write");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err(prefix, filename, "write");
    } else {
      return _err(prefix, filename, "write", args.slice(2));
    }
  }
}
export function errConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function errConsole(prefix: string, ...args: unknown[]): void;
export function errConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _err(prefix, "", "console");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _err(prefix, filename, "console");
    } else {
      return _err(prefix, filename, "console", args.slice(2));
    }
  }
}

export function warn(prefix: string, filename: string, ...args: unknown[]): void;
export function warn(prefix: string, ...args: unknown[]): void;
export function warn(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn(prefix, "", "all");
  } else {
    const filename = args[1] as string;

    if (args.length === 2) {
      return _warn(prefix, filename, "all");
    } else {
      return _warn(prefix, filename, "all", args.slice(2));
    }
  }
}
export function warnWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function warnWrite(prefix: string, ...args: unknown[]): void;
export function warnWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn(prefix, "", "write");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn(prefix, filename, "write");
    } else {
      return _warn(prefix, filename, "write", args.slice(2));
    }
  }
}
export function warnConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function warnConsole(prefix: string, ...args: unknown[]): void;
export function warnConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _warn(prefix, "", "console");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _warn(prefix, filename, "console");
    } else {
      return _warn(prefix, filename, "console", args.slice(2));
    }
  }
}

export function nomal(prefix: string, filename: string, ...args: unknown[]): void;
export function nomal(prefix: string, ...args: unknown[]): void;
export function nomal(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _nomal(prefix, "", "all");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _nomal(prefix, filename, "all");
    } else {
      return _nomal(prefix, filename, "all", args.slice(2));
    }
  }
}
export function nomalWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function nomalWrite(prefix: string, ...args: unknown[]): void;
export function nomalWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _nomal(prefix, "", "write");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _nomal(prefix, filename, "write");
    } else {
      return _nomal(prefix, filename, "write", args.slice(2));
    }
  }
}
export function nomalConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function nomalConsole(prefix: string, ...args: unknown[]): void;
export function nomalConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _nomal(prefix, "", "console");
  } else {
    const filename = args[1] as string;

    if (args.length === 2) {
      return _nomal(prefix, filename, "console");
    } else {
      return _nomal(prefix, filename, "console", args.slice(2));
    }
  }
}

export function info(prefix: string, filename: string, ...args: unknown[]): void;
export function info(prefix: string, ...args: unknown[]): void;
export function info(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info(prefix, "", "all");
  } else {
    const filename = args[1] as string;

    if (args.length === 2) {
      return _info(prefix, filename, "all");
    } else {
      return _info(prefix, filename, "all", args.slice(2));
    }
  }
}
export function infoWrite(prefix: string, filename: string, ...args: unknown[]): void;
export function infoWrite(prefix: string, ...args: unknown[]): void;
export function infoWrite(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info(prefix, "", "write");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _info(prefix, filename, "write");
    } else {
      return _info(prefix, filename, "write", args.slice(2));
    }
  }
}
export function infoConsole(prefix: string, filename: string, ...args: unknown[]): void;
export function infoConsole(prefix: string, ...args: unknown[]): void;
export function infoConsole(...args: unknown[]) {
  const prefix = args[0] as string;
  if (args.length === 1) {
    return _info(prefix, "", "console");
  } else {
    const filename = args[1] as string;
    if (args.length === 2) {
      return _info(prefix, filename, "console");
    } else {
      return _info(prefix, filename, "console", args.slice(2));
    }
  }
}
