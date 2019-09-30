import { TableAccordionRowData } from "./TableRow";
import * as React from "react";
import { useState } from "react";
import { TableData } from "./TableData";

interface PropTypes {
    row: TableAccordionRowData;
}

export function AccordionRow({ row }: PropTypes) {
    const [isOpen, setIsOpen] = useState(row.defaultOpen);
    const openClassName = isOpen ? " jkl-accordion-item--expanded" : "";

    const onToggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <tr
                onClick={onToggle}
                className={`jkl-table__row jkl-table__row--data-row jkl-table__row--anchor-row${openClassName}`}
            >
                {row.rowData.map((data, j) => (
                    <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
                ))}
            </tr>
            {isOpen && (
                <tr className="jkl-table__row jkl-table__row--data-row">
                    <td className="jkl-table__data-cell" colSpan={row.rowData.length}>
                        {row.children}
                    </td>
                </tr>
            )}
        </React.Fragment>
    );
}
