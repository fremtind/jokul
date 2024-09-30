import React, { FC, ReactNode } from "react";

export interface SummaryTableRowProps {
    className?: string;
    header: string | ReactNode;
    content: string | ReactNode;
}

export const SummaryTableRow: FC<SummaryTableRowProps> = ({ className, header, content, ...rest }) => {
    return (
        <tr {...rest} className={className}>
            <th scope="row">{header}</th>
            <td>{content}</td>
        </tr>
    );
};
