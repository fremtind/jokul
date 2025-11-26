import clsx from "clsx";
import React from "react";
import type { SkeletonTextAreaProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel } from "./SkeletonLabel.js";

export const SkeletonTextArea = ({
    className,
    labelProps,
    inputProps,
    ...rest
}: SkeletonTextAreaProps) => {
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel {...labelProps} />
            <SkeletonElement
                width="calc(var(--jkl-unit-210) * 1.88)"
                height="var(--jkl-unit-210)"
                {...inputProps}
            />
        </div>
    );
};
