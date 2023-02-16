// import { browserlogger as logger, configBrowserLogger } from "../../src/browser";

import { browserlogger as logger, configBrowserLogger } from "../../esm/browser";
import { testTrace } from "./nestedTrace/testNested";

configBrowserLogger({
  mode: "production",
  targetUrl: "http://127.0.0.1:3274/log",
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

const dummyStr = "some string here";

const dummyArray = [1, "a", { a: "a", b: "b" }];

const dummyNumber = 1234567890;

logger.normal("circular", circularRef);
logger.info("info-test", dummyStr);
logger.warn("notice", dummyArray);
logger.warn("notice", "dummy array here:", dummyArray);
logger.err("oops", dummyNumber);

logger.info("sinfo", logger.sInfo("sinfo", "test"));

testTrace();
