"use client";

import { Button } from "@fremtind/jokul/button";
import { CopyIcon, Icon } from "@fremtind/jokul/icon";
import { useEffect, useState } from "react";
import { ThemeBuilderEditorPanel } from "./ThemeBuilderEditorPanel";
import { ThemeBuilderPreviewPanel } from "./ThemeBuilderPreviewPanel";
import { useThemeBuilder } from "./ThemeBuilderProvider";
import type { EditorMode } from "./types";
import { parseColorSchemeEditorValue } from "./utils";

import styles from "./theme-builder.module.scss";

export function ThemeBuilder() {
    const {
        activeVariant,
        brandName,
        copyExport,
        copyStatus,
        downloadExport,
        exportValue,
        fileName,
        hasValidationErrors,
        previewColorScheme,
        replaceTokens,
        reset,
        setActiveVariant,
        setBrandName,
        setPreviewColorScheme,
        tokens,
        updateToken,
    } = useThemeBuilder();
    const [editorCollapsed, setEditorCollapsed] = useState(false);
    const [editorMode, setEditorMode] = useState<EditorMode>("visual");
    const [jsonDraft, setJsonDraft] = useState(exportValue);
    const [jsonError, setJsonError] = useState<string>();
    const [shouldSyncJson, setShouldSyncJson] = useState(false);

    const exportBlocked = hasValidationErrors || Boolean(jsonError);
    const statusMessage = jsonError
        ? jsonError
        : hasValidationErrors
          ? "Eksport er blokkert til alle felt har gyldige hex-verdier."
          : copyStatus === "success"
            ? "JSON kopiert."
            : copyStatus === "error"
              ? "Kunne ikke kopiere JSON."
              : undefined;

    useEffect(() => {
        if (!shouldSyncJson) {
            return;
        }

        setJsonDraft(exportValue);
        setJsonError(undefined);
        setShouldSyncJson(false);
    }, [exportValue, shouldSyncJson]);

    const handleEditorModeChange = (nextMode: EditorMode) => {
        setEditorMode(nextMode);

        if (nextMode === "json") {
            setShouldSyncJson(true);
            return;
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
        setShouldSyncJson(true);
    };

    return (
        <div className={styles.page}>
            <header className={styles.pageHeader}>
                <div className={styles.pageIntro}>
                    <p className={styles.pageEyebrow}>Theme builder</p>
                    <h1>Bygg fargetema med Jøkul</h1>
                </div>
                <div className={styles.pageActions}>
                    <Button
                        variant="ghost"
                        aria-expanded={!editorCollapsed}
                        aria-controls="theme-builder-editor-panel"
                        onClick={() => setEditorCollapsed((value) => !value)}
                    >
                        {editorCollapsed ? "Vis editor" : "Skjul editor"}
                    </Button>
                    <Button variant="ghost" onClick={handleReset}>
                        Tilbakestill
                    </Button>
                </div>
            </header>
            <div className={styles.pageMeta}>
                <div className={styles.pageMetaRow}>
                    <code>{fileName}</code>
                    <div className={styles.pageMetaActions}>
                        <Button
                            variant="ghost"
                            data-size="small"
                            disabled={exportBlocked}
                            icon={<CopyIcon bold />}
                            aria-label="Kopier JSON"
                            title="Kopier JSON"
                            onClick={copyExport}
                        />
                        <Button
                            variant="ghost"
                            data-size="small"
                            disabled={exportBlocked}
                            icon={<Icon bold>download</Icon>}
                            aria-label="Eksporter JSON"
                            title="Eksporter JSON"
                            onClick={downloadExport}
                        />
                    </div>
                </div>
                <output className={styles.pageStatus} aria-live="polite">
                    {statusMessage}
                </output>
            </div>
            <div
                className={styles.workspaceGrid}
                data-editor-collapsed={editorCollapsed}
            >
                {!editorCollapsed && (
                    <aside
                        id="theme-builder-editor-panel"
                        className={styles.editorColumn}
                    >
                        <ThemeBuilderEditorPanel
                            activeVariant={activeVariant}
                            brandName={brandName}
                            editorMode={editorMode}
                            jsonError={jsonError}
                            jsonValue={jsonDraft}
                            onActiveVariantChange={setActiveVariant}
                            onBrandNameChange={setBrandName}
                            onEditorModeChange={handleEditorModeChange}
                            onJsonValueChange={handleJsonValueChange}
                            onTokenChange={updateToken}
                            tokens={tokens}
                        />
                    </aside>
                )}
                <ThemeBuilderPreviewPanel
                    activeVariant={activeVariant}
                    previewColorScheme={previewColorScheme}
                    onPreviewColorSchemeChange={setPreviewColorScheme}
                    tokens={tokens}
                />
            </div>
        </div>
    );
}
