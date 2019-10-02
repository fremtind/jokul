import React, { ReactNode, useState } from "react";
import { TableData } from "./TableData";
import { TableRowAccordionData } from "./Table";

interface PropTypes {
    row: TableRowAccordionData;
}

export function TableRowAccordion({ row }: PropTypes) {
    const [isOpen, setIsOpen] = useState(row.defaultOpen);
    const openClassName = isOpen ? " jkl-table__row--accordion-item--expanded" : "";

    const toggleOpen = () => setIsOpen(!isOpen);

    const accordionContent = (showContent: boolean, content: ReactNode[]) => {
        return isOpen ? (
            <tr className="jkl-table__row jkl-table__row--data-row jkl-table__row--accordion-item__content">
                {content.map((data, j) => (
                    <TableData key={j} data={data} row={content} isFirstCell={j === 0} />
                ))}
                {/* Empty last cell in stead of icon */}
                {/* Necessary for proper alignment   */}
                <td />
            </tr>
        ) : (
            undefined
        );
    };

    return (
        <React.Fragment>
            <tr
                onClick={toggleOpen}
                className={`jkl-table__row jkl-table__row--data-row jkl-table__row--clickable-row${openClassName}`}
            >
                {row.rowData.map((data, j) => (
                    <TableData data={data} row={row} key={j} isFirstCell={j === 0} />
                ))}

                <td className="jkl-table__data-cell">
                    <span className="jkl-table__title-icon" />
                </td>
            </tr>

            {accordionContent(isOpen, row.children)}
        </React.Fragment>
    );
}
