import React from "react";

export function useClickOutside(ref: any, fn: () => void) {
    function handleClickOutside(event: MouseEvent) {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            fn();
        }
    }

    React.useEffect(() => {
        if (ref) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            if (ref) {
                document.removeEventListener("click", handleClickOutside);
            }
        };
    });
}
