import clsx from "clsx";
import type {
    SkeletonTableHeaderProps,
    SkeletonTableProps,
    SkeletonTableRowProps,
} from "../types.js";

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
