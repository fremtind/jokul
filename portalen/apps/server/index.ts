/*
    Ved direkte import av Payload-konfigurasjonen, kan ikke Node håndtere klientfiler som .scss, noe som fører til krasj.

    For å løse dette, overstyrer vi Nodes require-system til å returnere `null` for disse filene.

    Payload håndterer dette internt, men importerer vi konfigurasjonen andre steder så må vi håndtere dette selv.

    Mer info her: https://github.com/payloadcms/payload/issues/3120#issuecomment-1860867875
*/
const clientFiles = ['.scss', '.css', '.svg'];
clientFiles.forEach((ext) => {
    require.extensions[ext] = () => null;
});

import fs = require('fs');
import path = require('path');
import * as url from 'url';
import cms = require('@org/cms');
import shared = require('@org/shared');
import webExpressAdapter = require('@org/web/express');
import compression = require('compression');
import express = require('express');
import api from './api/api';
import { indexes } from './api/search';
import { packageStatsJob } from './packageStatsJob';

async function start() {
    const { payload } = cms;
    const { dotenv } = shared;
    const { createRequestHandler } = webExpressAdapter;

    // Loading environment variables, .env > .env.local
    dotenv.config();

    const localEnvFilePath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(localEnvFilePath)) {
        dotenv.config({
            path: localEnvFilePath,
            override: true,
        });
    }

    console.log('Starting server...');

    const PAYLOADCMS_SECRET = process.env.PAYLOADCMS_SECRET;
    const ENVIRONMENT = process.env.NODE_ENV;

    if (!PAYLOADCMS_SECRET) {
        throw new Error('PAYLOADCMS_SECRET is not defined');
    }

    // During development this is fine. Conditionalize this for production as needed.
    const WEB_BUILD_DIR = path.join(process.cwd(), '../web/build');
    const WEB_PUBLIC_DIR = path.join(process.cwd(), '../web/public/web');
    const WEB_PUBLIC_BUILD_DIR = path.join(
        process.cwd(),
        '../web/public/web/build'
    );
    const SERVER_PUBLIC_DIR = path.join(process.cwd(), './public');

    const app = express();
    app.use(compression());
    app.use(express.json());
    app.disable('x-powered-by');

    app.get('/_healthcheck', (req, res) =>
        res.status(200).json({ status: 'healthy' }).send()
    );

    // Serving the web static files with different caching strategies
    app.use(
        '/web/build',
        express.static(WEB_PUBLIC_BUILD_DIR, {
            immutable: true,
            maxAge: '1y',
            redirect: false,
        })
    );
    app.use(
        '/web',
        express.static(WEB_PUBLIC_DIR, { maxAge: '1h', redirect: false })
    );

    app.use(
        '/',
        express.static(SERVER_PUBLIC_DIR, {
            immutable: true,
            maxAge: '1y',
            redirect: false,
        })
    );

    app.use('/api', api);

    await payload.init({
        express: app,
        secret: PAYLOADCMS_SECRET,
        onInit: () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    for (const [collection, index] of Object.entries(indexes)) {
        const existing =
            payload.collections[collection].config.hooks.afterChange || [];

        payload.collections[collection].config.hooks.afterChange = [
            ...existing,
            async ({ doc, operation }) => {
                if (operation === 'update') {
                    await index.updateAsync(doc.id, doc);
                } else {
                    await index.addAsync(doc.id, doc);
                }
            },
        ];

        const { docs } = await payload.find({
            collection: collection as keyof typeof indexes,
            where: { _status: { equals: 'published' } },
            pagination: false,
        });

        for (const doc of docs) {
            await index.addAsync(doc.id, doc);
        }
    }

    packageStatsJob(payload).start();

    app.use(payload.authenticate);

    app.all(
        '*',
        ENVIRONMENT === 'development'
            ? (req, res, next) => {
                  purgeRequireCache();

                  return createRequestHandler({
                      build: require(WEB_BUILD_DIR),
                      mode: ENVIRONMENT,
                      getLoadContext(req: any, res: any) {
                          return {
                              payload: req.payload,
                              user: req?.user,
                              res,
                              serverUrl: url.format({
                                  protocol: req.protocol,
                                  host: req.get('host'),
                              }),
                          };
                      },
                  })(req, res, next);
              }
            : createRequestHandler({
                  build: require(WEB_BUILD_DIR),
                  mode: ENVIRONMENT,
                  getLoadContext(req: any, res: any) {
                      return {
                          payload: req.payload,
                          user: req?.user,
                          res,
                          serverUrl: url.format({
                              protocol: req.protocol,
                              host: req.get('host'),
                          }),
                      };
                  },
              })
    );

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });

    function purgeRequireCache() {
        // purge require cache on requests for "server side HMR" this won't let
        // you have in-memory objects between requests in development,
        // alternatively you can set up nodemon/pm2-dev to restart the server on
        // file changes, but then you'll have to reconnect to databases/etc on each
        // change. We prefer the DX of this, so we've included it for you by default

        for (const key in require.cache) {
            if (key.startsWith(WEB_BUILD_DIR)) {
                delete require.cache[key];
            }
        }
    }
}

try {
    start();
} catch (e: any) {
    console.error('Failed to start server', e);
    console.error(e.message);
    throw e;
}
