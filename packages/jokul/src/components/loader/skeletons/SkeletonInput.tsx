import clsx from "clsx";
import React from "react";
import { Density } from "../../../core/types.js";
import { SkeletonElementProps, SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel.js";

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
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement
                width={compact ? 301 : 316}
                height={compact ? 32 : 48}
                {...inputProps}
            />
        </div>
    );
};
