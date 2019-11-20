import React, { MouseEvent } from "react";
import { TableRowData } from "./Table";
import { TableData } from "./TableData";

export enum TableRowType {
    Anchor = "ANCHOR",
}

export interface BaseTableRowData {
    type: TableRowType;
}

export interface TableAnchorRowData extends BaseTableRowData {
    rowData: string[];
    type: TableRowType.Anchor;
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}

interface Props {
    row: TableRowData;
}

export function TableRow({ row }: Props) {
    const rowData: string[] = isAnchorRowData(row) ? row.rowData : row;

    let componentClassName = "jkl-table__row jkl-table__row--data-row";
    let onClick: undefined | ((evt: MouseEvent<HTMLTableRowElement>) => void) = undefined;
    let title: string | undefined = undefined;

    if (isAnchorRowData(row)) {
        onClick = () => {
            if (row.onRowClick) {
                row.onRowClick(row.href);
            } else {
                window.location.href = row.href;
            }
        };
        title = row.hrefLabel;
        componentClassName += " jkl-table__row--anchor-row";
    }

    return (
        <tr title={title} onClick={onClick} className={componentClassName}>
            {rowData.map((data, j) => (
                <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
            ))}
        </tr>
    );
}

export function isAnchorRowData(row: string[] | TableAnchorRowData): row is TableAnchorRowData {
    return "type" in row && row.type === TableRowType.Anchor;
}
