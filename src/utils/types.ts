export type LoggerLevel = "err" | "warn" | "info" | "normal";

export type NodeLoggerConfig = {
  logPath: string | undefined;
  logDateFmt: string;
  filenameDateFmt: string;
};

export type BrowserLoggerConfig = {
  mode: "development" | "production";
  logDateFmt: string;
  targetUrl: string | undefined;
  storage: string | undefined;
};

export type BrowserPostBody = {
  level: string;
  msg: string;
};
