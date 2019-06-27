import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    nested?: boolean;
}

export const Li = ({ children, nested }: Props) => (
    <li className={`jkl-bullet-list__item${nested ? "--nested" : ""}`}>{children}</li>
);
