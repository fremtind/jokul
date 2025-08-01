import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader, type TableSortDirection } from "../TableHeader.js";
import { TableRow } from "../TableRow.js";
import { columns } from "../development/paginated-table-data.js";
import { useSortableTableHeader } from "../utils.js";
import { faktura, skadesaker } from "./data.js";

import "../styles/_index.scss";
import "../../description-list/styles/_index.scss";
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
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableStory: Story = {
    name: "Table",
    args: {
        collapseToList: true,
        fullWidth: true,
        caption: (
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
        ),
        children: "",
    },
    render: (args) => (
        <div style={{ width: "90dvw" }}>
            <Table {...args}>
                <TableHead sticky={true}>
                    <TableRow>
                        {skadesaker.columns.map((column, index) => (
                            <TableHeader key={index} bold>
                                {column}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skadesaker.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    data-th={skadesaker.columns[cellIndex]}
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
        </div>
    ),
};

export const StortableTable: Story = {
    name: "useSortableTableHeader",
    args: {
        caption: (
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
        ),
        children: "",
    },
    render: (args) => {
        const [sortBy, setSortBy] = useState(columns[0]);
        const [direction, setDirection] = useState<TableSortDirection>("desc");

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

        return (
            <Table caption={args.caption} fullWidth>
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 4).map((column, index) => (
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
                    {faktura.rows
                        .sort((a, b) => {
                            if (sortBy === "Forfallsdato") {
                                const timeA = new Date(a[0] as Date).getTime();
                                const timeB = new Date(b[0] as Date).getTime();

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
                            <TableRow key={rowIndex}>
                                {row.slice(0, 4).map((cell, cellIndex) => (
                                    <TableCell
                                        key={cellIndex}
                                        data-th={columns[cellIndex]}
                                        align={
                                            [1, 2].includes(cellIndex)
                                                ? "right"
                                                : "left"
                                        }
                                    >
                                        {cell.toLocaleString()}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        );
    },
};
