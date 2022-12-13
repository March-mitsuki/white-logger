import { browserlogger } from "@/browser";

type AnyDict = { [key: string]: any }; // eslint-disable-line
const circularRef: AnyDict = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};

// eslint-disable-next-line
circularRef.bar.baz = circularRef;

browserlogger.nomal("circular", circularRef);
browserlogger.info("info-test", "some string here");
browserlogger.warn("notice", { a: "a", b: "b" });
browserlogger.err("oops", [1, 2, 3]);
