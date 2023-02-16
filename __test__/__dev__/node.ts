// import path from "path";
import { nodelogger as logger, configNodeLogger } from "../../src/node";

configNodeLogger({
  logPath: "__test__/output",
});

// configLogger({
//   logPath: path.resolve(process.cwd(), "__test__/output"),
// });

type AnyDict = { [key: string]: any }; // eslint-disable-line
export const circularRef: AnyDict = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};
circularRef.bar.foo = "foo"; // eslint-disable-line
circularRef.bar.baz = circularRef; // eslint-disable-line

logger.normal("nomal", circularRef);
logger.err("oops", __filename, "circular use here:", circularRef);
logger.warn("notice", "some notice here", { a: "a", b: "b" });
// logger.normal("nomal", "some notice here", { a: "a", b: "b" });
// logger.info("info", __filename, "something reported.", "another thing reported.");

// const str = logger.sErr("test-string", "no filename");
// console.log("sErr:", str);
