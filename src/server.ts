import "newrelic";

import express from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", (_, res) => res.send("ok"));

app.use(routes);

const port = process.env.PORT ?? 3000;

app.listen(port, () => logger.info(`Server is running on port ${port}`));
