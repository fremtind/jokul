import React, { FC } from "react";
import { SummaryTableRowProps } from "./types.js";

export const SummaryTableRow: FC<SummaryTableRowProps> = ({
    className,
    header,
    content,
    ...rest
}) => {
    return (
        <tr {...rest} className={className}>
            <th scope="row">{header}</th>
            <td>{content}</td>
        </tr>
    );
};
