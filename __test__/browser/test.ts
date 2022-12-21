import { browserlogger as logger, configBrowserLogger } from "../../esm/browser";

configBrowserLogger({
  mode: "production",
});

type AnyDict = { [key: string]: any }; // eslint-disable-line
export const circularRef: AnyDict = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};
circularRef.bar.foo = "foo"; // eslint-disable-line
circularRef.bar.baz = circularRef; // eslint-disable-line

export const dummyStr = "some string here";

export const dummyArray = [1, "a", { a: "a", b: "b" }];

export const dummyNumber = 1234567890;

logger.normal("circular", circularRef);
logger.info("info-test", dummyStr);
logger.warn("notice", dummyArray);
logger.warn("notice", "dummy array here:", dummyArray);
logger.err("oops", dummyNumber);

logger.info("sinfo", logger.sInfo("sinfo", "test"));
