import { BrowserLoggerConfig } from "src/utils/types";
export declare const configBrowserLogger: (config: Partial<BrowserLoggerConfig>) => void;
export declare const err: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const sErr: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const warn: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const sWarn: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const normal: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const sNormal: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const info: (prefix: string, ...args: unknown[]) => string | undefined;
export declare const sInfo: (prefix: string, ...args: unknown[]) => string | undefined;
//# sourceMappingURL=browserlogger-core.d.ts.map