// Via https://github.com/cypress-io/cypress-component-testing-examples/pull/26
const path = require("path");
const express = require("express");
const esbuild = require("esbuild");

// Send AUT HTML as response
const sendHtml = (req, res) => {
    res.sendfile(path.join(__dirname, "index.html"));
};

// Compile spec file (including any js/css imports) into a bundle in memory,
// and return a promise that resolves with the bundle contents or rejects
// with an error message
const compileSpec = (specPath) => {
    return esbuild.build({
        entryPoints: [path.resolve(__dirname, "..", "..", specPath.substring(1))],
        bundle: true,
        write: false,
        loader: { ".js": "jsx" },
    });
};

// Process spec file and send bundle as response
const sendSpecBundle =
    ({ projectRoot }) =>
    (req, res) => {
        const [, specPath] = req.path.split(projectRoot);
        compileSpec(specPath)
            .then((result) => {
                const generatedScript = result.outputFiles[0];
                res.setHeader("Content-Type", "text/javascript");
                res.send(generatedScript.text);
            })
            .catch((errMessage) => {
                res.status(500).send(errMessage);
            });
    };

// Start the dev server
const startDevServer = (port, config) => {
    const app = express();
    // Serve HTML file that the AUT frame loads initially
    app.get("/__cypress/src/index.html", sendHtml);
    // Serve spec files, processed into a bundle
    app.get("/spec/*", sendSpecBundle(config));
    // Start server
    const server = app.listen(port);
    return { port, close: server.close };
};

// Inject Cypress dev server
const getSetupDevServer =
    ({ port = 9000 } = {}) =>
    (...args) => {
        // Old CT plugin signature: setupDevServer(on, config)
        if (typeof args[0] === "function") {
            const [on, config] = args;
            on("dev-server:start", (options) => {
                return startDevServer(port, config);
            });
        }
        // New CT plugin signature: setupDevServer(options)
        else {
            const [options] = args;
            return startDevServer(port, options.config);
        }
    };

module.exports = { getSetupDevServer };

// For testing purposes, if this script is run directly via node, start
// a standalone dev server
if (require.main === module) {
    const projectRoot = path.join(__dirname, "..", "..");
    const port = process.env.PORT || 9000;
    startDevServer(port, { projectRoot });
}
