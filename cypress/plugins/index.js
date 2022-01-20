// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserify = require("@cypress/browserify-preprocessor");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

module.exports = (on, config) => {
    const options = browserify.defaultOptions;
    const envPreset = options.browserifyOptions.transform[1][1].presets[0];
    options.browserifyOptions.transform[1][1].presets[0] = [envPreset, { ignoreBrowserslistConfig: true }];

    on("file:preprocessor", browserify(options));

    on("before:browser:launch", (browser = {}, launchOptions) => {
        const REDUCE = 1;
        if (browser.family === "firefox") {
            launchOptions.preferences["ui.prefersReducedMotion"] = REDUCE;
        }
        if (browser.family === "chromium") {
            launchOptions.args.push("--force-prefers-reduced-motion");
        }
        return launchOptions;
    });

    initPlugin(on, config);
    return config;
};
