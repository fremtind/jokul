import { Flex } from "@fremtind/jokul/flex";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { PreviewPanel } from "../preview/PreviewPanel";
import type { ColorToken, ThemeMode } from "../tokens";
import { THEME_MODES } from "../tokens";
import { TokensList } from "../tokens-list/TokensList";

import styles from "../theme-builder.module.scss";

export type WorkspaceTab = "demo" | "tokens";

type WorkspaceTabsProps = {
    tokens: ColorToken[];
    themeMode: ThemeMode;
    onThemeModeChange: (next: ThemeMode) => void;
    activeTab: WorkspaceTab;
    onActiveTabChange: (next: WorkspaceTab) => void;
};

const WORKSPACE_TABS: { value: WorkspaceTab; label: string }[] = [
    { value: "demo", label: "Demo" },
    { value: "tokens", label: "Farge-tokens" },
];

const getThemeModeLabel = (mode: ThemeMode) => {
    if (mode === "light") return "Lys";
    if (mode === "dark") return "Mørk";
    return mode;
};

/** Workspace med to faner: token-listing og live demo-preview. */
export function WorkspaceTabs({
    tokens,
    themeMode,
    onThemeModeChange,
    activeTab,
    onActiveTabChange,
}: WorkspaceTabsProps) {
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
                            {getThemeModeLabel(mode)}
                        </SegmentedControlButton>
                    ))}
                </SegmentedControl>
            </Flex>
            {activeTab === "demo" ? (
                <PreviewPanel themeMode={themeMode} tokens={tokens} />
            ) : (
                <TokensList tokens={tokens} />
            )}
        </div>
    );
}
