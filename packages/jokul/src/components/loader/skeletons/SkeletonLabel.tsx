import React from "react";
import { Density } from "../../../core/types.js";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement.js";

export interface SkeletonLabelProps extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    density?: Density;
}

export const SkeletonLabel = ({ density, ...rest }: SkeletonLabelProps) => {
    const compact = density === "compact";
    return <SkeletonElement {...rest} width={compact ? 100 : 115} height={compact ? 12 : 16} />;
};
