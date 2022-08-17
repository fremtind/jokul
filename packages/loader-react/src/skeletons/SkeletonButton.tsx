import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, "height"> {
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
}

export const SkeletonButton = ({ style, compact, ...rest }: SkeletonButtonProps) => {
    return <SkeletonElement {...rest} height={compact ? 24 : 40} style={{ borderRadius: "999px", ...style }} />;
};
