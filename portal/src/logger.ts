import winston from "winston";
const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
    format: combine(timestamp(), json()),
    level: "info",
    defaultMeta: { service: "jokul-portal" },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
    exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "exceptions.log" }),
    ],
});
