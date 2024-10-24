import { type RefObject, useCallback, useEffect, useRef } from "react";
import tokens from "../../core/tokens.js";
import { useBrowserPreferences } from "../useBrowserPreferences/useBrowserPreferences.js";
import { usePreviousValue } from "../usePreviousValue/usePreviousValue.js";
import { UseAnimatedHeightOptions } from "./types.js";

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

/**
 * Lar deg enklere animere mellom to tilstander, gitt ved å sette `data-expanded` på et element til `true` eller `false`.
 * Du bestemmer selv hvilke stiler elementet skal ha i de to tilstandene (vha CSS/Sass), og høyden animeres dersom den endrer seg.
 * @param isExpanded indikerer om elementet skal være utvidet eller ikke
 * @param options konfigurasjon for animasjonen, og lyttere for når animasjonen starter og slutter
 * @returns En tuple med referanse til elementet og en funksjon som kan trigge animasjonen
 */
export function useAnimatedHeightBetween<T extends HTMLElement>(
    isExpanded: boolean,
    options?: Omit<UseAnimatedHeightOptions<T>, "display" | "onFirstVisible">,
): [RefObject<T>, () => void] {
    const wasExpanded = usePreviousValue(isExpanded);
    const easing = options?.easing || defaultEasing;
    const timing = options?.timing || defaultTiming;
    const transition = `${tokens.motion.timing[timing]} height ${tokens.motion.easing[easing]}`;

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
