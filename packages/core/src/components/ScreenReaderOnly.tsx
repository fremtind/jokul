import React, { FC } from "react";
import type { WithChildren } from "../types";

export interface ScreenReaderOnlyProps extends WithChildren {
    showOnFocus?: boolean;
}

export const ScreenReaderOnly: FC<ScreenReaderOnlyProps> = ({ children, showOnFocus, ...rest }) => (
    <span {...rest} className={`jkl-sr-only${showOnFocus ? " jkl-sr-only--focusable" : ""}`}>
        {children}
    </span>
);

export default ScreenReaderOnly;
