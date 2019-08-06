import { MutableRefObject, Ref, useEffect, useLayoutEffect, useRef, useState } from "react";

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

export function useAnimatedHeight<T extends HTMLElement>(isOpen: boolean): [Ref<T>, () => void] {
    let raf1: number;
    let raf2: number;
    const elementRef = useRef<T>(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    function heightTransitioned() {
        const element = getElement(elementRef);
        if (element) {
            element.removeAttribute("style");
        }
    }

    function runAnimation() {
        const element = getElement(elementRef);
        if (element) {
            element.style.display = "block";
            element.style.overflow = "hidden";
            if (isOpen) {
                element.style.height = "0";
                element.style.height = `${element.scrollHeight}px`;
            } else {
                element.style.height = `${element.scrollHeight}px`;

                raf1 = requestAnimationFrame(() => {
                    raf2 = requestAnimationFrame(() => {
                        element.style.height = `${0}px`;
                    });
                });
            }
        }
    }

    useLayoutEffect(() => {
        if (!isFirstRender) {
            runAnimation();
        }
    }, [isOpen]);

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
        setIsFirstRender(false);
        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, []);

    return [elementRef, runAnimation];
}

function getElement(elementRef: MutableRefObject<HTMLElementOrCoreToggleElement<HTMLElement> | null>) {
    // Workaround to handle custom elements from NRK Core components until this lands:
    // https://github.com/nrkno/custom-element-to-react/pull/17
    return elementRef.current && (elementRef.current.el || elementRef.current);
}
