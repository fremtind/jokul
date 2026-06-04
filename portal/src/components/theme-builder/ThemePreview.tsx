"use client";

import { Flex } from "@fremtind/jokul/flex";
import { type ReactNode, useMemo } from "react";

// Storybook-storyen ligger utenfor `portal/`. Ved å gjenbruke den holdes
// demoen i synk med det designere og utviklere ser i Storybook selv.
import { Detaljside as DetaljsideStory } from "@jokul-stories/patterns/Detaljside.stories";
import { buildPreviewStyle } from "./colorTokenUtils";
import type { ColorToken, ThemeMode } from "./colorTokens";

import styles from "./theme-preview.module.scss";

type ThemePreviewProps = {
    themeMode: ThemeMode;
    tokens: ColorToken[];
};

export function ThemePreview({ themeMode, tokens }: ThemePreviewProps) {
    const previewStyle = useMemo(() => buildPreviewStyle(tokens), [tokens]);
    const demo = useMemo(() => <>{detailStory.render?.()}</>, []);

    return (
        <Flex direction="column" gap="m">
            <div style={previewStyle}>
                <div className={styles.previewSurface} data-theme={themeMode}>
                    {demo}
                </div>
            </div>
        </Flex>
    );
}

type StorybookStory = {
    render?: () => ReactNode;
};

const detailStory = DetaljsideStory as StorybookStory;
