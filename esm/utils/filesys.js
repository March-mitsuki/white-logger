import fs from "fs/promises";
export const createFile = (path, data, options) => {
    fs.writeFile(path, data, options).catch((err) => {
        // eslint-disable-next-line
        if (err.code === "ENOENT" && err.syscall === "open") {
            const callPath = err.path; // eslint-disable-line
            const dirPath = callPath.slice(0, callPath.lastIndexOf("/"));
            fs.mkdir(dirPath, { recursive: true })
                .then(() => {
                createFile(path, data, options);
            })
                .catch((err) => {
                console.error("[createFile] mkdir:", err);
            });
        }
        else {
            console.error("[createFile]", err);
        }
    });
};
