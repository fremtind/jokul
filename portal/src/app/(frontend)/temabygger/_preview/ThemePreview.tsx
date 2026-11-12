"use client";

import { Flex } from "@fremtind/jokul/flex";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useThemePreview } from "../_context/ThemePreviewContext";
import { ColorCombinations } from "./ColorCombinations";
import { EmptyView } from "./EmptyView";
import { ExampleView } from "./ExampleView";
import styles from "./theme-preview.module.scss";

type ThemePreviewProps = {
    segment?: string | null;
};

export function ThemePreview({ segment }: ThemePreviewProps) {
    const { draft } = useThemeDraft();
    const { activeColorScheme, activeTab } = useThemePreview();
    const showColorPreview =
        segment === "farger" || segment === "innsending" || !segment;

    return (
        <Flex direction="column" gap="24">
            {segment === "identitet" && (
                <div className={styles.stepPreviewContent}>
                    <EmptyView />
                </div>
            )}
            {segment === "grunnfarge" && (
                <div className={styles.stepPreviewContent}>
                    <ExampleView story="contrast" />
                </div>
            )}
            {showColorPreview && activeTab === "contrast" && (
                <ColorCombinations
                    includeDarkMode={draft.includeDarkMode}
                    tokens={draft.colorTokens}
                    colorScheme={activeColorScheme}
                />
            )}
            {showColorPreview && activeTab !== "contrast" && (
                <ExampleView story={activeTab} />
            )}
        </Flex>
    );
}
