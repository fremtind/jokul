import { useEffect, useRef, RefObject } from "react";

const hasWindowWithMutationObserver = () =>
    typeof window !== "undefined" && typeof MutationObserver !== "undefined";

/**
 * Hook som gjør det enklere å sjekke en komponents children for endringer.
 *
 * @param targetRef Container som skal observeres. Containeren må ikke rerendres, da vil observereren bli opprettet på nytt.
 * @param onObservation Callback-funksjon som utføres når en mutasjon observeres.
 * @param config Parametere til observereren. Se https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit#properties for mer info.
 */
export const useMutationObserver = (
    targetRef: RefObject<HTMLElement>,
    onObservation: MutationCallback,
    config?: Partial<MutationObserverInit>,
): void => {
    const observerRef = useRef<MutationObserver>(null);

    useEffect(() => {
        let observer = observerRef.current;

        if (hasWindowWithMutationObserver()) {
            const target = targetRef.current;

            if (observer) {
                observer.disconnect();
            }

            observer = new MutationObserver(onObservation);

            if (target) {
                observer.observe(target, config);
            }
        }
        return () => {
            if (hasWindowWithMutationObserver() && observer) {
                observer.disconnect();
            }
        };
    }, [targetRef, onObservation, config]);
};
