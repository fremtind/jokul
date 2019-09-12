import React from "react";
import { TableAnchorRowData, TableRow } from "./TableRow";

export type TableRowData = string[] | TableAnchorRowData;

interface Props {
    columns: string[];
    rows: Array<TableRowData>;
}

export function Table(props: Props) {
    return (
        <table className="jkl-table">
            <thead>
                <tr className="jkl-table__row">
                    {props.columns.map((columnValue, i) => (
                        <td className="jkl-table__heading" key={i}>
                            {columnValue}
                        </td>
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
