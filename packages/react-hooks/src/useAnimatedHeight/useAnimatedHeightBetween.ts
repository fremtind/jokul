import { timings, easings } from "@fremtind/jkl-core";
import { type RefObject, useCallback, useEffect, useRef } from "react";
import { useBrowserPreferences } from "../useBrowserPreferences/useBrowserPreferences";
import { usePreviousValue } from "../usePreviousValue/usePreviousValue";
import { UseAnimatedHeightOptions } from "./types";

const defaultEasing = "standard";
const defaultTiming = "productive";

function collapseElement<T extends HTMLElement>(
    elementRef: RefObject<T>,
    transition: string,
    raf1: React.MutableRefObject<number | undefined>,
    raf2: React.MutableRefObject<number | undefined>,
) {
    const element = elementRef.current;

    if (!element) return;

    element.removeAttribute("style");
    const expandedHeight = element.scrollHeight;

    raf1.current = requestAnimationFrame(() => {
        // Hent kollapset høyde
        element.style.removeProperty("transition");
        element.dataset["expanded"] = "false";
        const collapsedHeight = element.getBoundingClientRect().height;
        element.dataset["expanded"] = "true";

        // Sett høyde tilbake til utvidet høyde
        element.style.setProperty("height", `${expandedHeight}px`);
        element.style.setProperty("overflow-y", "hidden");

        raf2.current = requestAnimationFrame(() => {
            // Sett høyde til kollapset høyde og start transition
            element.style.setProperty("transition", transition);
            element.style.setProperty("height", `${collapsedHeight}px`);
            element.dataset["expanded"] = "false";
        });
    });
}

function expandElement<T extends HTMLElement>(
    elementRef: RefObject<T>,
    transition: string,
    raf1: React.MutableRefObject<number | undefined>,
    raf2: React.MutableRefObject<number | undefined>,
) {
    const element = elementRef.current;

    if (!element) return;

    element.removeAttribute("style");
    const expandedHeight = element.scrollHeight;
    console.log(`Expanding to ${expandedHeight}px`);

    raf1.current = requestAnimationFrame(() => {
        // Hent utvidet høyde
        element.style.removeProperty("transition");
        element.dataset["expanded"] = "false";
        const collapsedHeight = element.getBoundingClientRect().height;

        // Sett høyde tilbake til kollapset høyde
        element.style.setProperty("height", `${collapsedHeight}px`);
        element.style.setProperty("overflow-y", "hidden");

        raf2.current = requestAnimationFrame(() => {
            // Sett høyde til utvidet høyde  og start transition
            element.style.setProperty("transition", transition);
            element.style.setProperty("height", `${expandedHeight}px`);
            element.dataset["expanded"] = "true";
        });
    });
}

export function useAnimatedHeightBetween<T extends HTMLElement>(
    isExpanded: boolean,
    options?: Omit<UseAnimatedHeightOptions<T>, "display" | "onFirstVisible">,
): [RefObject<T>, () => void] {
    const wasExpanded = usePreviousValue(isExpanded);
    const easing = options?.easing || defaultEasing;
    const timing = options?.timing || defaultTiming;
    const transition = `${timings[timing]} height ${easings[easing]}`;

    const { prefersReducedMotion } = useBrowserPreferences();

    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);

    const handleTransitionEnd = useCallback(
        (event: TransitionEvent) => {
            const element = elementRef.current;

            // Ignore bubbling transitions from within container
            if (element && event.target === element) {
                element.removeAttribute("style");
                options?.onTransitionEnd?.(isExpanded, elementRef);
            }
        },
        [options, isExpanded],
    );

    const runAnimation = useCallback(() => {
        const element = elementRef.current;

        if (!element) return;

        if (wasExpanded === undefined) {
            // Første render
            element.dataset["expanded"] = isExpanded ? "true" : "false";
        }

        if ((!isExpanded && !wasExpanded) || (isExpanded && wasExpanded)) {
            // Ingen endring
            return;
        }

        options?.onTransitionStart?.(isExpanded, elementRef);

        if (prefersReducedMotion) {
            element.removeAttribute("style");
            element.dataset["expanded"] = isExpanded ? "true" : "false";
            options?.onTransitionEnd?.(isExpanded, elementRef); // make sure to call callback when animation is off
            return;
        }

        if (isExpanded) {
            expandElement(elementRef, transition, raf1, raf2);
        } else {
            collapseElement(elementRef, transition, raf1, raf2);
        }
    }, [wasExpanded, isExpanded, options, prefersReducedMotion, transition]);

    useEffect(() => {
        runAnimation();
    }, [isExpanded, runAnimation]);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            element.addEventListener("transitionend", handleTransitionEnd);
        }

        return () => {
            if (element) {
                element.removeEventListener("transitionend", handleTransitionEnd);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    useEffect(() => {
        const r1 = raf1.current;
        const r2 = raf2.current;
        return () => {
            r1 && cancelAnimationFrame(r1);
            r2 && cancelAnimationFrame(r2);
        };
    }, [raf1, raf2]);

    return [elementRef, runAnimation];
}
