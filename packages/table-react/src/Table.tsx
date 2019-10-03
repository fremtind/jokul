import React from "react";
import { TableAccordionRowData, TableAnchorRowData, TableRow } from "./TableRow";

export type TableRowData = string[] | TableAnchorRowData | TableAccordionRowData;

interface Props {
    columns: string[];
    rows: Array<TableRowData>;
    className?: string;
    accordiation?: boolean;
}

export function Table({ columns, rows, className, accordiation }: Props) {
    const componentClassName = "jkl-table".concat(
        accordiation ? ` jkl-table--accordiation` : "",
        className ? ` ${className}` : "",
    );

    return (
        <table className={componentClassName}>
            <colgroup>
                {columns.map((columnValue, i) => (
                    <col key={i} />
                ))}
                <col className="jkl-table__column--narrow" />
            </colgroup>
            <thead>
                <tr className="jkl-table__row">
                    {columns.map((columnValue, i) => (
                        <th className="jkl-table__heading" key={i}>
                            {columnValue}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <TableRow row={row} key={i} />
                ))}
            </tbody>
        </table>
    );
}
