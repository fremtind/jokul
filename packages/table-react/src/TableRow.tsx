import React, { MouseEvent } from "react";
import { TableRowData } from "./Table";
import { TableData } from "./TableData";

export type TableRowDataVariants = "anchor";

export interface BaseTableRowData {
    type: TableRowDataVariants;
}

export interface TableAnchorRowData extends BaseTableRowData {
    rowData: string[] | React.ReactNodeArray;
    type: "anchor";
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}

interface Props {
    row: TableRowData;
}

export function TableRow(props: Props) {
    const { row } = props;
    const rowData: string[] | React.ReactNodeArray = isAnchorRowData(row) ? row.rowData : row;

    let onClick: undefined | ((evt: MouseEvent<HTMLTableRowElement>) => void) = undefined;
    let rowModifierClasses = "";

    if (isAnchorRowData(row)) {
        onClick = () => {
            if (row.onRowClick) {
                row.onRowClick(row.href);
            } else {
                window.location.href = row.href;
            }
        };
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

export function isAnchorRowData(
    row: (string[] | React.ReactNodeArray) | TableAnchorRowData,
): row is TableAnchorRowData {
    return "type" in row && row.type === "anchor";
}
