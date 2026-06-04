"use client";

import { Flex } from "@fremtind/jokul/flex";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { Title } from "@fremtind/jokul/typography";
import { useState } from "react";
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

type WorkspaceTab = "demo" | "tokens";

const WORKSPACE_TABS: { value: WorkspaceTab; label: string }[] = [
    { value: "demo", label: "Demo" },
    { value: "tokens", label: "Farge-tokens" },
];

const THEME_MODE_LABELS: Partial<Record<ThemeMode, string>> = {
    light: "Lys",
    dark: "Mørk",
};

/**
 * Toppnivå-side for theme-builder. Editoren vises som et sidepanel ved siden
 * av workspace-en, slik at demoen kan inspiseres mens tokens endres.
 * Aktiv lys/mørk-modus eies her og sendes inn til demo-fanen — øvrige faner
 * inspiserer tokens, ikke det rendrede chromet, og ignorerer den.
 */
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
        <Flex direction="column" gap="l">
            <Title as="h1" size="xl">
                Temabygger
            </Title>
            <div className={styles.workspace}>
                <Card
                    as="section"
                    padding="l"
                    outlined
                    className={styles.editorCard}
                    aria-labelledby="theme-builder-editor-title"
                >
                    <Title
                        as="h2"
                        size="s"
                        id="theme-builder-editor-title"
                        srOnly
                    >
                        Editor
                    </Title>
                    <TokenEditor tokens={tokens} onTokenChange={updateToken} />
                </Card>
                <div className={styles.workspaceContent}>
                    <Workspace
                        activeTab={activeTab}
                        onActiveTabChange={setActiveTab}
                        onThemeModeChange={setThemeMode}
                        themeMode={themeMode}
                        tokens={tokens}
                    />
                </div>
            </div>
        </Flex>
    );
}

type WorkspaceProps = {
    tokens: ColorToken[];
    themeMode: ThemeMode;
    onThemeModeChange: (next: ThemeMode) => void;
    activeTab: WorkspaceTab;
    onActiveTabChange: (next: WorkspaceTab) => void;
};

function Workspace({
    tokens,
    themeMode,
    onThemeModeChange,
    activeTab,
    onActiveTabChange,
}: WorkspaceProps) {
    return (
        <div className={styles.workspaceTabsRoot}>
            <Flex
                className={styles.contentControls}
                justifyContent="space-between"
                alignItems="center"
                wrap="wrap"
                gap="m"
            >
                <SegmentedControl
                    className={styles.controlGroup}
                    legend="Temabyggerinnhold"
                    labelProps={{ srOnly: true }}
                >
                    {WORKSPACE_TABS.map((tab) => (
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
                    className={styles.controlGroup}
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
        </div>
    );
}
