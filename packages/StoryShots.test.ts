import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

jest.mock("nanoid", () => (): string => "nanoid");
jest.mock("@nrk/core-toggle/jsx", () => "CoreToggle");

if (process.env.SCREENSHOT) {
    initStoryshots({
        suite: "Screenshots",
        test: imageSnapshot({
            storybookUrl: `http://localhost:9009/`,
            beforeScreenshot: () => new Promise((resolve) => setTimeout(() => resolve(), 100)),
            getMatchOptions: () => ({
                failureThreshold: parseFloat(process.env.SCREENSHOT_THRESHOLD || "0.05"),
                failureThresholdType: "percent",
            }),
            customizePage: (page) => page.setViewport({ width: 1280, height: 720 }),
        }),
    });
} else {
    initStoryshots({
        test: multiSnapshotWithOptions(),
    });
}
