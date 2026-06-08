"use client";

import { Detaljside as DetaljsideStory } from "@jokul-stories/patterns/Detaljside.stories";
import { type ReactNode, useMemo } from "react";
import { buildPreviewStyle } from "./colorTokenUtils";
import type { ColorToken, ThemeMode } from "./colorTokens";

type ThemePreviewProps = {
    themeMode: ThemeMode;
    tokens: ColorToken[];
};

export function ThemePreview({ themeMode, tokens }: ThemePreviewProps) {
    const previewStyle = useMemo(() => buildPreviewStyle(tokens), [tokens]);
    const demo = useMemo(() => <>{detailStory.render?.()}</>, []);

    return (
        <div style={previewStyle} data-theme={themeMode}>
            {demo}
        </div>
    );
}

type StorybookStory = {
    render?: () => ReactNode;
};

const detailStory = DetaljsideStory as StorybookStory;
