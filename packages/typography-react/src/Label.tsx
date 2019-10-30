import React, { ReactNode } from "react";
import { LabelVariant } from "@fremtind/jkl-core";

interface Props {
    variant?: LabelVariant;
    forceCompact?: boolean;
    srOnly?: boolean;
    children: ReactNode;
}

export function Label({ variant = "medium", forceCompact, srOnly, children }: Props) {
    const className = "jkl-label".concat(
        variant ? ` jkl-label--${variant}` : "",
        forceCompact ? ` jkl-label--compact` : "",
        srOnly ? ` jkl-label--sr-only` : "",
    );
    return <span className={className}>{children}</span>;
}
