import cn from "classnames";
import React, { HTMLProps, ReactNode } from "react";

export interface SkeletonTableProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    forceCompact?: boolean;
    width?: number;
}

export const SkeletonTable = ({ className, forceCompact, width, style, ...rest }: SkeletonTableProps) => {
    return (
        <div
            className={cn("jkl-skeleton-table", className, {
                "jkl-skeleton-table--compact": forceCompact,
            })}
            style={{ width, ...style }}
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
