import { defineConfig } from "cypress";
import plugins from "./cypress/plugins";
import { getSetupDevServer } from './cypress/support/devserver';

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    env: {
        "cypress-plugin-snapshots": {
            autoCleanUp: false,
            autopassNewSnapshots: true,
            diffLines: 3,
            excludeFields: [],
            ignoreExtraArrayItems: false,
            ignoreExtraFields: false,
            normalizeJson: true,
            prettier: true,
            imageConfig: {
                createDiffImage: true,
                resizeDevicePixelRatio: true,
                threshold: 0.01,
                thresholdType: "percent",
            },
            screenshotConfig: {
                blackout: [],
                capture: "fullPage",
                clip: null,
                disableTimersAndAnimations: true,
                log: false,
                scale: false,
                timeout: 30000,
            },
            serverEnabled: true,
            serverHost: "localhost",
            serverPort: 2121,
            updateSnapshots: false,
            backgroundBlend: "difference",
        },
    },
    component: {
        devServer(cypressConfig) {
            return getSetupDevServer({ port: 1234 })(cypressConfig);
        },
        specPattern: "**/*.spec.ct.{js,ts,jsx,tsx}",
        supportFile: "./cypress/support/component.js",
    },
});
