import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonTextAreaProps {
    className?: string;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    forceCompact?: boolean;
}

export const SkeletonTextArea = ({
    className,
    forceCompact,
    labelProps,
    inputProps,
    ...rest
}: SkeletonTextAreaProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": forceCompact,
            })}
            {...rest}
        >
            <SkeletonLabel forceCompact={forceCompact} {...labelProps} />
            <SkeletonElement width={forceCompact ? 301 : 316} height={forceCompact ? 148 : 168} {...inputProps} />
        </div>
    );
};
