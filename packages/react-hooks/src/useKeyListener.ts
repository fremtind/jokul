import { RefObject, useEffect } from "react";

export function useKeyListener(ref: RefObject<HTMLElement> | null, keys: string[] | string | null, fn: () => void) {
    if (typeof keys === "string") {
        keys = [keys];
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (keys && !keys.includes(event.key)) {
            return;
        }
        fn();
    }

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            if (ref && ref.current) {
                ref.current.removeEventListener("keydown", handleKeyDown);
            }
        };
    });
}
