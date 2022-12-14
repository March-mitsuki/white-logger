import { nodelogger, configLogger } from "@/index";

configLogger({
  logPath: "__test__/output",
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

nodelogger.nomal("nomal");
nodelogger.err("oops", __filename, "circular use here:", circularRef);
nodelogger.warn("notice", "some notice here", { a: "a", b: "b" });
nodelogger.nomal("nomal", "some notice here", { a: "a", b: "b" });
nodelogger.info("info", __filename, "something reported.", "another thing reported.");

const str = nodelogger.sErr("test-string", "no filename");
console.log("sErr:", str);
