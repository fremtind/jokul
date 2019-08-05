/* There are no types for core-toggle, so we have to use ts-ignore
Hopefully someone (us?) will write types for it sometime soon */
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
    title: string;
    children: ReactNode;
    startExpanded?: boolean;
}
interface HTMLElementOrCoreToggleElement<T extends HTMLElement> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

export function AccordionItem({ children, title, startExpanded = false }: Props) {
    let raf1: number;
    let raf2: number;
    const [isOpen, setIsOpen] = useState(startExpanded);
    const openClassName = isOpen ? " jkl-accordion-item--expanded" : "";
    const elementRef = useRef<HTMLElementOrCoreToggleElement<HTMLDivElement>>(null);

    function heightTransitioned() {
        const element = getElement(elementRef);
        if (element) {
            element.removeAttribute("style");
        }
    }

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

    const onToggle = () => {
        const element = getElement(elementRef);
        if (element) {
            element.style.display = "block";
            element.style.overflow = "hidden";
            if (!isOpen) {
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

        return setIsOpen(!isOpen);
    };

    useEffect(() => {
        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, []);
    return (
        <div data-testid="jkl-accordion-item" className={`jkl-accordion-item${openClassName}`}>
            <button className="jkl-accordion-item__title" type="button">
                <div className="jkl-accordion-item__title-text">{title}</div>
                <div className="jkl-accordion-item__title-icon" />
            </button>
            <CoreToggle
                ref={elementRef}
                data-testid="jkl-accordion-item__content-wrapper"
                className="jkl-accordion-item__content-wrapper"
                hidden={!isOpen}
                onToggle={onToggle}
            >
                <div className="jkl-accordion-item__content">{children}</div>
            </CoreToggle>
        </div>
    );
}

function getElement(elementRef: MutableRefObject<HTMLElementOrCoreToggleElement<HTMLDivElement> | null>) {
    // Workaround to handle custom elements from NRK Core components until this lands:
    // https://github.com/nrkno/custom-element-to-react/pull/17
    return elementRef.current && (elementRef.current.el || elementRef.current);
}
