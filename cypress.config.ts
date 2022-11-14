import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";
import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    e2e: {
        setupNodeEvents(on, config) {
            on("before:browser:launch", (browser, launchOptions) => {
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
        },
        specPattern: ".//**/integration/*.spec.*",
        baseUrl: "http://localhost:9000",
        excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*", "**/node_modules/**", "./scripts/**"],
    },
});
