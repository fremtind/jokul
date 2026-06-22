"use client";

import {
    type ThemePreviewStoryId,
    renderThemePreviewStory,
} from "./previewStories";

type ExampleViewProps = {
    story: ThemePreviewStoryId;
};

export function ExampleView({ story }: ExampleViewProps) {
    return <>{renderThemePreviewStory(story)}</>;
}
