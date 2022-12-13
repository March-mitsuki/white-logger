export enum ansiFont {
  black = "\x1b[30m",
  red = "\x1b[31m",
  green = "\x1b[32m",
  yellow = "\x1b[33m",
  blue = "\x1b[34m",
  white = "\x1b[37m",
  brightBlack = "\x1b[90m",
  fontBold = "\x1b[1m",
  underLine = "\x1b[4m",
  reset = "\x1b[0m",
}

export enum ansiBack {
  black = "\x1b[40m",
  red = "\x1b[41m",
  green = "\x1b[42m",
  yellow = "\x1b[43m",
  blue = "\x1b[44m",
  white = "\x1b[47m",
  brightBlack = "\x1b[100m",
  reset = "\x1b[0m",
}

export const reset = "\x1b[0m";
