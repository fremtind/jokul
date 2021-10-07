import React, { MouseEvent, VFC } from "react";
import { TableRowData, isAnchorRowData } from "./types";
import { TableData } from "./TableData";

interface Props {
    row: TableRowData;
}

export const TableRow: VFC<Props> = ({ row }) => {
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
};
