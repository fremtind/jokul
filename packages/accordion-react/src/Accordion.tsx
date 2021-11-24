import React, { FC } from "react";

export interface AccordionProps {
    /** @deprecated */
    inverted?: boolean;
    className?: string;
}

export const Accordion: FC<AccordionProps> = ({ children, inverted, className = "" }) => {
    return (
        <div
            data-testid="jkl-accordion"
            className={`jkl-accordion ${inverted ? "jkl-accordion--inverted" : ""} ${className}`}
        >
            {children}
        </div>
    );
};
