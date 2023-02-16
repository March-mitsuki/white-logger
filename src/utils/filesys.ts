import fs from "fs/promises";
import type { Mode, ObjectEncodingOptions, OpenMode } from "fs";
import type { Abortable } from "events";

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
