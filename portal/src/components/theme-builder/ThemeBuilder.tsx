"use client";

import { Button } from "@fremtind/jokul/button";
import { Icon } from "@fremtind/jokul/icon";
import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jokul/tabs";
import { useEffect, useState } from "react";
import { ThemeBuilderContentModeSwitch } from "./ThemeBuilderContentModeSwitch";
import { ThemeBuilderContrastPanel } from "./ThemeBuilderContrastPanel";
import { ThemeBuilderEditorPanel } from "./ThemeBuilderEditorPanel";
import { ThemeBuilderPreviewPanel } from "./ThemeBuilderPreviewPanel";
import { useThemeBuilder } from "./ThemeBuilderProvider";
import type { EditorMode, ThemeMode } from "./types";
import { parseColorSchemeEditorValue } from "./utils";

import styles from "./theme-builder.module.scss";

export function ThemeBuilder() {
    const {
        brandName,
        copyExport,
        downloadExport,
        exportValue,
        fileName,
        hasValidationErrors,
        replaceTokens,
        reset,
        setBrandName,
        tokens,
        updateToken,
    } = useThemeBuilder();
    const [editorOpen, setEditorOpen] = useState(false);
    const [editorMode, setEditorMode] = useState<EditorMode>("visual");
    const [contentMode, setContentMode] = useState<ThemeMode>("light");
    const [jsonDraft, setJsonDraft] = useState(exportValue);
    const [jsonError, setJsonError] = useState<string>();

    const exportBlocked = hasValidationErrors || Boolean(jsonError);

    useEffect(() => {
        if (!editorOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setEditorOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [editorOpen]);

    const handleEditorModeChange = (nextMode: EditorMode) => {
        setEditorMode(nextMode);

        if (nextMode === "json") {
            setJsonDraft(exportValue);
        }

        setJsonError(undefined);
    };

    const handleJsonValueChange = (nextValue: string) => {
        setJsonDraft(nextValue);

        const result = parseColorSchemeEditorValue(nextValue);

        if (!result.ok) {
            setJsonError(result.error);
            return;
        }

        setJsonError(undefined);
        replaceTokens(result.tokens);
    };

    const handleReset = () => {
        reset();
        setEditorMode("visual");
        setJsonError(undefined);
    };

    return (
        <div className={styles.page}>
            <header className={styles.pageHeader}>
                <h1>Temabygger</h1>
                <div className={styles.pageActions}>
                    <Button
                        variant="ghost"
                        data-size="small"
                        icon={<Icon bold>settings</Icon>}
                        aria-label={editorOpen ? "Lukk editor" : "Åpne editor"}
                        title={editorOpen ? "Lukk editor" : "Åpne editor"}
                        aria-expanded={editorOpen}
                        aria-controls="theme-builder-editor-panel"
                        onClick={() => setEditorOpen((value) => !value)}
                    />
                </div>
            </header>
            {editorOpen && (
                <aside
                    id="theme-builder-editor-panel"
                    className={styles.editorPanelShell}
                >
                    <ThemeBuilderEditorPanel
                        brandName={brandName}
                        editorMode={editorMode}
                        exportBlocked={exportBlocked}
                        fileName={fileName}
                        jsonError={jsonError}
                        jsonValue={jsonDraft}
                        onBrandNameChange={setBrandName}
                        onClose={() => setEditorOpen(false)}
                        onCopyExport={copyExport}
                        onDownloadExport={downloadExport}
                        onEditorModeChange={handleEditorModeChange}
                        onJsonValueChange={handleJsonValueChange}
                        onReset={handleReset}
                        onTokenChange={updateToken}
                        tokens={tokens}
                    />
                </aside>
            )}
            <ThemeBuilderContentModeSwitch
                mode={contentMode}
                onChange={setContentMode}
            />
            <Tabs className={styles.workspaceTabs} defaultTab={0}>
                <TabList aria-label="Temabyggerinnhold">
                    <Tab>Kontraster</Tab>
                    <Tab>Demo</Tab>
                </TabList>
                <TabPanel className={styles.workspaceTabPanel}>
                    <div className={styles.workspacePanelContent}>
                        <ThemeBuilderContrastPanel
                            theme={contentMode}
                            tokens={tokens}
                        />
                    </div>
                </TabPanel>
                <TabPanel className={styles.workspaceTabPanel}>
                    <div className={styles.workspacePanelContent}>
                        <ThemeBuilderPreviewPanel
                            theme={contentMode}
                            tokens={tokens}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
