import React, { RefObject } from "react";

export function useFocusOutside(ref: RefObject<HTMLElement> | null, fn: () => void) {
    function handleFocusOutside(event: FocusEvent) {
        if (ref && ref.current && !ref.current.contains(event.target as Node)) {
            fn();
        }
    }

    React.useEffect(() => {
        if (ref) {
            // focusin event not yet typed. See https://github.com/microsoft/TypeScript/issues/30716
            // @ts-ignore
            document.addEventListener("focusin", handleFocusOutside);
        }
        return () => {
            if (ref) {
                // focusin event not yet typed. See https://github.com/microsoft/TypeScript/issues/30716
                // @ts-ignore
                document.removeEventListener("focusin", handleFocusOutside);
            }
        };
    });
}
