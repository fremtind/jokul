"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import {
    type ThemePreviewTab,
    useThemePreview,
} from "../_context/ThemePreviewContext";
import type { ColorScheme } from "../generator/types";
import { ColorCombinations } from "./ColorCombinations";
import { EmptyView } from "./EmptyView";
import { ExampleView } from "./ExampleView";
import styles from "./theme-preview.module.scss";

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
};

export function ThemePreview({ segment }: ThemePreviewProps) {
    const { draft } = useThemeDraft();
    const { activeColorScheme, activeTab, setActiveTab, toggleColorScheme } =
        useThemePreview();

    return (
        <Flex direction="column" gap="24">
            {(segment === "farger" || !segment) && (
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
                    {draft.includeDarkMode && (
                        <Button
                            type="button"
                            variant="ghost"
                            icon={
                                <Icon>
                                    {COLOR_SCHEME_ICONS[activeColorScheme]}
                                </Icon>
                            }
                            onClick={toggleColorScheme}
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
            {(segment === "farger" || !segment) && activeTab === "contrast" && (
                <ColorCombinations
                    includeDarkMode={draft.includeDarkMode}
                    tokens={draft.colorTokens}
                    colorScheme={activeColorScheme}
                />
            )}
            {(segment === "farger" || !segment) && activeTab !== "contrast" && (
                <ExampleView story={activeTab} />
            )}
        </Flex>
    );
}
