import React, { ReactNode } from "react";
import { LabelVariant } from "@fremtind/jkl-core";

interface Props {
    variant?: LabelVariant;
    forceCompact?: boolean;
    srOnly?: boolean;
    children: ReactNode;
    standAlone?: boolean;
    htmlFor?: string;
}

export function Label({ variant = "medium", forceCompact, srOnly, children, standAlone, htmlFor }: Props) {
    const className = "jkl-label".concat(
        variant ? ` jkl-label--${variant}` : "",
        forceCompact ? ` jkl-label--compact` : "",
        srOnly ? ` jkl-label--sr-only` : "",
    );
    const C = standAlone ? "span" : "label";

    if (!standAlone && htmlFor) {
        htmlFor = undefined;
        if (process.env.NODE_ENV !== "production") {
            console.warn(
                "WARNING: htmlFor has been set to undefined since standAlone was undefined. To use htmlFor, set standAlone to true.",
            );
        }
    }

    return (
        <C className={className} htmlFor={htmlFor}>
            {children}
        </C>
    );
}
