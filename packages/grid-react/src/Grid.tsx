import React, { ReactNode } from "react";

export interface Props {
    children: ReactNode;
    className?: string;
}

export const Grid = ({ children, className = "" }: Props) => (
    <div className={`jkl-grid__container ${className}`}>{children}</div>
);
