# update log

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
      - A error will thorwed if pass a object as the second parameter.
