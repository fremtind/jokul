import clsx from "clsx";
import React from "react";
import type { SkeletonInputProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel } from "./SkeletonLabel.js";

export const SkeletonInput = ({
    className,
    labelProps,
    inputProps,
    ...rest
}: SkeletonInputProps) => {
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel {...labelProps} />
            <SkeletonElement
                width="var(--jkl-unit-210)"
                height="var(--jkl-unit-40)"
                {...inputProps}
            />
        </div>
    );
};
