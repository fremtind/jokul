import React from "react";
import { TableRowData } from "./Table";
import { AnchorRow } from "./AnchorRow";
import { AccordionRow } from "./AccordionRow";

export type TableRowDataVariants = "anchor" | "accordion";

export interface BaseTableRowData {
    type: TableRowDataVariants;
}

export interface TableAnchorRowData extends BaseTableRowData {
    rowData: string[];
    type: "anchor";
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}

export interface TableAccordionRowData extends BaseTableRowData {
    rowData: string[];
    type: "accordion";
    defaultOpen: boolean;
    children: string;
}

interface Props {
    row: TableRowData;
}

export function TableRow({ row }: Props) {
    if (isAnchorRowData(row)) {
        return <AnchorRow row={row} />;
    }

    if (isAccordionRowData(row)) {
        return <AccordionRow row={row} />;
    }

    return (
        <tr className={"jkl-table__row jkl-table__row--data-row"}>
            {row.map((data, j) => (
                <td className="jkl-table__data-cell" key={j}>
                    {data}
                </td>
            ))}
        </tr>
    );
}

export function isAnchorRowData(row: string[] | TableAnchorRowData | TableAccordionRowData): row is TableAnchorRowData {
    return "type" in row && row.type === "anchor";
}

export function isAccordionRowData(
    row: string[] | TableAnchorRowData | TableAccordionRowData,
): row is TableAccordionRowData {
    return "type" in row && row.type === "accordion";
}
