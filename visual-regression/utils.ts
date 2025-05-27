import type { Page } from "@playwright/test";
import type { IndexEntry, StoryIndexEntry } from "storybook/internal/types";

export const filterStories = (stories: IndexEntry[]): StoryIndexEntry[] =>
    stories.filter(
        (story) => story.type === "story" && story.tags?.includes("visual"),
    ) as StoryIndexEntry[];

export function getStoryUrl(storybookUrl: string, id: string): string {
    const params = new URLSearchParams({
        id,
        viewMode: "story",
        nav: "0",
    });

    return `${storybookUrl}/iframe.html?${params.toString()}`;
}

export async function navigate(
    page: Page,
    storybookUrl: string,
    id: string,
): Promise<void> {
    try {
        const url = getStoryUrl(storybookUrl, id);
        await page.goto(url);
        await page.waitForLoadState("networkidle");
        await page.waitForSelector("#storybook-root");
    } catch (error) {
        console.error(`Error navigating to storybook URL: ${error}`);
        throw error;
    }
}
