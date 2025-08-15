import express from "express";
import proxy from "express-http-proxy";
import winston from "winston";

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
    format: combine(timestamp(), json()),
    level: "info",
    defaultMeta: { service: "jokul-portal" },
    transports: [new winston.transports.Console()],
    exceptionHandlers: [new winston.transports.Console()],
});

const app = express();
const PORT = 3000;

// Server bygd Storybook under /storybook
app.use("/storybook", express.static("storybook-static"));
// Omdiriger alle andre paths til kjørende Next.js
app.use("/", proxy("localhost:3333/"));

app.listen(PORT, () => {
    logger.info(`Express server listening on port ${PORT}`);
});

process.on("beforeExit", (code) => {
    logger.info({
        message: "Process beforeExit event with code: ",
        meta: { code },
    });
});

process.on("exit", (code) => {
    logger.info({ message: "Process exit event with code: ", meta: { code } });
});

process.on("SIGTERM", (code) => {
    logger.info({
        message: "Process SIGTERM event with code: ",
        meta: { code },
    });
});

process.on("SIGINT", (code) => {
    logger.info({
        message: "Process SIGINT event with code: ",
        meta: { code },
    });

    // må kalles eksplisitt da SIGINT stopper håndteringen
    // https://stackoverflow.com/a/14372355
    process.exit();
});

process.on("SIGBREAK", (code) => {
    logger.info({
        message: "Process SIGBREAK event with code: ",
        meta: { code },
    });
});
