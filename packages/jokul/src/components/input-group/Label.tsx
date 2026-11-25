import clsx from "clsx";
import React, { type FC } from "react";
import type { LabelProps } from "./types.js";

export const Label: FC<LabelProps> = ({
    variant = "small",
    srOnly,
    pageHeading,
    children,
    standAlone,
    htmlFor,
    className = "",
    ...rest
}) => {
    const labelClassNames = clsx("jkl-label", className, {
        [`jkl-label--${variant}`]: variant && !pageHeading,
        "jkl-label--sr-only": srOnly && !pageHeading,
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

    const label = (
        <C {...rest} className={labelClassNames} htmlFor={htmlFor}>
            {children}
        </C>
    );

    if (pageHeading) {
        return <h1 className="jkl-label-heading">{label}</h1>;
    }

    return label;
};
