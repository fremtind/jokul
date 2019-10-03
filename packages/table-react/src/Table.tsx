import React, { ReactNode } from "react";
import { TableRowAnchor } from "./TableRowAnchor";
import { TableRowAccordion } from "./TableRowAccordion";
import { TableRowSimple } from "./TableRowSimple";

//-------TODO:  Skulle vi ha flyttet alle disse interfacene, typene (og type guardsene?) ut i en egen fil? -------------
export type TableRowData = ReactNode[] | TableRowAnchorData | TableRowAccordionData; // Endret fra string. Greit?

export type TableRowDataVariants = "anchor" | "accordion";

export interface BaseTableRowData {
    type: TableRowDataVariants;
}

export interface TableRowAnchorData extends BaseTableRowData {
    rowData: string[];
    type: "anchor";
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}

export interface TableRowAccordionData extends BaseTableRowData {
    rowData: string[];
    type: "accordion";
    defaultOpen: boolean;
    children: ReactNode[];
}

export function isAnchorRowData(
    row: ReactNode[] | TableRowAnchorData | TableRowAccordionData,
): row is TableRowAnchorData {
    // Endret fra string. Greit?
    return "type" in row && row.type === "anchor";
}

export function isAccordionRowData(
    row: ReactNode[] | TableRowAnchorData | TableRowAccordionData,
): row is TableRowAccordionData {
    // Endret fra string. Greit?
    return "type" in row && row.type === "accordion";
}

// ---------------------------------------------------------------------------------------------------------------------

interface Props {
    columns: string[];
    rows: Array<TableRowData>;
    className?: string;
    accordion?: boolean;
}

export function Table({ columns, rows, className, accordion }: Props) {
    const componentClassName = "jkl-table".concat(
        accordion ? ` jkl-table--accordion` : "",
        className ? ` ${className}` : "",
    );

    const createAppropriateTableRow = (row: TableRowData, index: number) => {
        // TODO: Good/bad practice å ha keys her?

        if (isAnchorRowData(row)) {
            return <TableRowAnchor key={index} row={row} />;
        } else if (isAccordionRowData(row)) {
            return <TableRowAccordion key={index} row={row} />;
        } else {
            return <TableRowSimple key={index} row={row} />;
        }
    };

    return (
        <table className={componentClassName}>
            <colgroup>
                {columns.map((columnValue, i) => (
                    <col key={i} />
                ))}
                {/* Icon-column has fixed width */}
                <col className="jkl-table__column--icon" />
            </colgroup>
            <thead>
                <tr className="jkl-table__row">
                    {columns.map((columnValue, i) => (
                        <th className="jkl-table__heading" key={i}>
                            {columnValue}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{rows.map((row, i) => createAppropriateTableRow(row, i))}</tbody>
        </table>
    );
}
