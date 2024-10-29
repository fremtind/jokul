import cn from "classnames";
import React, { ReactNode, FC } from "react";

export interface Props {
    className?: string;
    caption?: string;
    header: [string, string];
    body: ReactNode;
    footer?: ReactNode;
}

export const SummaryTable: FC<Props> = ({
    className,
    caption,
    header,
    body,
    footer,
    ...rest
}) => {
    return (
        <table {...rest} className={cn("jkl-summary-table", className)}>
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
