export type LoggerLevel = "err" | "warn" | "info" | "normal";
export type NodeLoggerConfig = {
    logPath?: string;
    logDateFmt: string;
    filenameDateFmt: string;
    trace?: boolean;
};
export type BrowserLoggerConfig = {
    mode: "development" | "production";
    logDateFmt: string;
    targetUrl: string | undefined;
    storagePrefix: string | undefined;
    trace?: boolean;
};
export type BrowserPostBody = {
    level: string;
    prefix: string;
    msg: unknown;
    isotime: string;
};
//# sourceMappingURL=types.d.ts.map