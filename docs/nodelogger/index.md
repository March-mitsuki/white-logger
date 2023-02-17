# node logger

[Source code here](/src/node/nodelogger-core.ts)

Type defined:

```typescript
export type NodeLoggerConfig = {
  logPath: string | undefined; // full or relative path to your logs directory
  logDateFmt: string; // Luxon format string
  filenameDateFmt: string; // Luxon format string
  trace?: boolean;
};

// default value
let __config__: NodeLoggerConfig = {
  logPath: undefined,
  logDateFmt: "yyyy'-'LL'-'dd HH':'mm':'ss Z",
  filenameDateFmt: "yyyy'-'LL'-'dd",
  trace: true;
};
```

## logPath

The full or relative path to logs directory you want logger write to.

```typescript
configLogger({
  logPath: path.resolve(process.cwd(), "logs"),
});

// Both definitions are synonymous.
// Both will be output to <app_root_dir>/logs
configLogger({
  logPath: "logs",
});
```

## logDateFmt

A [Luxon Date Format String](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)

![logDateFmt preview](/docs/assets/nodelogger/logDateFmt.png)

## filenameDateFmt

A [Luxon Date Format String](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)

![filenameDateFmt preview](/docs/assets/nodelogger/filenameDateFmt.png)
