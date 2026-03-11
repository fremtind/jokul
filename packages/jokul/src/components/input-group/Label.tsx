import clsx from "clsx";
import React, { type FC } from "react";
import type { LabelProps } from "./types.js";

export const Label: FC<LabelProps> = ({
    children,
    className = "",
    srOnly = false,
    htmlFor,
    ...rest
}: LabelProps) => {
    const labelClassNames = clsx("jkl-label", className, {
        "jkl-sr-only": srOnly,
    });

    return (
        <label {...rest} className={labelClassNames} htmlFor={htmlFor}>
            {children}
        </label>
    );
};
