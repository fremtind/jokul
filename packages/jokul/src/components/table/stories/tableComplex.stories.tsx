import type { Meta, StoryObj } from "@storybook/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "../../button/index.js";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../description-list/index.js";
import { Link } from "../../link/index.js";
import { Select } from "../../select/index.js";
import { TextInput } from "../../text-input/index.js";
import { ExpandableTableRow } from "../ExpandableTableRow.js";
import { ExpandableTableRowController } from "../ExpandableTableRowController.js";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableFooter } from "../TableFooter.js";
import { TableHead } from "../TableHead.js";
import { TableHeader, type TableSortDirection } from "../TableHeader.js";
import { TablePagination } from "../TablePagination.js";
import { TableRow } from "../TableRow.js";
import { useSortableTableHeader } from "../utils.js";
import { faktura } from "./data.js";

import "../styles/_index.scss";
import "../../description-list/styles/_index.scss";
import "../../link/styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../combobox/styles/_index.scss";
import "../../text-input/styles/_index.scss";

const meta = {
    title: "Komponenter/Table/Complex",
    component: Table,
    subcomponents: {
        TableCaption,
        TableHead,
        TableHeader,
        TableBody,
        TableRow,
        TableCell,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableComplex: Story = {
    name: "Kompleks Table",
    args: {
        collapseToList: true,
        fullWidth: true,
        caption: (
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
        ),
        children: "",
    },
    render: (args) => {
        const ref = useRef<HTMLTableElement>(null);
        const [activePage, setActivePage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(6);
        const [sortBy, setSortBy] = useState(faktura.columns[0]);
        const [direction, setDirection] = useState<TableSortDirection>("desc");
        const [search, setSearch] = useState("");
        const [status, setStatus] = useState("");
        const [filteredRows, setFilteredRows] = useState(faktura.rows);

        const startIndex = activePage * rowsPerPage;

        const handleSortChange = (
            sortKey: string,
            sortDirection: TableSortDirection,
        ) => {
            setSortBy(sortKey);
            setDirection(sortDirection);
        };

        const { getSortProps } = useSortableTableHeader(
            sortBy,
            direction,
            handleSortChange,
        );

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
                    )
                    .slice(startIndex, startIndex + rowsPerPage),
            );
        }, [startIndex, rowsPerPage, search, status]);

        return (
            <>
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
                <div style={{ width: "90dvw" }}>
                    <Table {...args}>
                        <TableHead sticky={true}>
                            <TableRow>
                                {faktura.columns
                                    .slice(0, 6)
                                    .map((column, index) => (
                                        <TableHeader
                                            key={index}
                                            bold
                                            {...getSortProps(column)}
                                        >
                                            {column}
                                        </TableHeader>
                                    ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.length !== 0 ? (
                                filteredRows
                                    .sort((a, b) => {
                                        if (sortBy === "Forfallsdato") {
                                            const timeA = new Date(
                                                a[0] as Date,
                                            ).getTime();
                                            const timeB = new Date(
                                                b[0] as Date,
                                            ).getTime();

                                            if (direction === "asc") {
                                                return timeA - timeB;
                                            }

                                            return timeB - timeA;
                                        }

                                        if (sortBy === "Beløp") {
                                            const numberA = Number(a[2]);
                                            const numberB = Number(b[2]);

                                            if (direction === "asc") {
                                                return numberA - numberB;
                                            }

                                            return numberB - numberA;
                                        }

                                        return 0;
                                    })
                                    .map((row, rowIndex) => (
                                        <ExpandableTableRow
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-ignore
                                            clickable={false}
                                            key={rowIndex}
                                            expandedChildren={
                                                <DescriptionList>
                                                    {faktura.columns.map(
                                                        (column, columnIndex) =>
                                                            row.map(
                                                                (
                                                                    cell,
                                                                    rowIndex,
                                                                ) =>
                                                                    columnIndex ===
                                                                        rowIndex && (
                                                                        <Fragment
                                                                            key={
                                                                                rowIndex
                                                                            }
                                                                        >
                                                                            <DescriptionTerm>
                                                                                {
                                                                                    column
                                                                                }
                                                                            </DescriptionTerm>
                                                                            <DescriptionDetail>
                                                                                {cell.toLocaleString()}
                                                                            </DescriptionDetail>
                                                                        </Fragment>
                                                                    ),
                                                            ),
                                                    )}
                                                    <DescriptionTerm>
                                                        Faktura
                                                    </DescriptionTerm>
                                                    <DescriptionDetail>
                                                        <Link
                                                            external
                                                            target={"_blank"}
                                                            href={"#"}
                                                        >
                                                            Åpne i ny fane
                                                        </Link>
                                                    </DescriptionDetail>
                                                    <DescriptionDetail>
                                                        <Link
                                                            download={`${row[3]} ${new Date(row[0] as Date).toLocaleDateString()}`}
                                                            href={"#"}
                                                        >
                                                            Last ned
                                                        </Link>
                                                    </DescriptionDetail>
                                                </DescriptionList>
                                            }
                                        >
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
                                            {row
                                                .slice(1, 6)
                                                .map((cell, cellIndex) => (
                                                    <TableCell
                                                        key={cellIndex}
                                                        data-th={
                                                            faktura.columns[
                                                                cellIndex
                                                            ]
                                                        }
                                                    >
                                                        {cell.toLocaleString()}
                                                    </TableCell>
                                                ))}
                                            <ExpandableTableRowController>
                                                Vis detaljer
                                            </ExpandableTableRowController>
                                        </ExpandableTableRow>
                                    ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={99}>
                                        Fant ingen fakturaer.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={99}>
                                    <TablePagination
                                        activePage={activePage}
                                        totalNumberOfRows={faktura.rows.length}
                                        rowsPerPage={rowsPerPage}
                                        rowsPerPageItems={[
                                            6,
                                            12,
                                            24,
                                            {
                                                label: "Alle",
                                                value: filteredRows.length,
                                            },
                                        ]}
                                        onChangeRowsPerPage={(e) => {
                                            const newRowsPerPage =
                                                Number.parseInt(e.target.value);
                                            setRowsPerPage(newRowsPerPage);
                                            setActivePage(0);
                                            if (ref.current) {
                                                ref.current.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                        onChange={(_, toPage) => {
                                            setActivePage(toPage);
                                            if (ref.current) {
                                                ref.current.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </>
        );
    },
};
