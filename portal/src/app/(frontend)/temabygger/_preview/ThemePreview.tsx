"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { useState } from "react";
import type { ColorScheme } from "../_components/ThemeBuilder";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ContrastView } from "./ContrastView";
import { ExampleView } from "./ExampleView";

type PreviewTab = "overview" | "contrast";

const PREVIEW_TABS: { value: PreviewTab; label: string }[] = [
    { value: "overview", label: "Overblikk" },
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
    colorScheme: ColorScheme;
    includeDarkMode: boolean;
    onColorSchemeChange: (colorScheme: ColorScheme) => void;
};

export function ThemePreview({
    colorScheme,
    includeDarkMode,
    onColorSchemeChange,
}: ThemePreviewProps) {
    const { color } = useThemeDraft();
    const [activeTab, setActiveTab] = useState<PreviewTab>("overview");
    const nextColorScheme: ColorScheme =
        colorScheme === "light" ? "dark" : "light";

    return (
        <Flex direction="column" gap="24">
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
                {includeDarkMode && (
                    <Button
                        type="button"
                        variant="ghost"
                        icon={<Icon>{COLOR_SCHEME_ICONS[colorScheme]}</Icon>}
                        onClick={() => onColorSchemeChange(nextColorScheme)}
                        aria-label={`Bytt til ${COLOR_SCHEME_LABELS[nextColorScheme].toLowerCase()}`}
                    >
                        {COLOR_SCHEME_LABELS[colorScheme]}
                    </Button>
                )}
            </Flex>
            {activeTab === "overview" ? (
                <ExampleView />
            ) : (
                <ContrastView
                    includeDarkMode={includeDarkMode}
                    tokens={color.tokens}
                />
            )}
        </Flex>
    );
}
