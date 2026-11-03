"use client";

import { KomponentOversikt as ThemeBuilderComponentsStory } from "@jokul-stories/temabygger/Temabygger.komponenter.stories";
import { Overblikk as ThemeBuilderOverviewStory } from "@jokul-stories/temabygger/Temabygger.overblikk.stories";
import type { ReactNode } from "react";

export type ThemePreviewStoryId = "overview" | "components";

type StorybookStory = {
    render?: () => ReactNode;
};

const themePreviewStories = {
    overview: ThemeBuilderOverviewStory as StorybookStory,
    components: ThemeBuilderComponentsStory as StorybookStory,
} satisfies Record<ThemePreviewStoryId, StorybookStory>;

export function renderThemePreviewStory(storyId: ThemePreviewStoryId) {
    return themePreviewStories[storyId].render?.() ?? null;
}
