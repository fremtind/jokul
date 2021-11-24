import React, { FC, ReactNode } from "react";

export interface ScreenReaderOnlyProps {
    children: ReactNode;
    showOnFocus?: boolean;
}

export const ScreenReaderOnly: FC<ScreenReaderOnlyProps> = ({ children, showOnFocus }) => (
    <span className={`jkl-sr-only ${showOnFocus ? "jkl-sr-only--focusable" : ""}`}>{children}</span>
);

export default ScreenReaderOnly;
