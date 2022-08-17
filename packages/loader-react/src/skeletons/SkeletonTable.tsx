import cn from "classnames";
import React, { HTMLProps, ReactNode } from "react";

export interface SkeletonTableProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
    width?: number;
}

export const SkeletonTable = ({ className, compact, width, style, ...rest }: SkeletonTableProps) => {
    return (
        <div
            className={cn("jkl-skeleton-table", className, {
                "jkl-skeleton-table--compact": compact,
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
