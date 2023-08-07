// import path from "path";
import { createNodeLogger } from "../../src/node";

// import { nodelogger as logger, configNodeLogger } from "../../node";

const logger = createNodeLogger({
  logPath: "__test__/output",
  trace: false,
});

type AnyDict = { [key: string]: any }; // eslint-disable-line
const circularRef: AnyDict = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};
circularRef.bar.foo = "foo"; // eslint-disable-line
circularRef.bar.baz = circularRef; // eslint-disable-line

logger.log("log", circularRef);
logger.err("oops", __filename, "circular use here:", circularRef);
logger.warn("notice", "some notice here", { a: "a", b: "b" });
logger.log("log", "some notice here", { a: "a", b: "b" });
logger.info("info", __filename, "something reported.", "another thing reported.");

const str = logger.string.err("test-string", "no filename");
console.log("sErr:", str);
