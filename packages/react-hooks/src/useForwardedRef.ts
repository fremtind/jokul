import { ForwardedRef, MutableRefObject, useCallback, useRef } from "react";

/**
 * En hjelper til komponenter som mottar en forwardedRef, og samtidig trenger tilgang til refen selv internt.
 *
 * @param forwardedRef Input fra React.forwardRef
 * @returns En mutable ref, og en funksjon for å sette både denne refen og forwardedRef til samme instance. Sistnevnte brukes som ref på elementet (for å synce med forwardedRef). Førstnevnte for ting som å sette fokus internt i komponenten.
 */
export function useForwardedRef<T = HTMLElement>(
    forwardedRef: ForwardedRef<T> | null,
): [MutableRefObject<T | null>, (instance: T | null) => void] {
    const ref = useRef<T | null>(null);

    const setRef = useCallback(
        (instance: T | null) => {
            ref.current = instance;
            if (forwardedRef) {
                if (typeof forwardedRef === "function") {
                    forwardedRef(instance);
                } else {
                    forwardedRef.current = instance;
                }
            }
        },
        [ref, forwardedRef],
    );

    return [ref, setRef];
}
