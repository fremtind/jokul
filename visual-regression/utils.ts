import type { Page } from "@playwright/test";
import type { IndexEntry, StoryIndexEntry } from "storybook/internal/types";
import type { sizes } from "../.storybook/globals/size.js";
import type { themes } from "../.storybook/globals/theme.js";
import { STORYBOOK_URL } from "../playwright.config.js";

export interface StoryGlobals {
    theme: (typeof themes)[number]["value"];
    size: (typeof sizes)[number]["value"];
}

export const filterStories = (stories: IndexEntry[]): StoryIndexEntry[] =>
    stories.filter(
        (story) => story.type === "story" && story.tags?.includes("visual"),
    ) as StoryIndexEntry[];

export function getStoryUrl(id: string, globals?: StoryGlobals): string {
    const params = new URLSearchParams({
        id,
        viewMode: "story",
        nav: "0",
    });

    if (globals) {
        params.append("globals", `theme:${globals.theme};size:${globals.size}`);
    }

    return `${STORYBOOK_URL}/iframe.html?${params.toString()}`;
}

export async function navigate(
    page: Page,
    id: string,
    globals?: StoryGlobals,
): Promise<void> {
    try {
        const url = getStoryUrl(id, globals);
        await page.goto(url);
        await page.waitForLoadState("networkidle");
        await page.waitForSelector("#storybook-root");
    } catch (error) {
        console.error(`Error navigating to storybook URL: ${error}`);
        throw error;
    }
}
