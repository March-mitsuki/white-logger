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
