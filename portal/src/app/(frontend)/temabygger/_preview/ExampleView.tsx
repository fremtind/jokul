"use client";

import { Overblikk as ThemeBuilderOverviewStory } from "@jokul-stories/patterns/Temabygger.stories";
import { type ReactNode, useMemo } from "react";

export function ExampleView() {
    const demo = useMemo(() => <>{themeBuilderOverviewStory.render?.()}</>, []);

    return demo;
}

type StorybookStory = {
    render?: () => ReactNode;
};

const themeBuilderOverviewStory = ThemeBuilderOverviewStory as StorybookStory;
