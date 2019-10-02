import { TableAnchorRowData } from "./TableRow";
import { TableData } from "./TableData";
import React from "react";

interface PropTypes {
    row: TableAnchorRowData;
}

export function AnchorRow({ row }: PropTypes) {
    const onClick = () => {
        if (row.onRowClick) {
            row.onRowClick(row.href);
        } else {
            window.location.href = row.href;
        }
    };

    return (
        <tr onClick={onClick} className={"jkl-table__row jkl-table__row--data-row jkl-table__row--clickable-row"}>
            {row.rowData.map((data, j) => (
                <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
            ))}
            <td />
        </tr>
    );
}
