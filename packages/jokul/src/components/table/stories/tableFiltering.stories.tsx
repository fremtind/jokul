import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useState } from "react";
import { Button } from "../../button/index.js";
import { Link } from "../../link/index.js";
import { Select } from "../../select/index.js";
import { TextInput } from "../../text-input/index.js";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader } from "../TableHeader.js";
import { TableRow } from "../TableRow.js";
import { faktura } from "./data.js";

import "../styles/_index.scss";
import "../../description-list/styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../combobox/styles/_index.scss";
import "../../text-input/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/Table",
    component: Table,
    subcomponents: {
        TableCaption,
        TableHead,
        TableHeader,
        TableBody,
        TableRow,
        TableCell,
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableFiltering: Story = {
    name: "Filtrering av data",
    args: {
        collapseToList: true,
        fullWidth: true,
        caption: (
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
        ),
        children: "",
    },
    render: (args) => {
        const [search, setSearch] = useState("");
        const [status, setStatus] = useState("");
        const [filteredRows, setFilteredRows] = useState(faktura.rows);

        useEffect(() => {
            setFilteredRows(
                faktura.rows
                    .filter((row) =>
                        row
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                    )
                    .filter((row) =>
                        row[3]
                            .toString()
                            .toLowerCase()
                            .includes(status.toLowerCase()),
                    ),
            );
        }, [search, status]);

        return (
            <div style={{ width: "90dvw" }}>
                <aside
                    style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "end",
                        marginBlockEnd: "24px",
                    }}
                >
                    <TextInput
                        label={"Søk"}
                        value={search}
                        placeholder={"Søk"}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Select
                        items={[
                            { label: "Alle statuser", value: "" },
                            "Faktura",
                            "Påminnelse",
                            "Inkasso",
                        ]}
                        label={"Status"}
                        name={"status"}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />

                    <Button
                        onClick={() => {
                            setSearch("");
                            setStatus("");
                        }}
                    >
                        Fjern filter
                    </Button>
                </aside>
                <Table {...args}>
                    <TableHead sticky={true}>
                        <TableRow>
                            {faktura.columns.slice(0).map((column, index) => (
                                <TableHeader key={index} bold>
                                    {column}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.length !== 0 ? (
                            filteredRows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    <TableCell>
                                        <Link
                                            download={`${row[3]} ${new Date(row[0] as Date).toLocaleDateString()}`}
                                            href={"#"}
                                        >
                                            {new Date(
                                                row[0] as Date,
                                            ).toLocaleDateString()}
                                        </Link>
                                    </TableCell>
                                    {row.slice(1).map((cell, cellIndex) => (
                                        <TableCell
                                            key={cellIndex}
                                            data-th={faktura.columns[cellIndex]}
                                        >
                                            {cell.toLocaleString()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={99}>
                                    Fant ingen fakturaer.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    },
};
