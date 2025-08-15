import { logger } from "logger";

export async function GET() {
    logger.info("Healthcheck endpoint hit");
    return new Response("ok");
}
