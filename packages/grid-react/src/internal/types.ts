import { ReactNode } from "react";

export interface ColumnType {
    small?: number;
    medium?: number;
    large?: number;
}

export interface GridProps {
    children?: ReactNode;
    className?: string;
}

export interface GridElementProps extends GridProps {
    columnSpan: number | ColumnType;
}
