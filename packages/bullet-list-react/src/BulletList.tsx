import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const BulletList = ({ children, className = "jkl-p" }: Props) => (
    <ul className={`jkl-bullet-list ${className}`}>{children}</ul>
);
