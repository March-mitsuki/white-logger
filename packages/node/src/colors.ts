const reset = "\x1b[0m";

export enum ansiColor {
  black = "\x1b[30m",
  bgBlack = "\x1b[40m",
  red = "\x1b[31m",
  bgRed = "\x1b[41m",
  green = "\x1b[32m",
  bgGreen = "\x1b[42m",
  yellow = "\x1b[33m",
  bgYellow = "\x1b[43m",
  blue = "\x1b[34m",
  bgBlue = "\x1b[44m",
  white = "\x1b[37m",
  bgWhite = "\x1b[47m",
  brightBlack = "\x1b[90m",
  bgBrightBlack = "\x1b[100m",
}

export enum ansiStyle {
  fontBold = "\x1b[1m",
  underLine = "\x1b[4m",
}

export const colorize = (str: string, color: ansiColor, style?: ansiStyle) => {
  return `${style ? style : ""}${color}${str}${reset}`;
};
