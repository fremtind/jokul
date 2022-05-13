import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, "height"> {
    forceCompact?: boolean;
}

export const SkeletonButton = ({ style, forceCompact, ...rest }: SkeletonButtonProps) => {
    return <SkeletonElement {...rest} height={forceCompact ? 36 : 40} style={{ borderRadius: "999px", ...style }} />;
};
