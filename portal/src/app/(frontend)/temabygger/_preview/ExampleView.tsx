"use client";

import { Overblikk as ThemeBuilderOverviewStory } from "@jokul-stories/temabygger/Temabygger.overblikk.stories";
import { type ReactNode, useMemo } from "react";

export function ExampleView() {
    const demo = useMemo(() => <>{themeBuilderOverviewStory.render?.()}</>, []);

    return demo;
}

type StorybookStory = {
    render?: () => ReactNode;
};

const themeBuilderOverviewStory = ThemeBuilderOverviewStory as StorybookStory;
