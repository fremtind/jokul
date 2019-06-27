import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Accordion({ children }: Props) {
    return (
        <div data-testid="jkl-accordion" className="jkl-accordion">
            {children}
        </div>
    );
}
