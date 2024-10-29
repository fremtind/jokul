import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonLabelProps
    extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    density?: Density;
}

export const SkeletonLabel = ({ density, ...rest }: SkeletonLabelProps) => {
    const compact = density === "compact";
    return (
        <SkeletonElement
            {...rest}
            width={compact ? 100 : 115}
            height={compact ? 12 : 16}
        />
    );
};
