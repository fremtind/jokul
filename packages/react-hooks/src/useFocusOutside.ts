import { RefObject, useEffect } from "react";

/**
 * Hook for å lytte etter fokus utenfor et element. Nyttig dersom flere fokuserbare elementer samspiller i en komponent.
 * @param ref Elementet som skal observeres
 * @param fn Funksjon som kalles når fokus flyttes utenfor elementet
 */
export function useFocusOutside(
    ref: RefObject<HTMLElement> | null,
    fn: () => void,
): void {
    function handleFocusOutside(event: FocusEvent) {
        if (ref?.current && !ref.current.contains(event.target as Node)) {
            fn();
        }
    }

    useEffect(() => {
        if (ref) {
            document &&
                document.addEventListener("focusin", handleFocusOutside);
        }
        return () => {
            document &&
                document.removeEventListener("focusin", handleFocusOutside);
        };
    });
}
