import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonLabelProps extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
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

export const SkeletonLabel = ({ compact, forceCompact, ...rest }: SkeletonLabelProps) => {
    return (
        <SkeletonElement
            {...rest}
            width={compact || forceCompact ? 100 : 115}
            height={compact || forceCompact ? 12 : 16}
        />
    );
};
