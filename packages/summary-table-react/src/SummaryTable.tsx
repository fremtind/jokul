import React, { FC } from "react";
import cn from "classnames";

export interface Item {
    label: string;
    value: string;
    bold?: boolean;
}

export interface Props {
    columnDescriptions: [string, string];
    items: Item[];
    className?: string;
    footer?: Item;
}

export const SummaryTable: FC<Props> = ({ columnDescriptions, items, className, footer }) => {
    return (
        <table className={cn("jkl-summary-table", "jkl-body", className)}>
            <thead className="jkl-sr-only">
                <tr>
                    {columnDescriptions.map((category, index) => (
                        <th scope="col" key={`${category}-${index}`}>
                            {category}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {items.map(({ label, value, bold = false }, index) => (
                    <tr key={`${label}-${index}`}>
                        <th scope="row">
                            <span className={cn({ "jkl-summary-table__row--bold": bold })}>{label}</span>
                        </th>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>

            {footer && (
                <tfoot>
                    <tr>
                        <th scope="row">{footer?.label}</th>
                        <td>{footer?.value}</td>
                    </tr>
                </tfoot>
            )}
        </table>
    );
};
