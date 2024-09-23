import { type RefObject, useCallback, useEffect, useRef } from "react";
import { tokens } from "../../core";
import { useBrowserPreferences } from "../useBrowserPreferences/useBrowserPreferences";
import { usePreviousValue } from "../usePreviousValue/usePreviousValue";
import { UseAnimatedHeightOptions } from "./types";

const defaultDisplay = "block";
const defaultEasing = "standard";
const defaultTiming = "productive";

/**
 * Lar deg animere et element opp til sin maksimale høyde, eller ned til 0.
 *
 * @param isOpen Om elementet er åpent eller lukket.
 * @param options Konfigurer display-property, easing og timing, og eventuelle callbacks for life cycle til animasjonen.
 * @returns Ref til elementet som skal animeres, og en funksjon for å trigge animasjonen manuelt.
 */
export function useAnimatedHeight<T extends HTMLElement>(
    isOpen: boolean,
    options?: UseAnimatedHeightOptions<T>,
): [RefObject<T>, () => void] {
    const wasOpen = usePreviousValue(isOpen);
    const easing = options?.easing || defaultEasing;
    const timing = options?.timing || defaultTiming;
    const display = options?.display || defaultDisplay;
    const transition = `${tokens.motion.timing[timing]} height ${tokens.motion.easing[easing]}`;

    const { prefersReducedMotion } = useBrowserPreferences();

    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);

    function handleTransitionEnd(event: TransitionEvent) {
        const element = elementRef.current;

        // Ignore bubbling transitions from within container
        if (element && event.target === element) {
            if (isOpen) {
                element.removeAttribute("style");
            } else {
                element.removeAttribute("style");
                element.style.display = "none";
            }
            options?.onTransitionEnd?.(isOpen, elementRef);
        }
    }

    const runAnimation = useCallback(() => {
        const element = elementRef.current;

        // Ikke kjør animasjonen hvis elementet ikke er rendret,
        // eller hvis det er første render.
        if (!element || wasOpen === undefined) {
            return;
        }

        if (!isOpen) {
            element.style.display = "none";
            if (!wasOpen) {
                // Første render eller rerender med isOpen false
                return;
            }
        } else if (isOpen && wasOpen) {
            // Re-render etter å ha vært lukket, men forblitt åpen.
            return;
        }

        options?.onTransitionStart?.(isOpen, elementRef);

        if (prefersReducedMotion) {
            element.removeAttribute("style");
            if (isOpen) {
                options?.onFirstVisible?.(isOpen, elementRef);
            }
            options?.onTransitionEnd?.(isOpen, elementRef); // make sure to call callback when animation is off
            return;
        }

        element.style.transition = transition;
        element.style.display = display;
        element.style.overflow = "hidden";

        if (isOpen) {
            options?.onFirstVisible?.(isOpen, elementRef);
            element.style.height = "0";
            element.style.height = `${element.scrollHeight}px`;
        } else {
            // If the scrollHeight is 0 it means that we are transitioning from height 0 -> 0.
            // This causes the "transitionend"-event to never fire and the element gets stuck with
            // style: height: 0; display: block; overflow:hidden
            if (element.scrollHeight === 0) {
                element.removeAttribute("style");
                return;
            }

            element.style.height = `${element.scrollHeight}px`;

            raf1.current = requestAnimationFrame(() => {
                raf2.current = requestAnimationFrame(() => {
                    element.style.height = `${0}px`;
                });
            });
        }
    }, [isOpen, options, wasOpen, transition, prefersReducedMotion, display]);

    useEffect(() => {
        runAnimation();
    }, [isOpen, runAnimation]);

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
    }, [isOpen]);

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
