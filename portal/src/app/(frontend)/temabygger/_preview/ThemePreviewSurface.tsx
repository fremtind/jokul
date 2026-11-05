"use client";

import { Card } from "@fremtind/jokul/card";
import { Title } from "@fremtind/jokul/typography";
import clsx from "clsx";
import { type ReactNode, useMemo } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { buildThemePreviewStyle } from "../_shared/previewStyle";
import type { ColorScheme } from "../generator/types";
import styles from "./theme-preview.module.scss";

const TITLE_ID = "theme-builder-preview-title";

type ThemePreviewSurfaceProps = {
    colorScheme: ColorScheme;
    children: ReactNode;
};

/**
 * Flaten som bærer temaet: custom properties fra utkastet overstyrer Jøkuls
 * tokens innenfor kortet, og `data-theme` setter `color-scheme`, som avgjør
 * hvilken halvdel av `light-dark()` som vinner.
 *
 * Alt som ikke skal farges av brukerens tema — fanene, fargemodusvelgeren —
 * må derfor ligge utenfor denne.
 */
export function ThemePreviewSurface({
    colorScheme,
    children,
}: ThemePreviewSurfaceProps) {
    const { draft } = useThemeDraft();
    const previewStyle = useMemo(
        () =>
            buildThemePreviewStyle({
                tokens: draft.colorTokens,
                includeDarkMode: draft.includeDarkMode,
                regularFont: draft.regularFont,
                displayFont: draft.displayFont,
                customFonts: draft.customFonts,
                borderRadius: draft.borderRadius,
            }),
        [
            draft.colorTokens,
            draft.includeDarkMode,
            draft.regularFont,
            draft.displayFont,
            draft.customFonts,
            draft.borderRadius,
        ],
    );

    return (
        <Card
            as="section"
            className={clsx(
                styles.surface,
                draft.boldTitles && styles.boldTitles,
            )}
            padding="l"
            outlined
            aria-labelledby={TITLE_ID}
            data-theme={colorScheme}
            style={{
                ...previewStyle,
                backgroundColor: "var(--jkl-color-background-page)",
            }}
        >
            <Title as="h2" size="s" id={TITLE_ID} srOnly>
                Forhåndsvisning
            </Title>
            {children}
        </Card>
    );
}
