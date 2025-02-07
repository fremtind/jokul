import clsx from "clsx";
import React, { FC } from "react";
import { SummaryTableProps } from "./types.js";

export const SummaryTable: FC<SummaryTableProps> = ({
    className,
    caption,
    header,
    body,
    footer,
    ...rest
}) => {
    return (
        <table {...rest} className={clsx("jkl-summary-table", className)}>
            {caption && <caption className="jkl-sr-only">{caption}</caption>}

            <thead className="jkl-sr-only">
                <tr>
                    {header.map((description, index) => (
                        <th scope="col" key={index}>
                            {description}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>{body}</tbody>

            <tfoot>{footer}</tfoot>
        </table>
    );
};
