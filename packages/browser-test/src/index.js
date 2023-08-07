import { createBrowserLogger } from "@white-logger/browser";

const logger = createBrowserLogger();

logger.info("Hello", "World!");
logger.err("Hello", "World!");
