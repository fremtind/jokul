"use client";

import { KomponentOversikt as ThemeBuilderComponentsStory } from "@jokul-stories/temabygger/Temabygger.komponenter.stories";
import { Kontrast as ThemeBuilderContrastStory } from "@jokul-stories/temabygger/Temabygger.kontrast.stories";
import { Overblikk as ThemeBuilderOverviewStory } from "@jokul-stories/temabygger/Temabygger.overblikk.stories";
import type { ReactNode } from "react";

export type ThemePreviewStoryId = "overview" | "components" | "contrast";

type StorybookStory = {
    render?: () => ReactNode;
};

const themePreviewStories = {
    overview: ThemeBuilderOverviewStory as StorybookStory,
    components: ThemeBuilderComponentsStory as StorybookStory,
    contrast: ThemeBuilderContrastStory as StorybookStory,
} satisfies Record<ThemePreviewStoryId, StorybookStory>;

export function renderThemePreviewStory(storyId: ThemePreviewStoryId) {
    return themePreviewStories[storyId].render?.() ?? null;
}
