import { ansiColor, colorize } from "./colors";

export const getTrace = (): string => {
  let stack = "";
  try {
    throw new Error();
  } catch (err) {
    if (err instanceof Error) {
      if (err.stack) {
        stack = err.stack;
      }
    }
  }
  const stackArr = stack.split("\n").slice(3);
  stack = colorize("\n" + stackArr.join("\n"), ansiColor.brightBlack);

  return stack;
};
