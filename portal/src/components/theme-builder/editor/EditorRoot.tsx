"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { CopyIcon, Icon } from "@fremtind/jokul/icon";
import { ModalActions, ModalBody } from "@fremtind/jokul/modal";
import { useState } from "react";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import type { EditorMode } from "../tokens";
import { parseEditorJson } from "../utils";
import { EditorPanel } from "./EditorPanel";

import styles from "./editor.module.scss";

/**
 * Eier editorens lokale UI-state (modus, JSON-utkast, parsefeil) og rendrer
 * Modal-ens body- og actions-slots. Actions-raden har to grupper:
 * Tilbakestill til venstre, Kopier/Last ned til høyre.
 */
export function EditorRoot() {
    const {
        canRedo,
        canUndo,
        copyExport,
        downloadExport,
        exportValue,
        hasValidationErrors,
        redo,
        replaceTokens,
        reset,
        tokens,
        undo,
        updateToken,
    } = useThemeBuilder();

    const [editorMode, setEditorMode] = useState<EditorMode>("visual");
    const [jsonDraft, setJsonDraft] = useState(exportValue);
    const [jsonError, setJsonError] = useState<string>();

    const exportBlocked = hasValidationErrors || Boolean(jsonError);

    const handleEditorModeChange = (next: EditorMode) => {
        setEditorMode(next);
        if (next === "json") setJsonDraft(exportValue);
        setJsonError(undefined);
    };

    const handleJsonValueChange = (next: string) => {
        setJsonDraft(next);
        // Live parse-feedback uten å committe — committen skjer ved blur,
        // ellers re-renderer hele provider-treet på hvert tastetrykk.
        const result = parseEditorJson(next);
        setJsonError(result.ok ? undefined : result.error);
    };

    const handleJsonCommit = () => {
        const result = parseEditorJson(jsonDraft);
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
        <>
            <ModalBody>
                <EditorPanel
                    editorMode={editorMode}
                    jsonError={jsonError}
                    jsonValue={jsonDraft}
                    onEditorModeChange={handleEditorModeChange}
                    onJsonValueChange={handleJsonValueChange}
                    onJsonCommit={handleJsonCommit}
                    onTokenChange={updateToken}
                    tokens={tokens}
                />
            </ModalBody>
            <ModalActions className={styles.editorFooter}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap="m"
                    fill
                >
                    <Flex
                        className={styles.footerGroup}
                        alignItems="center"
                        gap="2xs"
                    >
                        <Button
                            variant="ghost"
                            icon={<Icon bold>restart_alt</Icon>}
                            onClick={handleReset}
                        >
                            Tilbakestill
                        </Button>
                        <span
                            aria-hidden="true"
                            className={styles.footerDivider}
                        />
                        <Button
                            variant="ghost"
                            data-size="small"
                            icon={<Icon bold>undo</Icon>}
                            aria-label="Angre"
                            title="Angre"
                            disabled={!canUndo}
                            onClick={undo}
                        />
                        <Button
                            variant="ghost"
                            data-size="small"
                            icon={<Icon bold>redo</Icon>}
                            aria-label="Gjør om"
                            title="Gjør om"
                            disabled={!canRedo}
                            onClick={redo}
                        />
                    </Flex>
                    <Flex
                        className={styles.footerGroup}
                        alignItems="center"
                        gap="2xs"
                    >
                        <Button
                            variant="ghost"
                            disabled={exportBlocked}
                            icon={<CopyIcon bold />}
                            onClick={copyExport}
                        >
                            Kopier
                        </Button>
                        <Button
                            variant="primary"
                            disabled={exportBlocked}
                            icon={<Icon bold>download</Icon>}
                            onClick={downloadExport}
                        >
                            Last ned
                        </Button>
                    </Flex>
                </Flex>
            </ModalActions>
        </>
    );
}
