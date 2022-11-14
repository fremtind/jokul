import { defineConfig } from "cypress";
import plugins from "./cypress/plugins";

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    e2e: {
        setupNodeEvents(on, config) {
            return plugins(on, config);
        },
        specPattern: ".//**/integration/*.spec.*",
        baseUrl: "http://localhost:9000",
        excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*", "**/node_modules/**", "./scripts/**"],
    },
});
