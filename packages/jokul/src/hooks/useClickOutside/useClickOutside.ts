import { RefObject, useEffect } from "react";

/**
 * Hook for å sette opp en lytter ved klikk utenfor et element.
 * @param ref Elementet du ønsker å sjekke om en klikk er utenfor.
 * @param fn Callback-funksjon som kalles når det klikkes utenfor elementet.
 */
export function useClickOutside(
    ref: RefObject<HTMLElement> | null,
    fn: () => void,
): void {
    function handleClickOutside(event: MouseEvent) {
        if (ref?.current && !ref.current.contains(event.target as Node)) {
            fn();
        }
    }

    useEffect(() => {
        if (ref) {
            document && document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document &&
                document.removeEventListener("click", handleClickOutside);
        };
    });
}
