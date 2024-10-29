import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import { useCallback, useEffect, useRef } from "react";
import { clamp } from "~/utils/function";

export interface UseFadingContentOptions extends IntersectionObserverInit {
    selector: string;
    updateTrigger: unknown;
    minimumOpacity: number;
}

const defaultOptions: UseFadingContentOptions = {
    selector: ".jkl-portal-page-section",
    updateTrigger: undefined,
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    minimumOpacity: 0.2,
};

export const useFadingContent = (options?: Partial<UseFadingContentOptions>) => {
    const observedElements = useRef<NodeListOf<HTMLElement>>();

    const { updateTrigger, selector, minimumOpacity, ...observerOptions } = {
        ...defaultOptions,
        ...options,
    };

    useEffect(() => {
        if (typeof document !== "undefined") {
            observedElements.current = (options?.root || document).querySelectorAll<HTMLElement>(selector);
        }
    }, [updateTrigger, selector, options?.root, options?.rootMargin]);

    const handleIntersection: IntersectionObserverCallback = useCallback(
        (intersections) => {
            intersections.forEach((intersection) => {
                const { intersectionRect, rootBounds, target, intersectionRatio } = intersection;

                if (!rootBounds) {
                    return;
                }

                // Sett gjennomsiktighet basert på hvor stor del av skjermen seksjonen
                // dekker, eller hvor stor del av seksjonen som er synlig på skjermen
                const threshold = rootBounds.height / 2;
                const partOfThreshold = intersectionRect.height / Math.max(threshold, 1);
                const calcIntersect = clamp(partOfThreshold, 0, 1);
                const opacity = Math.max(Math.max(calcIntersect, intersectionRatio), minimumOpacity);

                (target as HTMLElement).style.opacity = `${opacity}`;
            });
        },
        [minimumOpacity],
    );

    const cachebreaker = useCallback(() => {
        return updateTrigger;
    }, [updateTrigger]);

    useIntersectionObserver(observedElements as any, handleIntersection, cachebreaker, observerOptions);
};
