import type { WithChildren, Density } from "@fremtind/jkl-core";
import clsx from "clsx";
import React, { type CSSProperties, type FC } from "react";

export type LabelVariant = "small" | "medium" | "large";

export interface LabelProps extends WithChildren {
    id?: string;
    variant?: LabelVariant;
    density?: Density;
    srOnly?: boolean;
    standAlone?: boolean;
    htmlFor?: string;
    className?: string;
    style?: CSSProperties;
}

export const Label: FC<LabelProps> = ({
    variant = "small",
    density,
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
        <C {...rest} className={labelClassNames} htmlFor={htmlFor} data-density={density}>
            {children}
        </C>
    );
};
