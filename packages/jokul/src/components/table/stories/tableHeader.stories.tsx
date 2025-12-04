import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Table } from "../Table.js";
import { TableCaption } from "../TableCaption.js";
import { TableCell } from "../TableCell.js";
import { TableHead } from "../TableHead.js";
import { TableHeader } from "../TableHeader.js";
import { TableRow } from "../TableRow.js";
import { skadesaker } from "./data.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Table/Table Header",
    component: TableHeader,
    parameters: {
        layout: "padded",
    },
    args: {
        align: "left",
        children: "Handling",
        bold: true,
        srOnly: false,
    },
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableHeaderStory: Story = {
    name: "Table Header",
    decorators: (Story, args) => {
        return (
            <Table caption={<TableCaption>Hei</TableCaption>} fullWidth>
                <Story />
                {skadesaker.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={skadesaker.columns[cellIndex]}
                                align={args.align}
                            >
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </Table>
        );
    },
    render: (args) => {
        return (
            <TableHead>
                <TableRow>
                    {skadesaker.columns.map((column, index) => (
                        <TableHeader key={index} {...args}>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
        );
    },
};
