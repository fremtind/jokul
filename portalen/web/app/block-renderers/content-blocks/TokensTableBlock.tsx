import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul";
import React, { type FC } from "react";
import { type ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";

export const TokensTable: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("tokens-table", contentBlock);

    if (!contentBlock.rows || contentBlock.rows.length === 0) {
        return null;
    }

    return (
        <Table style={{ width: "100%" }}>
            <TableHead>
                <TableRow>
                    <TableHeader>Element</TableHeader>
                    <TableHeader>Egenskap</TableHeader>
                    <TableHeader>Rolle</TableHeader>
                    <TableHeader>Verdi</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {contentBlock.rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.element}</TableCell>
                        <TableCell>{row.property}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>
                            <span className="jkl-code">{row.value}</span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
