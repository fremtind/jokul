import {
    type ForwardedRef,
    type MutableRefObject,
    type RefCallback,
    useMemo,
} from "react";
import { mergeRefs } from "../../utilities/mergeRefs.js";

/**
 * Slår sammen flere refs til én callback som bare endres når en av refsene endres.
 * @param refs Liste over refs du vil slå sammen
 * @returns En `RefCallback` du kan sende videre til en komponent/element
 * @example const combinedRef = useMergeRefs(ref, forwardedRef, anotherRef);
 */
export function useMergeRefs<T>(
    ...refs: (ForwardedRef<T> | MutableRefObject<T> | undefined)[]
): RefCallback<T> {
    // biome-ignore lint/correctness/useExhaustiveDependencies: Sammenlign hver ref for seg; [refs] blir ny ved hver rendring.
    return useMemo(() => mergeRefs(...refs), refs);
}
