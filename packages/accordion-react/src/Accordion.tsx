import React, { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

export const Accordion = ({ children }: Props) => <div className="jkl-accordion">{children}</div>;

interface ItemProps {
    children: ReactNode;
    title: string;
}

export const AccordionItem = ({ children, title }: ItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    let openClassName = isOpen ? "jkl-accordion__item--expanded" : "";
    return (
        <div className={`jkl-accordion__item ${openClassName}`} role="article" aria-expanded={isOpen}>
            <button className="jkl-accordion__item-title" onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
                <div className="jkl-accordion__item-title-text">{title}</div>
                <div className="jkl-accordion__item-title-icon" />
            </button>
            <div className="jkl-accordion__item-content">{children}</div>
        </div>
    );
};
