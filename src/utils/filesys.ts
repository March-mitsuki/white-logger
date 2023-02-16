import fs from "fs/promises";
import type { Mode, ObjectEncodingOptions, OpenMode } from "fs";
import type { Abortable } from "events";
import { ansiFont } from "./ansicode";

export const createFile = (
  path: string,
  data: string | NodeJS.ArrayBufferView,
  options?:
    | (ObjectEncodingOptions & {
        mode?: Mode | undefined;
        flag?: OpenMode | undefined;
      } & Abortable)
    | BufferEncoding,
) => {
  fs.writeFile(path, data, options).catch((err) => {
    // eslint-disable-next-line
    if (err.code === "ENOENT" && err.syscall === "open") {
      const callPath = err.path as string; // eslint-disable-line
      const dirPath = callPath.slice(0, callPath.lastIndexOf("/"));
      fs.mkdir(dirPath, { recursive: true })
        .then(() => {
          createFile(path, data, options);
        })
        .catch((err) => {
          console.error("[createFile] mkdir:", err);
        });
    } else {
      console.error("[createFile]", err);
    }
  });
};

export const getTrance = (): string => {
  const obj: { stack?: string } = {};
  Error.captureStackTrace(obj, getTrance);
  if (!obj.stack) {
    throw new Error("Can not get trance.");
  }
  const stackArr = obj.stack.split("\n").slice(3);
  obj.stack = ansiFont.brightBlack + "\n" + stackArr.join("\n") + ansiFont.reset;
  return obj.stack;
};
