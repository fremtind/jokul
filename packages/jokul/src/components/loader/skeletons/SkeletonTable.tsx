import clsx from "clsx";
import React from "react";
import type {
    SkeletonTableHeaderProps,
    SkeletonTableProps,
    SkeletonTableRowProps,
} from "../types.js";

export const SkeletonTable = ({
    className,
    width,
    style,
    ...rest
}: SkeletonTableProps) => {
    return (
        <div
            className={clsx("jkl-skeleton-table", className)}
            style={{ width, ...style }}
            {...rest}
        />
    );
};

export const SkeletonTableHeader = ({
    className,
    ...rest
}: SkeletonTableHeaderProps) => {
    return (
        <div
            className={clsx("jkl-skeleton-table__header", className)}
            {...rest}
        />
    );
};

export const SkeletonTableRow = ({
    className,
    ...rest
}: SkeletonTableRowProps) => {
    return (
        <div className={clsx("jkl-skeleton-table__row", className)} {...rest} />
    );
};
