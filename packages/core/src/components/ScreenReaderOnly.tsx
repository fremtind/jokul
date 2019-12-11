import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    showOnFocus?: boolean;
}

export const ScreenReaderOnly = ({ children, showOnFocus }: Props) => (
    <span className={`jkl-sr-only ${showOnFocus ? "jkl-sr-only--focusable" : ""}`}>{children}</span>
);

export default ScreenReaderOnly;
