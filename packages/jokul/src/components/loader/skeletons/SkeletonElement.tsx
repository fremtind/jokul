import clsx from "clsx";
import React from "react";
import { SkeletonElementProps } from "../types.js";

export const SkeletonElement = ({
    shape = "rect",
    width,
    height,
    style,
    className,
    ...rest
}: SkeletonElementProps) => {
    return (
        <div
            className={clsx(
                "jkl-skeleton-element",
                `jkl-skeleton-element--${shape}`,
                className,
            )}
            style={{ width, height, ...style }}
            {...rest}
        />
    );
};
