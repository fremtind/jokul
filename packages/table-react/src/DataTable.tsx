import { Density } from "@fremtind/jkl-core";
import React, { forwardRef, TableHTMLAttributes } from "react";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCaption } from "./TableCaption";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
    /** Beskrivelse av tabellen for skjermlesere */
    caption?: string;
    density?: Density;
    collapseToList?: boolean;
    rows: React.ReactNode[][];
    columns: string[];
    emptyTableText?: string;
    /**
     * Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
     * @default "top"
     */
    verticalAlign?: "center" | "top";
}

const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
    (
        { caption, columns, emptyTableText, rows, verticalAlign, ...rest },
        ref,
    ) => {
        return (
            <Table
                caption={<TableCaption srOnly>{caption}</TableCaption>}
                fullWidth={true}
                {...rest}
                ref={ref}
            >
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHeader key={index} density="compact" bold>
                                {column}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length === 0 && emptyTableText && (
                        <TableRow>
                            <TableCell colSpan={columns.length}>
                                {emptyTableText}
                            </TableCell>
                        </TableRow>
                    )}
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    data-th={columns[cellIndex]}
                                    verticalAlign={verticalAlign}
                                >
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    },
);

DataTable.displayName = "DataTable";

export { DataTable };
