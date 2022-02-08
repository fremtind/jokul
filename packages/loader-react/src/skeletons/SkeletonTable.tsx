import React, { ReactNode } from "react";
import cn from "classnames";

export interface SkeletonTableProps {
    className?: string;
    children: ReactNode;
    forceCompact?: boolean;
}

export const SkeletonTable = ({ className, forceCompact, ...rest }: SkeletonTableProps) => {
    return (
        <div
            className={cn("jkl-skeleton-table", className, {
                "jkl-skeleton-table--compact": forceCompact,
            })}
            {...rest}
        />
    );
};

export interface SkeletonTableHeaderProps {
    className?: string;
    children: ReactNode;
}

export const SkeletonTableHeader = ({ className, ...rest }: SkeletonTableHeaderProps) => {
    return <div className={cn("jkl-skeleton-table__header", className)} {...rest} />;
};

export interface SkeletonTableRowProps {
    className?: string;
    children: ReactNode;
}

export const SkeletonTableRow = ({ className, ...rest }: SkeletonTableRowProps) => {
    return <div className={cn("jkl-skeleton-table__row", className)} {...rest} />;
};
