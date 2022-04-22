import React, { FC } from "react";
import { WithChildren } from "../types";

export interface ScreenReaderOnlyProps extends WithChildren {
    showOnFocus?: boolean;
}

export const ScreenReaderOnly: FC<ScreenReaderOnlyProps> = ({ children, showOnFocus }) => (
    <span className={`jkl-sr-only ${showOnFocus ? "jkl-sr-only--focusable" : ""}`}>{children}</span>
);

export default ScreenReaderOnly;
