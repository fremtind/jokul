import { easings, type Easing, timings, type Timing } from "@fremtind/jkl-core";
import { useBrowserPreferences, usePreviousValue } from "@fremtind/jkl-react-hooks";
import { type MutableRefObject, useEffect, useRef, type RefObject, useCallback } from "react";

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

export interface UseAnimatedHeightOptions<T extends HTMLElement = HTMLElement> {
    /**
     * Overstyr standard easingfunksjon
     * @default "standard"
     */
    easing?: Easing;
    /**
     * Overstyr standard timing
     * @default "productive"
     */
    timing?: Timing;
    onTransitionStart?: (isOpening: boolean, ref: RefObject<T>) => void;
    /**
     * Kalles rett etter at elementet har fått display: block; i stedet for hidden;
     * Nyttig om du må flytte fokus inn i elementet og ikke vil vente til animasjonen er ferdig.
     * Her er ikke innholdet _visuelt_ synlig ennå, men det er "synlig" for DOM i den
     * forstand at det _ikke_ er display: hidden;
     *
     * `isOpen` er alltid `true`. Det sendes som første parameter for å ha lik funksjonssignatur som `onTransitionEnd`.
     */
    onFirstVisible?: (isOpen: boolean, ref: RefObject<T>) => void;
    onTransitionEnd?: (isOpen: boolean, ref: RefObject<T>) => void;
}

const defaultEasing = "standard";
const defaultTiming = "productive";

export function useAnimatedHeight<T extends HTMLElement>(
    isOpen: boolean,
    options?: UseAnimatedHeightOptions<T>,
): [RefObject<T>, () => void] {
    const wasOpen = usePreviousValue(isOpen);
    const easing = options?.easing || defaultEasing;
    const timing = options?.timing || defaultTiming;
    const transition = `${timings[timing]} height ${easings[easing]}`;

    const { prefersReducedMotion } = useBrowserPreferences();

    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);

    const collapseElement = useCallback(() => {
        const element = getElement(elementRef);

        if (!element) return;

        const expandedHeight = element.scrollHeight;

        raf1.current = requestAnimationFrame(() => {
            // Hent kollapset høyde
            element.style.removeProperty("transition");
            element.dataset["collapsed"] = "true";
            const collapsedHeight = element.getBoundingClientRect().height;
            element.dataset["collapsed"] = "false";

            // Sett høyde til utvidet høyde og start transition
            element.style.setProperty("height", `${expandedHeight}px`);
            element.style.setProperty("transition", transition);

            raf2.current = requestAnimationFrame(() => {
                // Sett høyde til kollapset høyde
                element.style.setProperty("height", `${collapsedHeight}px`);
                element.dataset["collapsed"] = "true";
            });
        });
    }, [transition]);

    const expandElement = useCallback(() => {
        const element = getElement(elementRef);

        if (!element) return;

        const expandedHeight = element.scrollHeight;

        raf1.current = requestAnimationFrame(() => {
            // Hent kollapset høyde
            element.style.removeProperty("transition");
            element.dataset["collapsed"] = "true";
            const collapsedHeight = element.getBoundingClientRect().height;

            // Sett høyde til kollapset høyde og start transition
            element.style.setProperty("height", `${collapsedHeight}px`);
            element.style.setProperty("transition", transition);

            raf2.current = requestAnimationFrame(() => {
                // Sett høyde til utvidet høyde
                element.style.setProperty("height", `${expandedHeight}px`);
                element.dataset["collapsed"] = "false";
            });
        });
    }, [transition]);

    function handleTransitionEnd(event: TransitionEvent) {
        const element = getElement(elementRef);

        // Ignore bubbling transitions from within container
        if (element && event.target === element) {
            element.removeAttribute("style");
            options?.onTransitionEnd?.(isOpen, elementRef);
        }
    }

    const runAnimation = useCallback(() => {
        const element = getElement(elementRef);
        if (!element) {
            return;
        }

        if (!isOpen) {
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
                element.dataset["collapsed"] = "false";
            } else {
                element.dataset["collapsed"] = "true";
            }
            options?.onTransitionEnd?.(isOpen, elementRef); // make sure to call callback when animation is off
            return;
        }

        if (isOpen) {
            options?.onFirstVisible?.(isOpen, elementRef);

            expandElement();
        } else {
            // If the scrollHeight is 0 it means that we are transitioning from height 0 -> 0.
            // This causes the "transitionend"-event to never fire and the element gets stuck with
            // style: height: 0; display: block; overflow:hidden
            if (element.scrollHeight === 0) {
                element.removeAttribute("style");
                return;
            }

            collapseElement();
        }
    }, [isOpen, options, wasOpen, prefersReducedMotion, collapseElement, expandElement]);

    useEffect(() => {
        runAnimation();
    }, [isOpen, runAnimation]);

    useEffect(() => {
        const element = getElement(elementRef);
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

function getElement(elementRef: MutableRefObject<HTMLElementOrCoreToggleElement<HTMLElement> | null>) {
    // Workaround to handle custom elements from NRK Core components until this lands:
    // https://github.com/nrkno/custom-element-to-react/pull/17
    return elementRef.current && (elementRef.current.el || elementRef.current);
}
