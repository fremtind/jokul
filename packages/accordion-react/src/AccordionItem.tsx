import React, { ReactNode, useState } from "react";
/* There are no types for core-toggle, so we have to use ts-ignore
Hopefully someone (us?) will write types for it sometime soon */
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";

interface Props {
    title: string;
    children: ReactNode;
    startExpanded?: boolean;
}

export function AccordionItem({ children, title, startExpanded = false }: Props) {
    const [isOpen, setIsOpen] = useState(startExpanded);
    const openClassName = isOpen ? " jkl-accordion-item--expanded" : "";
    const onToggle = () => setIsOpen(!isOpen);
    return (
        <div className={`jkl-accordion-item${openClassName}`}>
            <button className="jkl-accordion-item__title" type="button">
                <div className="jkl-accordion-item__title-text">{title}</div>
                <div className="jkl-accordion-item__title-icon" />
            </button>
            <CoreToggle className="jkl-accordion-item__content-wrapper" hidden={!isOpen} onToggle={onToggle}>
                <div className="jkl-accordion-item__content">{children}</div>
            </CoreToggle>
        </div>
    );
}
