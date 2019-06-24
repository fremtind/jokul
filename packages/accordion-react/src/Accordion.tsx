import React, { ReactNode, useState } from "react";
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";

interface Props {
    children: ReactNode;
}

export function Accordion({ children }: Props) {
    return <div className="jkl-accordion">{children}</div>;
}

interface ItemProps {
    title: string;
    children: ReactNode;
    startExpanded?: boolean;
}

export function AccordionItem({ children, title, startExpanded = false }: ItemProps) {
    const [isOpen, setIsOpen] = useState(startExpanded);
    const openClassName = isOpen ? " jkl-accordion-item--expanded" : "";
    return (
        <div className={`jkl-accordion-item${openClassName}`}>
            <button className="jkl-accordion-item__title">
                <div className="jkl-accordion-item__title-text">{title}</div>
                <div className="jkl-accordion-item__title-icon" />
            </button>
            <CoreToggle hidden onToggle={() => setIsOpen(!isOpen)}>
                <div className="jkl-accordion-item__content">{children}</div>
            </CoreToggle>
        </div>
    );
}
