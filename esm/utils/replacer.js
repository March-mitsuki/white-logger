export const replacer = () => {
    const seen = new WeakSet();
    return (_, v) => {
        if (typeof v === "object" && v != null) {
            if (seen.has(v)) {
                return;
            }
            seen.add(v);
        }
        return v;
    };
};
