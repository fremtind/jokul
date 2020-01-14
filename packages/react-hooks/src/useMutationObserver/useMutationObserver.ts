import { useEffect, useRef, RefObject } from "react";

const hasWindowWithMutationObserver = () => typeof window !== "undefined" && typeof MutationObserver !== "undefined";

export const useMutationObserver = (
    targetRef: RefObject<HTMLElement>,
    onObservation: MutationCallback,
    config?: Partial<MutationObserverInit>,
) => {
    const observerRef = useRef<MutationObserver>(null);

    useEffect(() => {
        if (hasWindowWithMutationObserver()) {
            let observer = observerRef.current;
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
            if (hasWindowWithMutationObserver() && observerRef && observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [targetRef]);
};
