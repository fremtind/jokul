import React, { MouseEvent } from "react";
import { TableRowData } from "./Table";
import { TableData } from "./TableData";

export type TableRowDataVariants = "anchor";

export interface BaseTableRowData {
    type: TableRowDataVariants;
}

export interface TableAnchorRowData extends BaseTableRowData {
    rowData: string[];
    type: "anchor";
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
    customRowClick?: () => void;
}

interface Props {
    row: TableRowData;
}

export function TableRow(props: Props) {
    const { row } = props;
    const rowData: string[] = isAnchorRowData(row) ? row.rowData : row;

    let onClick: undefined | ((evt: MouseEvent<HTMLTableRowElement>) => void) = undefined;
    let rowModifierClasses = "";

    if (isAnchorRowData(row)) {
        if (row.customRowClick !== undefined) {
            onClick = () => {
                row.customRowClick && row.customRowClick();
            };
        } else {
            onClick = () => {
                if (row.onRowClick) {
                    row.onRowClick(row.href);
                } else {
                    window.location.href = row.href;
                }
            };
        }
        rowModifierClasses += "jkl-table__row--anchor-row";
    }

    return (
        <tr onClick={onClick} className={`jkl-table__row jkl-table__row--data-row ${rowModifierClasses}`}>
            {rowData.map((data, j) => (
                <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
            ))}
        </tr>
    );
}

export function isAnchorRowData(row: string[] | TableAnchorRowData): row is TableAnchorRowData {
    return "type" in row && row.type === "anchor";
}
