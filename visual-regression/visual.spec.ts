import { type PageScreenshotOptions, expect, test } from "@playwright/test";
import type { IndexEntry } from "storybook/internal/types";
import manifest from "../storybook-static/index.json" assert { type: "json" };
import { filterStories, navigate } from "./utils";

const options: Partial<PageScreenshotOptions> = {
    fullPage: true,
    animations: "disabled",
};

test.beforeEach(async ({ page }, meta) => {
    /**
     * Set the viewport size and other global level browser settings here.
     * For example you may want to block certain resources, etc.
     */
    await page.setViewportSize({ width: 1920, height: 1080 });
    await navigate(page, "http://localhost:6007", meta.title);
});

const visualStories = filterStories(
    Object.values(manifest.entries) as IndexEntry[],
);

for (const story of visualStories) {
    test(story.id, async ({ page }, meta) => {
        await expect(page).toHaveScreenshot(
            `${meta.title}-${process.platform}.png`,
            options,
        );
    });
}
