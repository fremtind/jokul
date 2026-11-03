import { useToast } from "@fremtind/jokul/toast";
import { type Dispatch, useEffect, useRef } from "react";
import type {
    ThemeDraftHistory,
    ThemeDraftHistoryAction,
} from "../_context/themeDraftHistory";

/**
 * Angring gjelder hele utkastet, ikke feltet som har fokus. Feltene er
 * kontrollert av utkastet, så nettleserens egen angring ville blitt skrevet
 * over ved neste render uansett. `textarea` og redigerbare elementer holdes
 * utenfor: det er fritekst som ikke ligger i utkastet, og den skal fortsatt
 * kunne angres tegn for tegn.
 */
export function useUndoRedoShortcuts(
    historyState: ThemeDraftHistory,
    dispatch: Dispatch<ThemeDraftHistoryAction>,
) {
    const toastApi = useToast();

    // Effekten settes bare opp én gang, så den leser historikken og
    // toast-køen via refs.
    const historyRef = useRef(historyState);
    historyRef.current = historyState;
    const toastRef = useRef(toastApi);
    toastRef.current = toastApi;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!(event.metaKey || event.ctrlKey) || event.altKey) {
                return;
            }

            const key = event.key.toLowerCase();

            if (key !== "z" && key !== "y") {
                return;
            }

            const target = event.target;
            if (
                target instanceof HTMLElement &&
                (target.tagName === "TEXTAREA" || target.isContentEditable)
            ) {
                return;
            }

            event.preventDefault();

            // Ctrl+Y gjør om på Windows, Shift+Cmd+Z på macOS. Reduceren tåler
            // å bli kalt uten noe å angre; historikken leses bare for å velge
            // toast.
            const redo = key === "y" || event.shiftKey;
            const { past, future } = historyRef.current;
            const hasStep = (redo ? future : past).length > 0;

            dispatch({ type: redo ? "REDO" : "UNDO" });

            toastRef.current.add(
                hasStep
                    ? redo
                        ? "Gjorde om"
                        : "Angret"
                    : redo
                      ? "Ingenting å gjøre om"
                      : "Ingenting å angre",
                { variant: hasStep ? "success" : "info", timeout: 2000 },
            );
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [dispatch]);
}
