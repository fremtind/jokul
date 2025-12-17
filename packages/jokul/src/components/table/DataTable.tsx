import { forwardRef } from "react";
import { Table } from "./Table.js";
import { TableBody } from "./TableBody.js";
import { TableCaption } from "./TableCaption.js";
import { TableCell } from "./TableCell.js";
import { TableHead } from "./TableHead.js";
import { TableHeader } from "./TableHeader.js";
import { TableRow } from "./TableRow.js";
import type { DataTableProps } from "./types.js";

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
