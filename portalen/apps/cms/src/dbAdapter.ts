import path from 'path';
import { type Args, mongooseAdapter } from '@payloadcms/db-mongodb';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.PAYLOAD_PUBLIC_DB_HOST;
const DB_USER = process.env.PAYLOAD_PUBLIC_DB_USER;
const DB_PASSWORD = process.env.PAYLOAD_PUBLIC_DB_PASSWORD;
const CUSTOM_CA = process.env.PAYLOAD_PUBLIC_CUSTOM_CA;

const MONGODB_URL = `mongodb://${DB_HOST}`;

const mongoConnectOptions: Args['connectOptions'] = {
    user: DB_USER,
    pass: DB_PASSWORD,
};

if (!MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined');
}

const caPath = path.resolve(process.cwd(), '..', '..', 'global-bundle.pem');

if (CUSTOM_CA === 'true') {
    console.log('Using global-bundle.pem to connect to MongoDB');
    mongoConnectOptions.ssl = true;
    mongoConnectOptions.sslCA = caPath;
    mongoConnectOptions.replicaSet = 'rs0';
    mongoConnectOptions.retryWrites = false;
} else {
    console.log('Connecting to MongoDB without custom CA');
}

const getMongooseAdapter = () => {
    return mongooseAdapter({
        url: MONGODB_URL,
        connectOptions: {
            ...mongoConnectOptions,
        },
    });
};

export default getMongooseAdapter;
