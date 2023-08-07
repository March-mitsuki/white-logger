const fs = require("fs");
const path = require("path");

const fileExist = (path) => fs.existsSync(path);
const resolve = (...pathName) => path.resolve(__dirname, ...pathName);

const expire = new Date(Date.now());
expire.setMinutes(expire.getMinutes() - 2);

const packagesDir = path.resolve(process.cwd(), "./packages");
fs.readdirSync(packagesDir).forEach((dir) => {
  const pkgDistPath = path.join(packagesDir, dir, "dist");

  if (fs.statSync(pkgDistPath).isDirectory()) {
    if (!fileExist(resolve(pkgDistPath))) {
      throw new Error("please run build before your publish.");
    } else if (expire > fs.statSync(resolve(pkgDistPath)).birthtime) {
      throw new Error("please run build before your publish.");
    }
  }
});
