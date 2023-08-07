const { createNodeLogger } = require("@white-logger/node");

const logger = createNodeLogger();

logger.info("Hello", "World!");
logger.err("Hello", "World!");
