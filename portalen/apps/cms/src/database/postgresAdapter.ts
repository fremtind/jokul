import { readFileSync } from "node:fs";
import path from "node:path";
import { Signer } from "@aws-sdk/rds-signer";
import { postgresAdapter } from "@payloadcms/db-postgres";
import dotenv from "dotenv";

dotenv.config();

const ca = readFileSync(path.join(__dirname, "cacert.pem"), "utf-8");

const signer = new Signer({
    hostname: process.env.DB_HOST || "",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "",
    region: process.env.AWS_REGION || "eu-north-1",
});

const getPostgresAdapter = () => {
    return postgresAdapter({
        pool: {
            ssl: { ca },
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: () => signer.getAuthToken(),
        },
    });
};

export default getPostgresAdapter;
