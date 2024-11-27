import { postgresAdapter } from "@payloadcms/db-postgres";
import dotenv from "dotenv";

dotenv.config();

const POSTGRES_DB_URL = `postgres://${process.env.DB_HOST}`;

const getPostgresAdapter = () => {
    return postgresAdapter({
        pool: {
            connectionString: POSTGRES_DB_URL,
        },
    });
};

export default getPostgresAdapter;
