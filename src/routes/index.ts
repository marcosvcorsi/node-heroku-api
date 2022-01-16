import { Router } from "express";
import { logger } from "../utils/logger";
import { version } from "../../package.json";

const routes = Router();

routes.get("/info", (req, res) => {
  logger.info("info", { ccc: "ddd" });

  return res.send("info");
});

routes.get("/warn", (req, res) => {
  logger.warn("warn", { aaa: "bbb" });

  return res.send("warn");
});

routes.get("/error", (req, res) => {
  logger.error("error", { fff: "ddd" });

  return res.send("error");
});

routes.get("/", (req, res) => {
  return res.send(`It is running version: ${version}`);
});

export { routes };
