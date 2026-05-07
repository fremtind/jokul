import { type PageScreenshotOptions, expect, test } from "@playwright/test";
import type { IndexEntry } from "storybook/internal/types";
import { sizes } from "../.storybook/globals/size.js";
import { themes } from "../.storybook/globals/theme.js";
import manifest from "../storybook-static/index.json" assert { type: "json" };
import { type StoryGlobals, filterStories, navigate } from "./utils";

const options: Partial<PageScreenshotOptions> = {
    fullPage: true,
    animations: "disabled",
};

test.beforeEach(async ({ page }) => {
    /**
     * Set the viewport size and other global level browser settings here.
     * For example you may want to block certain resources, etc.
     */
    await page.setViewportSize({ width: 1180, height: 820 });
});

const visualStories = filterStories(
    Object.values(manifest.entries) as IndexEntry[],
);

for (const story of visualStories) {
    for (const { value: size } of sizes) {
        const globals: StoryGlobals = { size, theme: "light" };
        const testId = `${story.id}--size-${size}`;

        test(testId, async ({ page }) => {
            await navigate(page, story.id, globals);
            await expect(page).toHaveScreenshot(
                `${testId}-${process.platform}.png`,
                options,
            );
        });
    }
    for (const { value: theme } of themes) {
        const globals: StoryGlobals = { size: "medium", theme };
        const testId = `${story.id}--theme-${theme}`;

        test(testId, async ({ page }) => {
            await navigate(page, story.id, globals);
            await expect(page).toHaveScreenshot(
                `${testId}-${process.platform}.png`,
                options,
            );
        });
    }
}
