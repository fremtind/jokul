import { RefObject, useEffect } from "react";

export function useKeyListener(
    ref: RefObject<HTMLElement> | null,
    keys: string[] | string | null,
    fn: (event: KeyboardEvent) => void,
): void {
    if (typeof keys === "string") {
        keys = [keys];
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (keys && !keys.includes(event.key)) {
            return;
        }
        fn(event);
    }

    useEffect(() => {
        const element = ref && ref.current;
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
