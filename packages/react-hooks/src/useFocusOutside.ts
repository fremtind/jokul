import { RefObject, useEffect } from "react";

export function useFocusOutside(ref: RefObject<HTMLElement> | null, fn: () => void): void {
    function handleFocusOutside(event: FocusEvent) {
        if (ref?.current && !ref.current.contains(event.target as Node)) {
            fn();
        }
    }

    useEffect(() => {
        if (ref) {
            document && document.addEventListener("focusin", handleFocusOutside);
        }
        return () => {
            document && document.removeEventListener("focusin", handleFocusOutside);
        };
    });
}
