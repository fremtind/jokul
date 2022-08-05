import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, "height"> {
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
    /**
     * @default false
     * @deprecated Bruk compact
     */
    forceCompact?: boolean;
}

export const SkeletonButton = ({ style, compact, forceCompact, ...rest }: SkeletonButtonProps) => {
    return (
        <SkeletonElement
            {...rest}
            height={compact || forceCompact ? 24 : 40}
            style={{ borderRadius: "999px", ...style }}
        />
    );
};
