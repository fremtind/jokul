"use client";

import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Title } from "@fremtind/jokul/typography";
import { useState } from "react";
import { useThemeBuilder } from "./ThemeBuilderProvider";
import { EditorRoot } from "./editor/EditorRoot";
import { PageHeader } from "./layout/PageHeader";
import { type WorkspaceTab, WorkspaceTabs } from "./layout/WorkspaceTabs";
import { THEME_MODES, type ThemeMode } from "./tokens";

import styles from "./theme-builder.module.scss";

/**
 * Toppnivå-side for theme-builder. Editoren vises som et sidepanel ved siden
 * av workspace-en, slik at demoen kan inspiseres mens tokens endres.
 * Aktiv lys/mørk-modus eies her og sendes inn til demo-fanen — øvrige faner
 * inspiserer tokens, ikke det rendrede chromet, og ignorerer den.
 */
export function ThemeBuilder() {
    const { tokens } = useThemeBuilder();
    const [themeMode, setThemeMode] = useState<ThemeMode>(
        THEME_MODES[0] as ThemeMode,
    );
    const [activeTab, setActiveTab] = useState<WorkspaceTab>("demo");

    return (
        <Flex direction="column" gap="l">
            <PageHeader />
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
                    <EditorRoot />
                </Card>
                <div className={styles.workspaceContent}>
                    <WorkspaceTabs
                        tokens={tokens}
                        themeMode={themeMode}
                        onThemeModeChange={setThemeMode}
                        activeTab={activeTab}
                        onActiveTabChange={setActiveTab}
                    />
                </div>
            </div>
        </Flex>
    );
}
