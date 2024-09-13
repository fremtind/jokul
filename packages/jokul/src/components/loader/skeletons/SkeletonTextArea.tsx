import clsx from "clsx";
import React from "react";
import { Density } from "../../../core";
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
        <div className={clsx("jkl-skeleton-input", className)} {...rest} data-density={density}>
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement width={compact ? 301 : 316} height={compact ? 148 : 168} {...inputProps} />
        </div>
    );
};
