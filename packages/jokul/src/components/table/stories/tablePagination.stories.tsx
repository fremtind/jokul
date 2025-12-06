import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Flex } from "../../flex/Flex.jsx";
import { Link } from "../../link/index.js";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader } from "../TableHeader.js";
import { TablePagination } from "../TablePagination.js";
import { TableRow } from "../TableRow.js";
import { columns } from "../development/paginated-table-data.js";
import { faktura } from "./data.js";

import "../styles/_index.scss";
import "../../description-list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/Table/TablePagination",
    component: TablePagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TablePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TablePaginationStory: Story = {
    name: "TablePagination",
    args: {
        labels: {
            next: "Neste side",
            previous: "Forrige side",
            rowsPerPage: "Fakturaer per side",
        },
        activePage: 1,
        totalNumberOfRows: faktura.rows.length,
        rowsPerPage: 12,
        rowsPerPageItems: [
            5,
            10,
            12,
            {
                label: "Alle",
                value: -1,
            },
        ],
        withGoToPage: {
            gotoLabel: "Side",
        },
        onChangeRowsPerPage: () => "",
        onChange: () => "",
    },
    argTypes: {
        activePage: {
            control: {
                type: "number",
                min: 0,
            },
        },
        totalNumberOfRows: {
            control: {
                type: "number",
                min: faktura.rows.length,
                max: faktura.rows.length,
            },
        },
        rowsPerPage: {
            control: {
                type: "number",
                min: -1,
                max: faktura.rows.length,
            },
        },
        withGoToPage: {
            control: "boolean",
            description:
                "Du kan også velge å endre teksten ved siden av input-feltet med en optional" +
                " goToPageLabel-prop.",
        },
    },
    render: (args) => {
        const [activePage, setActivePage] = React.useState(
            args.activePage || 1,
        );
        const [rowsPerPage, setRowsPerPage] = React.useState(args.rowsPerPage);

        const startIndex = (activePage - 1) * rowsPerPage;

        const visibleRows = faktura.rows.slice(
            startIndex,
            startIndex + rowsPerPage,
        );

        return (
            <Flex direction="column">
                <Table
                    caption={
                        <TableCaption>Eksempel på paginering</TableCaption>
                    }
                >
                    <TableHead sticky={true}>
                        <TableRow>
                            {faktura.columns
                                .slice(0, 5)
                                .map((column, index) => (
                                    <TableHeader key={index} bold>
                                        {column}
                                    </TableHeader>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row, rowIndex) => (
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
                                {row.slice(1, 5).map((cell, cellIndex) => (
                                    <TableCell
                                        key={cellIndex}
                                        data-th={columns[cellIndex]}
                                    >
                                        {cell.toLocaleString()}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    {...args}
                    activePage={activePage}
                    rowsPerPage={rowsPerPage}
                    onChange={setActivePage}
                    onChangeRowsPerPage={(e) => {
                        const newRowsPerPage = Number.parseInt(e.target.value);
                        setRowsPerPage(newRowsPerPage);
                        setActivePage(1);
                    }}
                />
            </Flex>
        );
    },
};
