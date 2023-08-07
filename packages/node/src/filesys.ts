import fs from "fs/promises";
import type { Mode, OpenMode, EncodingOption } from "fs";

export const createFile = (
  path: string,
  data: string | Uint8Array,
  options?:
    | (EncodingOption & { mode?: Mode; flag?: OpenMode })
    | BufferEncoding
    | null,
) => {
  fs.writeFile(path, data, options).catch((err) => {
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
