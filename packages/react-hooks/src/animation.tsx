import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState, RefObject, useCallback } from "react";

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

export function useAnimatedHeight<T extends HTMLElement>(isOpen: boolean): [RefObject<T>, () => void] {
    const raf1 = useRef<number>();
    const raf2 = useRef<number>();
    const elementRef = useRef<T>(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    function heightTransitioned() {
        const element = getElement(elementRef);
        if (element) {
            element.removeAttribute("style");
        }
    }

    const runAnimation = useCallback(() => {
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
        if (!isFirstRender) {
            runAnimation();
        }
    }, [isOpen, isFirstRender, runAnimation]);

    useEffect(() => {
        const element = getElement(elementRef);
        if (element) {
            element.addEventListener("transitionend", heightTransitioned);
        }

        return () => {
            if (element) {
                element.removeEventListener("transitionend", heightTransitioned);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        const r1 = raf1.current;
        const r2 = raf2.current;
        setIsFirstRender(false);
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
