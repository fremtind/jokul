import { Density } from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonInputProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export const SkeletonInput = ({
    className,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonInputProps) => {
    const compact = density === "compact";
    return (
        <div className={cn("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement
                width={compact ? 301 : 316}
                height={compact ? 32 : 48}
                {...inputProps}
            />
        </div>
    );
};
