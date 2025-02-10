import { ReactNode } from "react";

export interface SummaryTableProps {
    className?: string;
    caption?: string;
    header: [string, string];
    body: ReactNode;
    footer?: ReactNode;
}

export interface SummaryTableRowProps {
    className?: string;
    header: string | ReactNode;
    content: string | ReactNode;
}
