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

    on("uncaught:exception", (err, runnable) => {
        // Ignorer hydration-errors. De er ikke optimale akkurat, men Gatsby gjør de så og si umulige å feilsøke.
        // Virker å ha skjedd noe under oppdateringen til MDX2.
        if (err.message.includes("Minified React error #418")) {
            return false;
        }
    });

    initPlugin(on, config);
    return config;
};
