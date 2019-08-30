import React, { RefObject } from "react";

export function useClickOutside(ref: RefObject<HTMLElement> | null, fn: () => void) {
    function handleClickOutside(event: MouseEvent) {
        if (ref && ref.current && !ref.current.contains(event.target as Node)) {
            fn();
        }
    }

    React.useEffect(() => {
        if (ref) {
            document && document.addEventListener("click", handleClickOutside);
        }
        return () => {
            if (ref) {
                document && document.removeEventListener("click", handleClickOutside);
            }
        };
    });
}
