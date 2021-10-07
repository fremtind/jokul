import { useEffect, useRef, RefObject } from "react";

const hasWindowWithMutationObserver = () => typeof window !== "undefined" && typeof MutationObserver !== "undefined";

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
