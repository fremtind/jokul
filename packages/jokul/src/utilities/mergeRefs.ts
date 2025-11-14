import {
    type ForwardedRef,
    type MutableRefObject,
    type RefCallback,
    useMemo,
} from "react";

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

/**
 * Gjør det samme som {@link mergeRefs}, men wrappet i en `useMemo`, hvis du
 * vil unngå å lage en ny funksjon ved hver render. Som regel ikke nødvendig.
 * @param refs Liste over refs du vil slå sammen
 * @returns En `RefCallback` du kan sende videre til en komponent/element
 * @example const combinedRef = useMergeRefs(ref, forwardedRef, anotherRef);
 */
export function useMergeRefs<T>(
    ...refs: (ForwardedRef<T> | MutableRefObject<T> | undefined)[]
): RefCallback<T> {
    return useMemo(() => mergeRefs(...refs), [refs]);
}
