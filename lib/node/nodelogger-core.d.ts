import { ZerologgerConfig } from "@/utils/types";
type LoggerMode = "normal" | "console" | "write" | "string";
export declare const configLogger: (config: Partial<ZerologgerConfig>) => void;
export declare const _err: (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => string | void;
export declare const _warn: (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => string | void;
export declare const _nomal: (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => string | void;
export declare const _info: (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => string | void;
export {};
//# sourceMappingURL=nodelogger-core.d.ts.map