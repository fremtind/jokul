import { defineConfig } from "cypress";
import plugins from "./cypress/plugins";

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    env: {
        // Default true, men gjort eksplisitt for å sørge for at patchen vår i `patches/` ender opp med å bli brukt.
        pluginVisualRegressionForceDeviceScaleFactor: true,
    },
    e2e: {
        setupNodeEvents(on, config) {
            return plugins(on, config);
        },
        specPattern: ".//**/integration/*.spec.*",
        baseUrl: `http://127.0.0.1:9000/${process.env.PREVIEW_PATH || ""}`,
        excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*", "**/node_modules/**", "./scripts/**"],
    },
});
