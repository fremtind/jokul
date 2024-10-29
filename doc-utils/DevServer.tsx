import http from "http";
import express, { Express } from "express";
import getPort from "get-port";
import React from "react";
import * as ReactDOMServer from "react-dom/server";

export type CreateServerOptions = {
    scriptSrc: string;
    styleHref: string;
    rootId: string;
    port: number;
};

const defaults: CreateServerOptions = {
    scriptSrc: "client.js",
    styleHref: "client.css",
    rootId: "app",
    port: 1234,
};

export async function createServer(
    rootComponent: React.ReactElement,
    options = defaults,
): Promise<Express> {
    const opts = { ...defaults, ...options };

    if (process.env.PORT) {
        opts.port = Number.parseInt(process.env.PORT);
    }

    const app = express();

    app.get("/", (req, res) => {
        const app = ReactDOMServer.renderToString(rootComponent);
        const html = `<!DOCTYPE html>
          <html lang="no">
          <head>
              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <title>Jøkul DevServer</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <script src="${opts.scriptSrc}" async defer></script>
              <link href="${opts.styleHref}" rel="stylesheet"></link>
          </head>
          <body class="jkl" style="height: 100%; display: flex; align-items: center; justify-content: center">
              <div id="${opts.rootId}">${app}</div>
          </body>
          </html>
      `;
        res.send(html);
    });

    app.use(express.static("./dist"));

    const port = await getPort({ port: opts.port });

    http.createServer(app).listen(port);

    console.log(`🚀 Server running on http://localhost:${port}`);

    return app;
}
