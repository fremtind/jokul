import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonInputProps {
    className?: string;
    forceCompact?: boolean;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export const SkeletonInput = ({ className, forceCompact, labelProps, inputProps, ...rest }: SkeletonInputProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": forceCompact,
            })}
            {...rest}
        >
            <SkeletonLabel forceCompact={forceCompact} {...labelProps} />
            <SkeletonElement width={forceCompact ? 301 : 316} height={forceCompact ? 44 : 48} {...inputProps} />
        </div>
    );
};
