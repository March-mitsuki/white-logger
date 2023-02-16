import { browserlogger as logger } from "../../../src/browser";

export function testTrace() {
  logger.err("trace", "test trace");
}
