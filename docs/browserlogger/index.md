# configuration

[Source code here](/src/browser/browserlogger-core.ts)

Type defined:

```typescript
export type BrowserLoggerConfig = {
  mode: "development" | "production"; // browser logger mode
  logDateFmt: string; // luxon date format string
  targetUrl: string | undefined; // fetch post url
  storagePrefix: string | undefined; // localStorage item key prefix
  trace?: boolean;
};

// default value
let __config__: BrowserLoggerConfig = {
  mode: "development",
  logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
  targetUrl: undefined,
  storagePrefix: undefined,
  trace: true;
};
```

## mode

**browser-logger running in two mode.**

- In development mode
  - Logger will print all log to console.
- In production mode
  - Logger will not print log to console.
  - If `targetUrl` defined, logger will include the log messages in the body and post it to given url by using fetch api.
    - The body type will be
    ```typescript
    export type BrowserPostBody = {
      level: string;
      prefix: string;
      msg: unknown;
      isotime: string
    };
    ```
  - If `storagePrefix` defined, logger will set item to localStorage.
    - err level log will be setted to `${storagePrefix}/err`
    - info level log will be setted to `${storagePrefix}/info`, and etc...
  - If neither is defined, logger will post log to targetUrl, then save it to localStorage.
  - If neither is _undefined_, logger will do nothing.

## logDateFmt

A [Luxon Date Format String](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)

![logDateFmt preview](/docs/assets/browserlogger/logDateFmt.png)

## targetUrl

see [this section](./index.md#mode)

## storagePrefix

see [this section](./index.md#mode)
