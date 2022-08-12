// eslint-disable-next-line @typescript-eslint/no-var-requires
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

module.exports = (on, config) => {
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
