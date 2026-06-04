"use client";

import { Flex } from "@fremtind/jokul/flex";
import type { ColorToken } from "../tokens";
import { VisualEditor } from "./VisualEditor";
import type { TokenChangeHandler } from "./types";

type EditorPanelProps = {
    onTokenChange: TokenChangeHandler;
    tokens: ColorToken[];
};

/**
 * Tilstandsløs editor-body med visuell token-editor.
 * Tilbakestill- og eksport-knapper rendres av `EditorRoot`.
 */
export function EditorPanel({ onTokenChange, tokens }: EditorPanelProps) {
    return (
        <Flex direction="column" gap="m">
            <VisualEditor tokens={tokens} onTokenChange={onTokenChange} />
        </Flex>
    );
}
