import React, { ReactNode, useState } from "react";
import chevron from "../../accordion/chevron.svg";

interface Props {
    children: ReactNode;
}

export const Accordion = ({ children }: Props) => (
    <div className="jkl-accordion" style={{ width: 700 }}>
        {children}
    </div>
);

interface ItemProps {
    children: ReactNode;
    title: string;
}

export const AccordionItem = ({ children, title }: ItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    let openClassName = isOpen ? "jkl-accordion__item--expanded" : "";
    return (
        <div className={`jkl-accordion__item ${openClassName}`} onClick={() => setIsOpen(!isOpen)} role="article">
            <div className="jkl-accordion__item-title" tabIndex={0}>
                <div className="jkl-accordion__item-title-text">{title}</div>
                <img className="jkl-accordion__item-title-icon" src={chevron} alt="TODO Tekst" />
            </div>
            <div className="jkl-accordion__item-content">{children}</div>
        </div>
    );
};