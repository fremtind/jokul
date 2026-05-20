import stories from "@storybook-index";

type StorybookEntry = {
    type?: string;
};

type StorybookIndex = {
    entries: Record<string, StorybookEntry | undefined>;
};

const storybookIndex = stories as StorybookIndex;

export const storyExists = (storyId?: string | null) =>
    Boolean(storyId && storybookIndex.entries[storyId]?.type === "story");
