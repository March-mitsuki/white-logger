import { nodelogger } from "@/index";

describe("node logger test", () => {
  it("output", () => {
    const log = jest.spyOn(console, "log").mockReturnValue();
    nodelogger.info("test", "something here");
    expect(console.log).toBeCalled();
    expect(log).toHaveBeenNthCalledWith(1, "test");
    log.mockRestore();
  });
});
