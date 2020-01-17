import { useEffect, useRef, RefObject } from "react";

const hasWindowWithIntersectionObserver = () =>
    typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";

export const useIntersectionObserver = (
    targetRef: RefObject<HTMLElement>,
    onIntersect: IntersectionObserverCallback,
    fallback: VoidFunction,
    options?: Partial<IntersectionObserverInit>,
) => {
    const observerRef = useRef<IntersectionObserver>(null);

    useEffect(() => {
        if (hasWindowWithIntersectionObserver()) {
            let observer = observerRef.current;
            const target = targetRef.current;

            if (observer) {
                observer.disconnect();
            }

            observer = new IntersectionObserver(onIntersect, options);

            if (target) {
                observer.observe(target);
            }
        } else {
            fallback();
        }
        return () => {
            if (hasWindowWithIntersectionObserver() && observerRef && observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [targetRef]);
};
