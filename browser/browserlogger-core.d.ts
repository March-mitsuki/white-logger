import { BrowserLoggerConfig } from "../utils/types";
export declare const configBrowserLogger: (config: Partial<BrowserLoggerConfig>) => void;
export declare const err: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const sErr: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const warn: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const sWarn: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const normal: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const sNormal: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const info: (prefix: string, ...msgs: unknown[]) => string | undefined;
export declare const sInfo: (prefix: string, ...msgs: unknown[]) => string | undefined;
//# sourceMappingURL=browserlogger-core.d.ts.map