import { replacer } from "../utils/replacer";
const logger = (color) => {
    return (prefix, ...args) => {
        const parsedArgs = args
            .map((elem) => {
            if (elem instanceof Object) {
                return JSON.stringify(elem, replacer(), 2);
            }
            else if (typeof elem === "string") {
                return elem;
            }
            else {
                return JSON.stringify(elem);
            }
        })
            .join(` `);
        console.log(`%c[${prefix}]%c ${parsedArgs}`, `color: ${color}; font-weight: bold`, "");
        return;
    };
};
export const err = logger("red");
export const warn = logger("orange");
export const nomal = logger("green");
export const info = logger("blue");
