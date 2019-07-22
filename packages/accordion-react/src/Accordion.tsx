import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export function Accordion({ children, className = "" }: Props) {
    return (
        <div data-testid="jkl-accordion" className={`jkl-accordion ${className}`}>
            {children}
        </div>
    );
}
