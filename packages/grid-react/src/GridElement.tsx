import React, { ReactNode } from "react";
import { getColumnsByScreenSize } from "./getColumnsByScreenSize";

export interface ColumnType {
    small?: number;
    medium?: number;
    large?: number;
}

interface Props {
    children?: ReactNode;
    className?: string;
    columnSpan: number | ColumnType;
}

export const GridElement = ({ children, columnSpan, className = "" }: Props) => {
    const columnClass =
        typeof columnSpan === "number" ? `jkl-grid__element--${columnSpan}` : getColumnsByScreenSize(columnSpan);
    return <div className={`${columnClass} ${className}`}>{children}</div>;
};
