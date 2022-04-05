import React from "react";
import express from "express";
import * as ReactDOMServer from "react-dom/server";
import Example from "./Example";

const app = express();

app.get("/", (req, res) => {
    const app = ReactDOMServer.renderToString(<Example />);

    const html = `
        <html lang="en">
        <head>
            <script src="client.js" async defer></script>
            <link href="client.css" rel="stylesheet"></link>
        </head>
        <body>
            <div id="app">${app}</div>
        </body>
        </html>
    `;
    res.send(html);
});

// TODO: finpuss og ta i bruk denne devservermetoden overalt for å få SSR

app.use(express.static("./dist"));

app.listen(4242);
