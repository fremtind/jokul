import clsx from "clsx";
import React from "react";
import type { SkeletonTextAreaProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel } from "./SkeletonLabel.js";

export const SkeletonTextArea = ({
    className,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonTextAreaProps) => {
    const compact = density === "compact";
    return (
        <div
            className={clsx("jkl-skeleton-input", className)}
            {...rest}
            data-density={density}
        >
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement
                width={compact ? 301 : 316}
                height={compact ? 148 : 168}
                {...inputProps}
            />
        </div>
    );
};
