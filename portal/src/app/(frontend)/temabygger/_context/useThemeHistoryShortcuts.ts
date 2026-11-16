import { useEffect } from "react";
import { useThemeDraft } from "./ThemeDraftContext";

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

export function useThemeHistoryShortcuts(activeStep?: string) {
    const { dispatch, canUndo, canRedo } = useThemeDraft();

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
            const isThemeField =
                target instanceof Element &&
                Boolean(target.closest("[data-theme-history]"));
            const isEditableTarget =
                target instanceof Element &&
                Boolean(target.closest("input, textarea, [contenteditable]"));

            if (isEditableTarget && !isThemeField) {
                return;
            }

            event.preventDefault();
            if (
                !activeStep ||
                (action === "UNDO" && !canUndo) ||
                (action === "REDO" && !canRedo)
            ) {
                return;
            }

            dispatch({ type: action, step: activeStep });
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [dispatch, canUndo, canRedo, activeStep]);
}
