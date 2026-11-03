"use client";

import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ColorSchemeComparison } from "./ColorSchemeComparison";
import { ContrastExample } from "./ContrastExample";
import { ThemePreviewSurface } from "./ThemePreviewSurface";
import { ThemePreviewWorkspace } from "./ThemePreviewWorkspace";
import { TypographyView } from "./TypographyView";
import { renderThemePreviewStory } from "./previewStories";
import styles from "./theme-preview.module.scss";

type ThemePreviewProps = {
    segment?: string | null;
};

/**
 * Fargemodusen følger steget brukeren står i: fargene for lyst og mørkt modus
 * justeres hver for seg, så forhåndsvisningen trenger ingen egen velger.
 */
export function ThemePreview({ segment }: ThemePreviewProps) {
    if (segment === "farger") {
        return <ThemePreviewWorkspace colorScheme="light" />;
    }

    if (segment === "mork-modus") {
        return <ThemePreviewWorkspace colorScheme="dark" />;
    }

    if (segment === "grunnfarge") {
        return (
            <ThemePreviewSurface colorScheme="light">
                <BaseColorPreview />
            </ThemePreviewSurface>
        );
    }

    if (segment === "identitet") {
        return (
            <ThemePreviewSurface colorScheme="light">
                <TypographyView />
            </ThemePreviewSurface>
        );
    }

    return (
        <ThemePreviewSurface colorScheme="light">
            <div className={styles.stepPreviewContent}>
                {renderThemePreviewStory("overview")}
            </div>
        </ThemePreviewSurface>
    );
}

function BaseColorPreview() {
    const { draft } = useThemeDraft();

    return (
        <ColorSchemeComparison includeDarkMode={draft.includeDarkMode}>
            <ContrastExample />
        </ColorSchemeComparison>
    );
}
