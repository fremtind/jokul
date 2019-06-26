import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Accordion({ children }: Props) {
    return <div className="jkl-accordion">{children}</div>;
}
