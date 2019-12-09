import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    focusableOnly?: boolean;
}

export const ScreenReaderOnly = ({ children, focusableOnly }: Props) => (
    <span className={`jkl-sr-only ${focusableOnly ? "jkl-sr-only--focusable" : ""}`}>{children}</span>
);

export default ScreenReaderOnly;
