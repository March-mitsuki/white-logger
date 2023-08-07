export const replacer = () => {
  const seen = new WeakSet();
  return (_: unknown, v: unknown) => {
    if (typeof v === "object" && v != null) {
      if (seen.has(v)) {
        return;
      }
      seen.add(v);
    }
    return v;
  };
};

export const parseMsgs = (...args: unknown[]) => {
  return args
    .map((elem) => {
      if (elem instanceof Object) {
        return JSON.stringify(elem, replacer(), 2);
      } else if (typeof elem === "string") {
        return elem;
      } else {
        return JSON.stringify(elem);
      }
    })
    .join(` `);
};
