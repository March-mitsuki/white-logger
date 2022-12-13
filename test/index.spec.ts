import { logger } from "@/index";

describe("logger test", () => {
  it("output", () => {
    const log = jest.spyOn(console, "log").mockReturnValue();
    logger();
    expect(log).toHaveBeenNthCalledWith(1, "hello, world!");
    log.mockRestore();
  });
});
