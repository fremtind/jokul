import { useEffect, useRef } from "react";
import type { ThemeDraft } from "../_context/types";
import { setStoredThemeDraft } from "./themeDraftStorage";

/**
 * Synkroniserer `draft` til localStorage med throttling.
 * Lagrer maks én gang per `throttleMs`, og alltid ved unmount.
 *
 * @param draft - Verdien som skal lagres
 * @param enabled - Må være `true` for at synkronisering skal starte (f.eks. etter at lagret verdi er lastet inn)
 * @param throttleMs - Minimum antall millisekunder mellom hver lagring
 */
export function useThrottledStorageSync(
    draft: ThemeDraft,
    enabled: boolean,
    throttleMs: number,
) {
    const lastSavedAtRef = useRef<number | null>(null);
    // Brukes for å kunne lagre ved unmount
    const draftRef = useRef(draft);
    draftRef.current = draft;

    // Throttlet lagring ved endringer
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const now = Date.now();
        const msSinceLastSave =
            lastSavedAtRef.current !== null
                ? now - lastSavedAtRef.current
                : Number.POSITIVE_INFINITY;
        const msUntilNextSave = Math.max(0, throttleMs - msSinceLastSave);

        const save = () => {
            setStoredThemeDraft(draft);
            lastSavedAtRef.current = Date.now();
        };

        const timeoutId = window.setTimeout(save, msUntilNextSave);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [draft, enabled, throttleMs]);

    // Lagre ved unmount hvis synkronisering har vært aktiv
    useEffect(() => {
        return () => {
            if (enabled) {
                setStoredThemeDraft(draftRef.current);
            }
        };
    }, [enabled]);
}
