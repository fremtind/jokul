import { MutableRefObject, useEffect, useRef, RefObject, useCallback, useLayoutEffect } from "react";
import { useReducedMotion } from "./useReducedMotion/useReducedMotion";

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

interface Options {
    onTransitionStart?: (isOpening: boolean) => void;
    onTransitionEnd?: (isOpen: boolean) => void;
}

export function useAnimatedHeight<T extends HTMLElement>(
    isOpen: boolean,
    options?: Options,
): [RefObject<T>, () => void] {
    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);
    const firstRender = useRef<boolean>(true);
    const prefersReducedMotion = useReducedMotion();

    function handleTransitionEnd(event: TransitionEvent) {
        const element = getElement(elementRef);

        // Ignore bubbling transitions from within container
        if (element && event.target === element) {
            element.removeAttribute("style");
            options?.onTransitionEnd?.(isOpen);
        }
    }

    const runAnimation = useCallback(() => {
        if (firstRender.current) {
            return; // Do not play animation on first render
        }

        options?.onTransitionStart?.(isOpen);

        if (prefersReducedMotion) {
            options?.onTransitionEnd?.(isOpen); // make sure to call callback when animation is off
            return;
        }

        const element = getElement(elementRef);
        if (element) {
            element.style.display = "block";
            element.style.overflow = "hidden";
            if (isOpen) {
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
        }
    }, [isOpen, options, prefersReducedMotion]);

    useLayoutEffect(() => {
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
        firstRender.current = false;
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
