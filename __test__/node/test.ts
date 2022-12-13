import { nodelogger } from "@/index";

type AnyDict = { [key: string]: any }; // eslint-disable-line
export const circularRef: AnyDict = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};
circularRef.bar.foo = "foo"; // eslint-disable-line
circularRef.bar.baz = circularRef; // eslint-disable-line

nodelogger.nomal("nomal");
nodelogger.err("oops", __filename, circularRef);
nodelogger.warn("notice", "some notice here", "wowo");
nodelogger.infoWrite("info", __filename, "something reported.");
