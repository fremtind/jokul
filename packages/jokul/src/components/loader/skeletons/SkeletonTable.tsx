import clsx from "clsx";
import React, { HTMLProps, ReactNode } from "react";
import { Density } from "../../../core/types.js";

export interface SkeletonTableProps
    extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    density?: Density;
    width?: number | string;
}

export const SkeletonTable = ({
    className,
    density,
    width,
    style,
    ...rest
}: SkeletonTableProps) => {
    return (
        <div
            className={clsx("jkl-skeleton-table", className)}
            style={{ width, ...style }}
            {...rest}
            data-density={density}
        />
    );
};

export interface SkeletonTableHeaderProps {
    className?: string;
    children: ReactNode;
}

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

export interface SkeletonTableRowProps {
    className?: string;
    children: ReactNode;
}

export const SkeletonTableRow = ({
    className,
    ...rest
}: SkeletonTableRowProps) => {
    return (
        <div className={clsx("jkl-skeleton-table__row", className)} {...rest} />
    );
};
