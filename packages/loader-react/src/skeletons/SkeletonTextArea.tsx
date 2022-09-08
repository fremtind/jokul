import { Density } from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonTextAreaProps {
    className?: string;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    density?: Density;
}

export const SkeletonTextArea = ({ className, density, labelProps, inputProps, ...rest }: SkeletonTextAreaProps) => {
    const compact = density === "compact";
    return (
        <div className={cn("jkl-skeleton-input", className)} {...rest} data-density={density}>
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement width={compact ? 301 : 316} height={compact ? 148 : 168} {...inputProps} />
        </div>
    );
};
