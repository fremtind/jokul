import React, { VFC, ReactNode } from "react";

export interface SummaryTableRowProps {
    className?: string;
    header: string | ReactNode;
    content: string | ReactNode;
}

export const SummaryTableRow: VFC<SummaryTableRowProps> = ({ className, header, content }) => {
    return (
        <tr className={className}>
            <th scope="row">{header}</th>
            <td>{content}</td>
        </tr>
    );
};
