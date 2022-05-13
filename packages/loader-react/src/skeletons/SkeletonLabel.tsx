import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonLabelProps extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    forceCompact?: boolean;
}

export const SkeletonLabel = ({ forceCompact, ...rest }: SkeletonLabelProps) => {
    return <SkeletonElement {...rest} width={forceCompact ? 100 : 115} height={forceCompact ? 12 : 16} />;
};
