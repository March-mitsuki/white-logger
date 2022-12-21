# update log

- v0.2.0
  - browser & nodejs
    - change
      - Change spell miss `nomal` to `normal`
    - add
      - Add a config to determine the current mode.
        - Using `configBrowserLogger` or `configNodeLogger` in code.
  - browser only
    - add
      - Add `sInfo` to return a string. Same as in nodelogger.
      - Add `configBrowserLogger` to config browser logger.
  - nodejs only
    - change
      - Change `configLogger` to `configNodeLogger`
      - Add a level text to `sInfo` return string.
