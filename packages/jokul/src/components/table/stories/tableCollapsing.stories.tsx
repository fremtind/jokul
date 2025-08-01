import type { Meta, StoryObj } from "@storybook/react";
import React, { Fragment } from "react";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../description-list/index.js";
import { Link } from "../../link/index.js";
import { ExpandableTableRow } from "../ExpandableTableRow.js";
import { ExpandableTableRowController } from "../ExpandableTableRowController.js";
import { Table } from "../Table.js";
import { TableBody } from "../TableBody.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader } from "../TableHeader.js";
import { TableRow } from "../TableRow.js";
import { columns } from "../development/paginated-table-data.js";
import { faktura } from "./data.js";

import "../styles/_index.scss";
import "../../description-list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/Table/ExpandableTableRow",
    component: ExpandableTableRow,
    subcomponents: {
        ExpandableTableRowController,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableCollapse: Story = {
    name: "Expandable Table",
    args: {
        colSpan: 99,
        // @ts-ignore
        clickable: false,
        isOpen: false,
        expandedChildren: "",
    },
    render: (args) => (
        <div style={{ width: "90dvw" }}>
            <Table
                fullWidth={true}
                caption={
                    <TableCaption>Eksempel på ekspanderbare rader</TableCaption>
                }
            >
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 4).map((column, index) => (
                            <TableHeader key={index} bold>
                                {column}
                            </TableHeader>
                        ))}
                        <TableHeader />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faktura.rows.map((row, rowIndex) => (
                        <ExpandableTableRow
                            {...args}
                            key={rowIndex}
                            expandedChildren={
                                <DescriptionList>
                                    {faktura.columns.map(
                                        (column, columnIndex) =>
                                            row.map(
                                                (cell, rowIndex) =>
                                                    columnIndex ===
                                                        rowIndex && (
                                                        <Fragment
                                                            key={rowIndex}
                                                        >
                                                            <DescriptionTerm>
                                                                {column}
                                                            </DescriptionTerm>
                                                            <DescriptionDetail>
                                                                {cell.toLocaleString()}
                                                            </DescriptionDetail>
                                                        </Fragment>
                                                    ),
                                            ),
                                    )}
                                    <DescriptionTerm>Faktura</DescriptionTerm>
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
                            {row.slice(1, 4).map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    data-th={columns[cellIndex]}
                                >
                                    {cell.toLocaleString()}
                                </TableCell>
                            ))}
                            <ExpandableTableRowController>
                                Vis detaljer
                            </ExpandableTableRowController>
                        </ExpandableTableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};
