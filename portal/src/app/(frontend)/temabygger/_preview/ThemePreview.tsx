"use client";

import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ColorSchemeComparison } from "./ColorSchemeComparison";
import { ContrastExample } from "./ContrastExample";
import { ThemePreviewSurface } from "./ThemePreviewSurface";
import { ThemePreviewWorkspace } from "./ThemePreviewWorkspace";
import { TypographyView } from "./TypographyView";
import { ThemePreviewComponents, ThemePreviewOverview } from "./previewStories";
import styles from "./theme-preview.module.scss";

type ThemePreviewProps = {
    segment?: string | null;
};

/**
 * Fargemodusen følger steget brukeren står i: fargene for lyst og mørkt modus
 * justeres hver for seg, så forhåndsvisningen trenger ingen egen velger.
 */
export function ThemePreview({ segment }: ThemePreviewProps) {
    if (segment === "farger" || segment === "mork-modus") {
        return (
            <ThemePreviewWorkspace
                colorScheme={segment === "farger" ? "light" : "dark"}
            />
        );
    }

    return (
        <ThemePreviewSurface colorScheme="light">
            {segment === "grunnfarge" ? (
                <BaseColorPreview />
            ) : segment === "identitet" ? (
                <TypographyView />
            ) : (
                <div className={styles.stepPreviewContent}>
                    <ThemePreviewOverview />
                </div>
            )}
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
