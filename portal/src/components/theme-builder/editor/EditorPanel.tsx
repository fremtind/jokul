"use client";

import { Flex } from "@fremtind/jokul/flex";
import type { ColorToken, EditorMode } from "../tokens";
import { EditorTopBar } from "./EditorTopBar";
import { JsonEditor } from "./JsonEditor";
import { VisualEditor } from "./VisualEditor";
import type { TokenChangeHandler } from "./types";

type EditorPanelProps = {
    editorMode: EditorMode;
    jsonError?: string;
    jsonValue: string;
    onEditorModeChange: (mode: EditorMode) => void;
    onJsonValueChange: (value: string) => void;
    onJsonCommit: () => void;
    onTokenChange: TokenChangeHandler;
    tokens: ColorToken[];
};

/**
 * Tilstandsløs editor-body: top bar (utgangspunkt + modusvelger) og innhold
 * (visuell eller JSON-editor). Tilbakestill- og eksport-knapper rendres av
 * den omliggende Modal-en i `ModalActions`.
 */
export function EditorPanel({
    editorMode,
    jsonError,
    jsonValue,
    onEditorModeChange,
    onJsonValueChange,
    onJsonCommit,
    onTokenChange,
    tokens,
}: EditorPanelProps) {
    return (
        <Flex direction="column" gap="m" data-editor-mode={editorMode}>
            <EditorTopBar
                editorMode={editorMode}
                onEditorModeChange={onEditorModeChange}
            />
            {editorMode === "visual" ? (
                <VisualEditor tokens={tokens} onTokenChange={onTokenChange} />
            ) : (
                <JsonEditor
                    value={jsonValue}
                    error={jsonError}
                    onChange={onJsonValueChange}
                    onCommit={onJsonCommit}
                />
            )}
        </Flex>
    );
}
