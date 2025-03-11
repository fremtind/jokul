import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader } from "../TableHeader.js";
import { TableRow } from "../TableRow.js";
import "../styles/_index.scss";
import React from "react";

const meta = {
    title: "Komponenter/Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
    "Dato",
    "Saksnummer",
    "Kundenummer",
    "Kundenavn",
    "Milepæl",
    "Følger saken",
];

const rows = [
    [
        "24.02.2020",
        "20-1234567",
        "010203 99887",
        "Ola Nordmann",
        "Opprettet",
        "Siri Saksbehandler",
    ],
    [
        "13.04.2019",
        "20-8382811",
        "010203 99887",
        "Kari Nordkvinne",
        "Opprettet",
        "Siri Saksbehandler",
    ],
    [
        "31.07.2017",
        "20-1111",
        "010203 99887",
        "Kari Nordkvinne",
        "Opprettet",
        "Per Persen",
    ],
];

export const TableComponent: Story = {
    render: (args) => (
        <Table fullWidth>
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index} bold>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={columns[cellIndex]}
                                align={
                                    [1, 2].includes(cellIndex)
                                        ? "right"
                                        : "left"
                                }
                            >
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
};
