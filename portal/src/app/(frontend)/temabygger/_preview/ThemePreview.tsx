"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ColorScheme } from "../generator/types";
import { ColorCombinations } from "./ColorCombinations";
import { EmptyView } from "./EmptyView";
import { ExampleView } from "./ExampleView";
import styles from "./theme-preview.module.scss";

type ThemePreviewTab = "overview" | "components" | "contrast";

const PREVIEW_TABS: { value: ThemePreviewTab; label: string }[] = [
    { value: "overview", label: "Overblikk" },
    { value: "components", label: "Komponenter" },
    { value: "contrast", label: "Fargekombinasjoner" },
];

const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
    light: "Lyst modus",
    dark: "Mørkt modus",
};

const COLOR_SCHEME_ICONS: Record<ColorScheme, string> = {
    light: "light_mode",
    dark: "dark_mode",
};

type ThemePreviewProps = {
    segment?: string | null;
    colorScheme: ColorScheme;
    onToggleColorScheme?: () => void;
};

export function ThemePreview({
    segment,
    colorScheme,
    onToggleColorScheme,
}: ThemePreviewProps) {
    const { draft } = useThemeDraft();
    const [activeTab, setActiveTab] = useState<ThemePreviewTab>("overview");
    const activeColorScheme = draft.includeDarkMode ? colorScheme : "light";
    const showColorPreview = segment === "farger" || !segment;

    return (
        <Flex direction="column" gap="24">
            {showColorPreview && (
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    wrap="wrap"
                    gap="m"
                >
                    <SegmentedControl
                        legend="Temabyggerinnhold"
                        labelProps={{ srOnly: true }}
                    >
                        {PREVIEW_TABS.map((tab) => (
                            <SegmentedControlButton
                                key={tab.value}
                                name="theme-builder-workspace-tab"
                                value={tab.value}
                                checked={activeTab === tab.value}
                                onChange={() => setActiveTab(tab.value)}
                            >
                                {tab.label}
                            </SegmentedControlButton>
                        ))}
                    </SegmentedControl>
                    {draft.includeDarkMode && onToggleColorScheme && (
                        <Button
                            type="button"
                            variant="ghost"
                            icon={
                                <Icon>
                                    {COLOR_SCHEME_ICONS[activeColorScheme]}
                                </Icon>
                            }
                            onClick={onToggleColorScheme}
                        >
                            {COLOR_SCHEME_LABELS[activeColorScheme]}
                        </Button>
                    )}
                </Flex>
            )}
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
