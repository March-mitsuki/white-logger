import { browserlogger } from "@/browser";

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

browserlogger.nomal("circular", circularRef);
browserlogger.info("info-test", dummyStr);
browserlogger.warn("notice", dummyArray);
browserlogger.err("oops", dummyNumber);
