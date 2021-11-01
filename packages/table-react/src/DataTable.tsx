import React, { DetailedHTMLProps, HTMLAttributes, VFC } from "react";
import { TableHeader } from "./TableHeader";
import { TableHead } from "./TableHead";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableBody } from "./TableBody";
import { TableCaption } from "./TableCaption";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    /** Beskrivelse av tabellen for skjermlesere */
    caption?: string;
    compact?: boolean;
    collapseToList?: boolean;
    rows: React.ReactNode[][];
    columns: string[];
    emptyTableText?: string;
    /** Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være sentrert, men dersom én eller flere kolonner typisk har mye mer innhold enn naboene kan toppjustering være bedre. */
    verticalAlign?: "center" | "top";
}

export const DataTable: VFC<Props> = ({ caption, columns, emptyTableText, rows, verticalAlign, ...rest }) => {
    return (
        <Table fullWidth={true} {...rest}>
            {caption && <TableCaption srOnly>{caption}</TableCaption>}
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index} compact bold>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.length === 0 && emptyTableText && (
                    <TableRow>
                        <TableCell colSpan={columns.length}>{emptyTableText}</TableCell>
                    </TableRow>
                )}
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex} data-th={columns[cellIndex]} verticalAlign={verticalAlign}>
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
