import React from "react";
import { TableAnchorRowData, TableRow } from "./TableRow";

export type TableRowData = React.ReactNodeArray | TableAnchorRowData;

interface Props {
    columns: string[];
    rows: Array<TableRowData>;
    className?: string;
}

export function Table(props: Props) {
    return (
        <table className={`jkl-table ${props.className ? props.className : ""}`}>
            <thead>
                <tr className="jkl-table__row">
                    {props.columns.map((columnValue, i) => (
                        <th className="jkl-table__heading" key={i}>
                            {columnValue}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, i) => (
                    <TableRow row={row} key={i} />
                ))}
            </tbody>
        </table>
    );
}
