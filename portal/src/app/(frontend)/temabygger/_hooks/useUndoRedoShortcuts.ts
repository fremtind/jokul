import { type Dispatch, useEffect, useRef } from "react";
import {
    type ThemeDraftHistory,
    type ThemeDraftHistoryAction,
    isInScope,
} from "../_context/themeDraftHistory";

function getShortcutAction(event: KeyboardEvent): "UNDO" | "REDO" | null {
    const hasSingleModifier = event.ctrlKey !== event.metaKey;
    if (event.altKey || !hasSingleModifier) {
        return null;
    }

    const key = event.key.toLowerCase();
    if (key === "z") {
        return event.shiftKey ? "REDO" : "UNDO";
    }
    if (key === "y" && event.ctrlKey && !event.shiftKey) {
        return "REDO";
    }
    return null;
}

/**
 * Angring gjelder steget brukeren står i. Bare felt merket med
 * `data-theme-history` overstyrer nettleserens egen angring.
 */
export function useUndoRedoShortcuts(
    historyState: ThemeDraftHistory,
    dispatch: Dispatch<ThemeDraftHistoryAction>,
    activeStep: string | undefined,
) {
    // Effekten settes opp én gang, og leser gjeldende historikk og steg via refs.
    const historyRef = useRef(historyState);
    historyRef.current = historyState;
    const activeStepRef = useRef(activeStep);
    activeStepRef.current = activeStep;

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.defaultPrevented || event.isComposing) {
                return;
            }

            const action = getShortcutAction(event);
            if (!action) {
                return;
            }

            const target = event.target;
            const usesThemeHistoryShortcuts =
                target instanceof Element &&
                Boolean(target.closest("[data-theme-history]"));
            const isEditableTarget =
                target instanceof Element &&
                Boolean(target.closest("input, textarea, [contenteditable]"));

            // La andre redigerbare felt beholde nettleserens angre/gjør om.
            if (isEditableTarget && !usesThemeHistoryShortcuts) {
                return;
            }

            event.preventDefault();
            const step = activeStepRef.current;
            const { past, future } = historyRef.current;
            if (
                !step ||
                !isInScope(action === "UNDO" ? past.at(-1) : future[0], step)
            ) {
                return;
            }

            dispatch({ type: action });
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [dispatch]);
}
