import { MutableRefObject, useEffect, useRef, RefObject, useCallback, useLayoutEffect } from "react";

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

export function useAnimatedHeight<T extends HTMLElement>(isOpen: boolean): [RefObject<T>, () => void] {
    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);
    const firstRender = useRef<boolean>(true);

    function handleTransitionEnd() {
        const element = getElement(elementRef);
        if (element) {
            element.removeAttribute("style");
        }
    }

    const runAnimation = useCallback(() => {
        if (firstRender.current) {
            return; // Do not play animation on first render
        }
        const element = getElement(elementRef);
        if (element) {
            element.style.display = "block";
            element.style.overflow = "hidden";
            if (isOpen) {
                element.style.height = "0";
                element.style.height = `${element.scrollHeight}px`;
            } else {
                element.style.height = `${element.scrollHeight}px`;

                raf1.current = requestAnimationFrame(() => {
                    raf2.current = requestAnimationFrame(() => {
                        element.style.height = `${0}px`;
                    });
                });
            }
        }
    }, [isOpen]);

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
