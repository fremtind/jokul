import { postgresAdapter } from "@payloadcms/db-postgres";
import dotenv from "dotenv";

dotenv.config();

const POSTGRES_DB_URL =
    process.env.PLATFORM === "aws"
        ? `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
        : "postgres://localhost/jokul-portal";

const getPostgresAdapter = () => {
    return postgresAdapter({
        pool: {
            connectionString: POSTGRES_DB_URL,
        },
    });
};

export default getPostgresAdapter;
