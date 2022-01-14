import { Router } from "express";
import { logger } from "../utils/logger";

const routes = Router();

routes.get("/info", (req, res) => {
  logger.info({ aaa: "bbb" }, "info");

  return res.send("info");
});

routes.get("/warn", (req, res) => {
  logger.warn({ aaa: "bbb" }, "warn");

  return res.send("warn");
});

routes.get("/error", (req, res) => {
  logger.error({ aaa: "bbb" }, "error");

  return res.send("error");
});

export { routes };
