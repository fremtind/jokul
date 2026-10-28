import type { ForwardedRef, MutableRefObject, RefCallback } from "react";

/**
 * Slår sammen flere refs til én, for eksempel hvis du har både en
 * egen ref i en komponent og også vil kunne ta inn en forwardRef
 * fra brukeren av komponenten.
 * @param refs Liste over refs du vil slå sammen
 * @returns En `RefCallback` du kan sende videre til en komponent/element
 * @example
 * const ref = useRef<HTMLElement>(null);
 * const combinedRef = mergeRefs(ref, forwardedRef, anotherRef);
 *
 * return <div ref={combinedRef} {...props} />;
 */
export function mergeRefs<T>(
    ...refs: (ForwardedRef<T> | MutableRefObject<T> | undefined)[]
): RefCallback<T> {
    return function combinedRef(instance: T | null) {
        for (const ref of refs) {
            if (!ref) continue;

            if (typeof ref === "function") {
                ref(instance);
            } else if (ref) {
                ref.current = instance;
            }
        }
    };
}
