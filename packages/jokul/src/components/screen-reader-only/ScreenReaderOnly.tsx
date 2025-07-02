import React, { type FC } from "react";
import type { ScreenReaderOnlyProps } from "./types.js";

export const ScreenReaderOnly: FC<ScreenReaderOnlyProps> = ({
    children,
    showOnFocus,
    ...rest
}) => (
    <span
        {...rest}
        className={`jkl-sr-only${showOnFocus ? " jkl-sr-only--focusable" : ""}`}
    >
        {children}
    </span>
);
