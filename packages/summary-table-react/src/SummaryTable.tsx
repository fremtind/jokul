import React, { ReactNode, VFC } from "react";
import cn from "classnames";

export interface Props {
    className?: string;
    caption?: string;
    header: [string, string];
    body: ReactNode;
    footer?: ReactNode;
}

export const SummaryTable: VFC<Props> = ({ className, caption, header, body, footer }) => {
    return (
        <table className={cn("jkl-summary-table", "jkl-body", className)}>
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
