import { TableAccordionRowData } from "./TableRow";
import * as React from "react";
import { useState } from "react";
import { TableData } from "./TableData";

interface PropTypes {
    row: TableAccordionRowData;
}

export function AccordionRow({ row }: PropTypes) {
    const [isOpen, setIsOpen] = useState(row.defaultOpen);
    const openClassName = isOpen ? " jkl-table__row--accordion-item--expanded" : "";

    const onToggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <tr
                onClick={onToggle}
                className={`jkl-table__row jkl-table__row--data-row jkl-table__row--clickable-row${openClassName}`}
            >
                {row.rowData.map((data, j) => (
                    <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
                ))}
                <td className="jkl-table__data-cell">
                    <span className="jkl-table__title-icon" />
                </td>
            </tr>
            {isOpen && (
                <tr className="jkl-table__row jkl-table__row--data-row jkl-table__row--accordion-item__content">
                    {row.children.map((child, i) => (
                        <td key={i} className="jkl-table__data-cell">
                            {child}
                        </td>
                    ))}
                    <td />
                </tr>
            )}
        </React.Fragment>
    );
}
