const fs = require("fs");
const path = require("path");

const fileExist = (path) => fs.existsSync(path);
const resolve = (...pathName) => path.resolve(__dirname, ...pathName);

const expire = new Date(Date.now());
expire.setMinutes(expire.getMinutes() - 2);

const checkDirList = ["./dist/node", "./dist/esm", "./dist/browser", "./dist/utils"];

checkDirList.forEach((elem) => {
  if (!fileExist(resolve(elem))) {
    throw new Error("please run build before your publish.");
  } else if (expire > fs.statSync(resolve(elem)).birthtime) {
    throw new Error("please run build before your publish.");
  }
});
