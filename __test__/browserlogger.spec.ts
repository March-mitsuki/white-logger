import { browserlogger } from "@/index";

describe("browser logger test", () => {
  it("output", () => {
    const log = jest.spyOn(console, "log").mockReturnValue();
    browserlogger.info("test", "something here");
    expect(log).toHaveBeenNthCalledWith(1, "test");
    log.mockRestore();
  });
});
