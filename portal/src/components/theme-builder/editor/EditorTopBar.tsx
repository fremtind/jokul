"use client";

import { Flex } from "@fremtind/jokul/flex";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import type { EditorMode } from "../tokens";

import styles from "./editor.module.scss";

type EditorTopBarProps = {
    editorMode: EditorMode;
    onEditorModeChange: (mode: EditorMode) => void;
};

const EDITOR_MODES: EditorMode[] = ["visual", "json"];

/**
 * Editor-topbar: kun modusvelger (visuell vs. JSON). Tilbakestill, undo/redo
 * og eksport-kontroller ligger i omliggende `ModalActions`.
 */
export function EditorTopBar({
    editorMode,
    onEditorModeChange,
}: EditorTopBarProps) {
    return (
        <Flex
            className={styles.editorTopBar}
            justifyContent="end"
            alignItems="center"
        >
            <SegmentedControl legend="Redigeringsmodus">
                {EDITOR_MODES.map((m) => (
                    <SegmentedControlButton
                        key={m}
                        name="theme-builder-editor-mode"
                        value={m}
                        checked={editorMode === m}
                        onChange={() => onEditorModeChange(m)}
                    >
                        {m}
                    </SegmentedControlButton>
                ))}
            </SegmentedControl>
        </Flex>
    );
}
