import http from "http";
import express from "express";
import cors from "cors";
import { nodelogger as logger } from "../../node";

import type { BrowserPostBody } from "../../utils/types";

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);

app.post("/log", (req, res) => {
  const body = req.body as BrowserPostBody;
  logger.info("browser-logger-post", body);
  res.json({
    msg: "recive log",
  });
  return;
});

server.listen(3274, () => {
  logger.normal("server", __filename, "server is running on port", 3274);
});
