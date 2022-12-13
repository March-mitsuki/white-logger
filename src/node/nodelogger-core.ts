import { writeFile } from "fs/promises";
import { DateTime } from "luxon";
import path from "path";

import { ansiFont, ansiBack } from "@/utils/ansicode";
import { replacer } from "@/utils/replacer";
import { ZerologgerConfig } from "@/utils/types";

type LogLevel = "err" | "warn" | "info" | "nomal";
type LoggerMode = "all" | "console" | "write";

const logDateFmt = "yyyy'-'LL'-'dd HH'-'mm'-'ss Z";

const logger = (backColor: ansiBack, level: LogLevel) => {
  return (prefix: string, filename: string, mode: LoggerMode, ...msgs: unknown[]) => {
    let filePath = "";
    const testFilename = filename.match(/(.*\/.*\..*)\s?/);
    if (testFilename) {
      filePath = path.relative(process.cwd(), testFilename[1]);
    } else {
      msgs = [filename, ...msgs];
    }

    const parsedmsgs = msgs
      .map((elem) => {
        if (elem instanceof Object) {
          return JSON.stringify(elem, replacer(), 2);
        } else if (typeof elem === "string") {
          return elem;
        } else {
          return JSON.stringify(elem);
        }
      })
      .join(` `);

    if (mode === "all" || mode === "console") {
      console.log(
        `${backColor} ${prefix} ${ansiFont.reset}` +
          ` ${ansiFont.fontBold}${ansiFont.brightBlack}${DateTime.now().toFormat(logDateFmt)}${
            ansiFont.reset
          }` +
          ` ${parsedmsgs}` +
          ` ${ansiFont.underLine}${filePath}${ansiFont.reset}`,
      );
    }

    if (mode === "all" || mode === "write") {
      const configPath = path.resolve(process.cwd(), ".zerologgerrc.json");
      import(configPath)
        .then((config: ZerologgerConfig) => {
          if (config.logPath) {
            const filenameDate = DateTime.now().toFormat("yyyy'-'LL'-'dd");
            let logFilePath = `${filenameDate}.log`;
            switch (level) {
              case "err":
                logFilePath = `${filenameDate}_err.log`;
                break;
              case "warn":
                logFilePath = `${filenameDate}_warn.log`;
                break;
              case "nomal":
                logFilePath = `${filenameDate}_nomal.log`;
                break;
              case "info":
                logFilePath = `${filenameDate}_info.log`;
                break;
            }

            const writeLogData = `[${prefix}]-[${DateTime.now().toFormat(
              logDateFmt,
            )}] ${parsedmsgs}\n`;

            writeFile(path.resolve(process.cwd(), config.logPath, logFilePath), writeLogData, {
              flag: "a",
            }).catch((err) => {
              console.log(`[${ansiFont.red}writeLogToFile${ansiFont.reset}]`, err);
            });
          }
        })
        .catch((err) => {
          throw new Error(JSON.stringify(err));
        });
    }
    return;
  };
};

export const _err = logger(ansiBack.red, "err");
export const _warn = logger(ansiBack.yellow, "warn");
export const _nomal = logger(ansiBack.green, "nomal");
export const _info = logger(ansiBack.blue, "info");
