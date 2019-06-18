import React from "react";
import { GridElementProps } from "./internal/types";
import { getColumnsByScreenSize } from "./internal/getColumnsByScreenSize";

export const GridElement = ({ children, columnSpan, className = "" }: GridElementProps) => {
    const columnClass =
        typeof columnSpan === "number" ? `jkl-grid__element--${columnSpan}` : getColumnsByScreenSize(columnSpan);
    return <div className={`${columnClass} ${className}`}>{children}</div>;
};
