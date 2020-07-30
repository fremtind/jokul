import React from "react";

interface Props {
    inverted?: boolean;
    className?: string;
}

export const Accordion: React.FC<Props> = ({ children, inverted, className = "" }) => {
    return (
        <div
            data-testid="jkl-accordion"
            className={`jkl-accordion ${inverted ? "jkl-accordion--inverted" : ""} ${className}`}
        >
            {children}
        </div>
    );
};
