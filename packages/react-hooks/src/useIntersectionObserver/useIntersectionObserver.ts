import { useEffect, useRef, RefObject } from "react";

const hasWindowWithIntersectionObserver = () =>
    typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";

export const useIntersectionObserver = (
    targetRef: RefObject<HTMLElement | SVGElement>,
    onIntersect: IntersectionObserverCallback,
    fallback: VoidFunction,
    options?: Partial<IntersectionObserverInit>,
) => {
    const observerRef = useRef<IntersectionObserver>(null);

    useEffect(() => {
        let observer = observerRef.current;
        if (hasWindowWithIntersectionObserver()) {
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
            if (hasWindowWithIntersectionObserver() && observer) {
                observer.disconnect();
            }
        };
    }, [targetRef, onIntersect, fallback, options]);
};
