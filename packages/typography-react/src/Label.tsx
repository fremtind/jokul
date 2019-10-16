import React, { ReactNode } from "react";
import { LabelVariant } from "@fremtind/jkl-core";

interface Props {
    variant?: LabelVariant;
    forceCompact?: boolean;
    children: ReactNode;
}

export function Label({ variant = "medium", forceCompact, children }: Props) {
    const className = "jkl-label".concat(
        variant ? ` jkl-label--${variant}` : "",
        forceCompact ? ` jkl-label--compact` : "",
    );
    return <span className={className}>{children}</span>;
}
