import React from "react";
import { TableRowData } from "./Table";
import { isAnchorRowData } from "./TableRow";

interface Props {
    data: string;
    row: TableRowData;
    isFirstCell: boolean;
}

export function TableData(props: Props) {
    const { row, data, isFirstCell } = props;
    function onAnchorClick(evt: React.MouseEvent<HTMLAnchorElement>) {
        // Stop browser link navigation and let the clickHandler on TableRow do the job
        evt.preventDefault();
    }

    return (
        <td className="jkl-table__data-cell">
            {/* Only create an anchor in the first cell, so that screen readers doesn't read each cell as a link */}
            {/* The downside of this is that only the first cell can be right clicked and get the anchor context menu */}
            {isFirstCell && isAnchorRowData(row) ? (
                <a className="jkl-sr-only" href={row.href} onClick={onAnchorClick}>
                    {row.hrefLabel}{" "}
                </a>
            ) : (
                undefined
            )}
            {data}
        </td>
    );
}
