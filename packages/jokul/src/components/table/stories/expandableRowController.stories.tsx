import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { faktura } from "../../../../../../storybook-public/data/table-data.js";
import { Link } from "../../link/index.js";
import { ExpandableTableRow } from "../ExpandableTableRow.js";
import { ExpandableTableRowController } from "../ExpandableTableRowController.js";
import { TableCell } from "../TableCell.js";
import { columns } from "../development/paginated-table-data.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Table/Expandable Table Row",
    component: ExpandableTableRowController,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        children: "Vis detaljer",
        align: "left",
        isOpen: undefined,
        onClick: () => console.log("clicked"),
        verticalAlign: "center",
    },
    tags: ["autodocs", "tabular data"],
} satisfies Meta<typeof ExpandableTableRowController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ExpandableTableRowController: Story = {
    render: (args) => (
        <ExpandableTableRow expandedChildren={<p>Hei</p>}>
            <TableCell>
                <Link
                    download={`${faktura.rows[3]} ${new Date(faktura.rows[0][0] as Date).toLocaleDateString()}`}
                    href={"#"}
                >
                    {new Date(faktura.rows[0][0] as Date).toLocaleDateString()}
                </Link>
            </TableCell>
            {faktura.rows[0].slice(1, 4).map((cell, cellIndex) => (
                <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                    {cell.toLocaleString()}
                </TableCell>
            ))}
            <ExpandableTableRowController {...args} />
        </ExpandableTableRow>
    ),
};
