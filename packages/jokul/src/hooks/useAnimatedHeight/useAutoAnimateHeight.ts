import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { tokens, type Easing, type Timing } from "../../core";
import { useBrowserPreferences } from "../useBrowserPreferences/useBrowserPreferences";
import { usePreviousValue } from "../usePreviousValue/usePreviousValue";

const defaultEasing = "standard";
const defaultTiming = "expressive";

export type UseAutoAnimatedHeightOptions<T extends HTMLElement> = {
    easing?: Easing;
    /**
     * Overstyr standard timing
     * @default "expressive"
     */
    timing?: Timing;
    onTransitionStart?: (ref: RefObject<T>) => void;
    onTransitionEnd?: (ref: RefObject<T>) => void;
};

/**
 * Gjør det enklere å animere høyden på et element når innholdet endrer seg, men kan brukes på mer generelt grunnlag.
 * Hooken tar inn en triggerverdi, og når denne endrer seg animeres høyden på elementet dersom den har endret seg.
 * @param trigger verdien som brukes til å trigge animasjonen. Dersom denne endrer seg animeres høyden på elementet.
 * @param options konfigurasjon for animasjonen, og lyttere for når animasjonen starter og slutter
 * @returns en referanse til elementet som skal animeres
 */
export function useAutoAnimatedHeight<T extends HTMLElement = HTMLElement>(
    trigger: any,
    options?: UseAutoAnimatedHeightOptions<T>,
) {
    const previousTriggerValue = usePreviousValue(trigger);
    const [previousHeight, setPreviousHeight] = useState(0);

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
                options?.onTransitionEnd?.(elementRef);
            }
        },
        [options],
    );

    const animateElement = useCallback(() => {
        const element = elementRef.current;

        if (!element) return;

        element.removeAttribute("style");
        const newHeight = element.scrollHeight;

        raf1.current = requestAnimationFrame(() => {
            // Sett høyde tilbake til forrige høyde
            element.style.removeProperty("transition");
            element.style.setProperty("height", `${previousHeight}px`);
            element.style.setProperty("overflow-y", "hidden");

            raf2.current = requestAnimationFrame(() => {
                // Sett høyde til kollapset høyde og start transition
                element.style.setProperty("transition", transition);
                element.style.setProperty("height", `${newHeight}px`);
            });
        });

        setPreviousHeight(newHeight);
    }, [transition, previousHeight]);

    const runAnimation = useCallback(() => {
        const element = elementRef.current;

        if (!element) return;

        if (previousTriggerValue === undefined) {
            // Første render
            setPreviousHeight(element.scrollHeight);
            return;
        }

        if (trigger === previousTriggerValue) {
            // Ingen endring
            return;
        }

        options?.onTransitionStart?.(elementRef);

        if (prefersReducedMotion) {
            options?.onTransitionEnd?.(elementRef); // make sure to call callback when animation is off
            return;
        }

        animateElement();
    }, [animateElement, trigger, previousTriggerValue, options, prefersReducedMotion]);

    useEffect(() => {
        runAnimation();
    }, [trigger, runAnimation]);

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
    }, [handleTransitionEnd]);

    useEffect(() => {
        const r1 = raf1.current;
        const r2 = raf2.current;
        return () => {
            r1 && cancelAnimationFrame(r1);
            r2 && cancelAnimationFrame(r2);
        };
    }, [raf1, raf2]);

    return elementRef;
}
