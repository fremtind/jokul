"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { CopyIcon, Icon } from "@fremtind/jokul/icon";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import { EditorPanel } from "./EditorPanel";

import styles from "./editor.module.scss";

/**
 * Rendrer den visuelle token-editoren og handlingsrad. Actions-raden har to grupper:
 * Tilbakestill/undo/redo og Kopier/Last ned.
 */
export function EditorRoot() {
    const {
        canRedo,
        canUndo,
        copyExport,
        downloadExport,
        hasValidationErrors,
        redo,
        reset,
        tokens,
        undo,
        updateToken,
    } = useThemeBuilder();

    return (
        <div className={styles.editorRoot}>
            <div>
                <EditorPanel onTokenChange={updateToken} tokens={tokens} />
            </div>
            <div className={styles.editorFooter}>
                <Flex
                    alignItems="center"
                    className={styles.footerActions}
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
                            onClick={reset}
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
                            disabled={hasValidationErrors}
                            icon={<CopyIcon bold />}
                            onClick={copyExport}
                        >
                            Kopier
                        </Button>
                        <Button
                            variant="primary"
                            disabled={hasValidationErrors}
                            icon={<Icon bold>download</Icon>}
                            onClick={downloadExport}
                        >
                            Last ned
                        </Button>
                    </Flex>
                </Flex>
            </div>
        </div>
    );
}
