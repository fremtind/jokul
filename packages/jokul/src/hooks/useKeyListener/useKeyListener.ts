import { type RefObject, useEffect } from "react";

/**
 * Lar deg sette opp en tastaturlytter på et element.
 * @param ref Element som skal observeres
 * @param keys Taster som skal lyttes på
 * @param fn Funksjon som kalles når en tastetrykk observeres
 */
export function useKeyListener(
    ref: RefObject<HTMLElement | null> | null,
    keys: string[] | string | null,
    fn: (event: KeyboardEvent) => void,
): void {
    if (typeof keys === "string") {
        // biome-ignore lint/style/noParameterAssign: Dette er helt greit å forstå
        keys = [keys];
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (keys && !keys.includes(event.key)) {
            return;
        }
        fn(event);
    }

    useEffect(() => {
        const element = ref?.current;
        if (element) {
            element.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            if (element) {
                element.removeEventListener("keydown", handleKeyDown);
            }
        };
    });
}
