import { Density } from "@fremtind/jkl-core";
import React, { HTMLProps, ReactNode } from "react";
export interface SkeletonTableProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    density?: Density;
    width?: number | string;
}
export declare const SkeletonTable: ({
    className,
    density,
    width,
    style,
    ...rest
}: SkeletonTableProps) => React.JSX.Element;
export interface SkeletonTableHeaderProps {
    className?: string;
    children: ReactNode;
}
export declare const SkeletonTableHeader: ({ className, ...rest }: SkeletonTableHeaderProps) => React.JSX.Element;
export interface SkeletonTableRowProps {
    className?: string;
    children: ReactNode;
}
export declare const SkeletonTableRow: ({ className, ...rest }: SkeletonTableRowProps) => React.JSX.Element;
