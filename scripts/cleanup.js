/* eslint-disable */

/**
 * @see https://github.com/lukeed/sade
 */
const sade = require("sade");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const logger = require("./script-log.js");

const prog = sade("cleanup");

prog
  .command("all")
  .describe("Cleanup all node_modules files in all subdirectories")
  .action(() => {
    logger.info("remove node_modules and pnpm-lock.yaml in", process.cwd());
    exec(
      "rm -rf node_modules && rm -rf pnpm-lock.yaml",
      (error, stdout, stderr) => {
        if (error) {
          logger.error("exec error:", error);
          return;
        }
        if (stdout) {
          logger.cmdStdout(`${stdout}`);
        }
        if (stderr) {
          logger.cmdStderr(`${stderr}`);
        }
      },
    );

    const packagesDir = path.resolve(process.cwd(), "./packages");
    fs.readdirSync(packagesDir).forEach((dir) => {
      const pkgPath = path.join(packagesDir, dir);

      if (fs.statSync(pkgPath).isDirectory()) {
        logger.info("remove node_modules and pnpm-lock.yaml in", pkgPath);
        exec(
          `cd ${pkgPath} && rm -rf node_modules && rm -rf pnpm-lock.yaml`,
          (error, stdout, stderr) => {
            if (error) {
              logger.error("exec error:", error);
              return;
            }
            if (stdout) {
              logger.cmdStdout(`${stdout}`);
            }
            if (stderr) {
              logger.cmdStderr(`${stderr}`);
            }
          },
        );
      }
    });
  });

prog.parse(process.argv);
