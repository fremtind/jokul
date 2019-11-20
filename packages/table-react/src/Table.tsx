import React from "react";
import { TableAnchorRowData, TableRow } from "./TableRow";

export type TableRowData = string[] | TableAnchorRowData;

interface Props {
    columns: string[];
    rows: Array<TableRowData>;
    className?: string;
}

export function Table({ columns, rows, className }: Props) {
    return (
        <table className={`jkl-table ${className ? className : ""}`}>
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
