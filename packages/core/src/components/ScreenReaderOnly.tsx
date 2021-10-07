import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    showOnFocus?: boolean;
}

export const ScreenReaderOnly: FC<Props> = ({ children, showOnFocus }) => (
    <span className={`jkl-sr-only ${showOnFocus ? "jkl-sr-only--focusable" : ""}`}>{children}</span>
);

export default ScreenReaderOnly;
