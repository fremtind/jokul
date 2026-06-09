"use client";

import { Detaljside as DetaljsideStory } from "@jokul-stories/patterns/Detaljside.stories";
import { type ReactNode, useMemo } from "react";

export function ExampleView() {
    const demo = useMemo(() => <>{detailStory.render?.()}</>, []);

    return demo;
}

type StorybookStory = {
    render?: () => ReactNode;
};

const detailStory = DetaljsideStory as StorybookStory;
