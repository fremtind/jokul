import React from "react";
import { TableRowAnchorData } from "./Table";
import { TableData } from "./TableData";

interface PropTypes {
    row: TableRowAnchorData;
}

export function TableRowAnchor({ row }: PropTypes) {

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
                <TableData key={j} data={data} row={row} isFirstCell={j === 0} />
            ))}
            {/* Empty last cell in stead of icon (see TableRowAccordion) */}
            {/* This is necessary for 'hover' function to work properly  */}
            <td />
        </tr>
    );
}
