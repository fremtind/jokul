import React, { ReactNode } from "react";
import { isAccordionRowData, isAnchorRowData, TableRowData } from "./Table";

interface Props {
    data: ReactNode; // Endret fra string. Greit?
    row: TableRowData;
    isFirstCell: boolean;
}

export function TableData(props: Props) {
    const { row, data, isFirstCell } = props;

    const createAppropriateDataLabel = (tableRow: TableRowData) => {
        if (isAnchorRowData(tableRow)) {
            function onAnchorClick(evt: React.MouseEvent<HTMLAnchorElement>) {
                // Stop browser link navigation and let the clickHandler on TableRowAnchor do the job
                evt.preventDefault();
            }
            return (
                <a className="jkl-sr-only" href={tableRow.href} onClick={onAnchorClick}>
                    {tableRow.hrefLabel}{" "}
                </a>
            );
        } else if (isAccordionRowData(tableRow)) {
            function onAccordionClick(evt: React.MouseEvent<HTMLButtonElement>) {
                // Stop accordion toggle and let the clickHandler on TableRowAccordion do the job
                evt.preventDefault();
            }
            return (
                <button className="jkl-sr-only" onClick={onAccordionClick}>
                    {tableRow.elementLabel}{" "}
                </button>
            );
        } else {
            return undefined; // TODO: Should there be a 'default' label for TableRowSimple?
        }
    };

    return (
        <td className="jkl-table__data-cell">
            {/* Only create a label in the first cell, so that screen readers don't read the label for each cell */}
            {/* The downside of this is that only the first cell can be right clicked and get the context menu */}
            {isFirstCell && createAppropriateDataLabel(row)}
            {data}
        </td>
    );
}
