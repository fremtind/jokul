"use client";

import { Flex } from "@fremtind/jokul/flex";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { useState } from "react";
import { ThemeBuilderLayout } from "./ThemeBuilderLayout";
import { ThemePreview } from "./ThemePreview";
import { TokenEditor } from "./TokenEditor";
import { TokenOverview } from "./TokenOverview";
import { normalizeHex } from "./colorTokenUtils";
import {
    type ColorToken,
    THEME_MODES,
    type ThemeMode,
    tokenKey,
    tokensFromSchema,
} from "./colorTokens";

type PreviewTab = "demo" | "tokens";

const PREVIEW_TABS: { value: PreviewTab; label: string }[] = [
    { value: "demo", label: "Demo" },
    { value: "tokens", label: "Farge-tokens" },
];

const THEME_MODE_LABELS: Partial<Record<ThemeMode, string>> = {
    light: "Lys",
    dark: "Mørk",
};

export function ThemeBuilder() {
    const [tokens, setTokens] = useState(() => tokensFromSchema());
    const [themeMode, setThemeMode] = useState<ThemeMode>(
        THEME_MODES[0] as ThemeMode,
    );
    const [activeTab, setActiveTab] = useState<PreviewTab>("demo");

    const updateToken = (tokenId: string, mode: ThemeMode, value: string) => {
        setTokens((previousTokens) =>
            previousTokens.map((token) =>
                tokenKey(token) === tokenId
                    ? { ...token, [mode]: normalizeHex(value) }
                    : token,
            ),
        );
    };

    return (
        <ThemeBuilderLayout>
            <ThemeBuilderLayout.Preview>
                <PreviewPanel
                    activeTab={activeTab}
                    onActiveTabChange={setActiveTab}
                    onThemeModeChange={setThemeMode}
                    themeMode={themeMode}
                    tokens={tokens}
                />
            </ThemeBuilderLayout.Preview>
            <ThemeBuilderLayout.Form>
                <TokenEditor tokens={tokens} onTokenChange={updateToken} />
            </ThemeBuilderLayout.Form>
        </ThemeBuilderLayout>
    );
}

type PreviewPanelProps = {
    tokens: ColorToken[];
    themeMode: ThemeMode;
    onThemeModeChange: (next: ThemeMode) => void;
    activeTab: PreviewTab;
    onActiveTabChange: (next: PreviewTab) => void;
};

function PreviewPanel({
    tokens,
    themeMode,
    onThemeModeChange,
    activeTab,
    onActiveTabChange,
}: PreviewPanelProps) {
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
                            onChange={() => onActiveTabChange(tab.value)}
                        >
                            {tab.label}
                        </SegmentedControlButton>
                    ))}
                </SegmentedControl>
                <SegmentedControl
                    legend="Fargemodus"
                    labelProps={{ srOnly: true }}
                >
                    {THEME_MODES.map((mode) => (
                        <SegmentedControlButton
                            key={mode}
                            name="theme-builder-preview-theme"
                            value={mode}
                            checked={themeMode === mode}
                            onChange={() => onThemeModeChange(mode)}
                        >
                            {THEME_MODE_LABELS[mode] ?? mode}
                        </SegmentedControlButton>
                    ))}
                </SegmentedControl>
            </Flex>
            {activeTab === "demo" ? (
                <ThemePreview themeMode={themeMode} tokens={tokens} />
            ) : (
                <TokenOverview tokens={tokens} />
            )}
        </Flex>
    );
}
