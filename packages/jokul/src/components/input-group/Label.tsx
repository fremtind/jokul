import clsx from "clsx";
import React, { type FC } from "react";
import type { LabelProps } from "./types.js";

export const Label: FC<LabelProps> = ({
    variant = "small",
    srOnly,
    children,
    standAlone,
    htmlFor,
    className = "",
    ...rest
}) => {
    const labelClassNames = clsx("jkl-label", className, {
        [`jkl-label--${variant}`]: variant,
        "jkl-label--sr-only": srOnly,
    });

    const C = standAlone ? "label" : "span";

    if (!standAlone && htmlFor) {
        htmlFor = undefined;
        if (process.env.NODE_ENV !== "production") {
            console.warn(
                "WARNING: The standard Label component renders as a <span> element, which does not take a htmlFor prop. If you want the Label to belong to a specific input, use the standAlone prop, which renders as a <label> element instead. In most cases the Label component should not be used directly, as it is part of all our input components.",
            );
        }
    }

    return (
        <C {...rest} className={labelClassNames} htmlFor={htmlFor}>
            {children}
        </C>
    );
};
