# update log

- *v1.0.0* **BREAKING CHANGE**
  - Migrate from v0.2.x please check [this doc](../nodelogger/migrate.md#migrate-to-v10x-from-v02x)
  - nodejs
    - change
      - Delete the second param `filename`. Now automatically tracks all calls and prints it.
        - Auto-tracking will only work on err and warn level. Both development and production mode.
      - Now will automatically create derectory, if not exists.
  - browser
    - add
      - Add auto-tracking, same as nodejs, it will only work on err and warn level.
      - But not report to server on production mode.

- v0.2.1
  - fix commonjs require.

- v0.2.0
  - browser & nodejs
    - change
      - Change spell miss from `nomal` to `normal`
      - Change default logDateFmt from `"yyyy'-'LL'-'dd HH'-'mm'-'ss Z"` to `"yyyy'-'LL'-'dd HH':'mm':'ss Z"`
  - browser only
    - add
      - Add `sInfo` to return a string. Same as in nodelogger.
      - Add `configBrowserLogger` to config browser logger.
      - Add a config to determine the current mode.
        - Using `configBrowserLogger` or `configNodeLogger` in code.
  - nodejs only
    - change
      - Change `configLogger` to `configNodeLogger`
      - Add a level text to `sInfo` return string.
    - fix
      - Error happend if pass a object as the second parameter.
