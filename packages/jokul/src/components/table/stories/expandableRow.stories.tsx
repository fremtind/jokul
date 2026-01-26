import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { faktura } from "../../../../../../storybook-public/data/table-data.js";
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
import { _ExpandableTableRowController as ExpandableTableRowControllerStory } from "./expandableRowController.stories.js";
import { TableStory } from "./table.stories.js";

import "../styles/_index.scss";
import { fn } from "storybook/test";
import { DescriptionList } from "../../description-list/index.js";
import { DescriptionListStory } from "../../description-list/stories/DescriptionList.stories.js";

const meta = {
    title: "Komponenter/Table/Expandable Table Row",
    component: ExpandableTableRow,
    subcomponents: {
        ExpandableTableRowController,
    },
    parameters: {
        layout: "fullscreen",
    },
    args: {
        key: 1,
        clickable: {
            isClicked: false,
            onClick: fn(),
            markClickedRows: true,
        },
        colSpan: 100,
        expandedChildren: (
            <DescriptionList
                {...DescriptionListStory.args}
                alignment="horizontal"
            >
                {DescriptionListStory.args?.children}
            </DescriptionList>
        ),
        isOpen: false,
        onToggle: (e) => console.log(e),
    },
    decorators: (Story) => (
        <Table
            {...TableStory.args}
            caption={
                <TableCaption srOnly>
                    Testdata for ekspanderende rader
                </TableCaption>
            }
        >
            <TableHead>
                <TableRow>
                    {faktura.columns.slice(0, 4).map((column) => (
                        <TableHeader key={column} bold>
                            {column}
                        </TableHeader>
                    ))}
                    <TableHeader />
                </TableRow>
            </TableHead>
            <TableBody>
                <Story />
            </TableBody>
        </Table>
    ),
    tags: ["autodocs", "tabular data"],
} satisfies Meta<typeof ExpandableTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ExpandableTableRow: Story = {
    render: (args) => (
        <ExpandableTableRow {...args}>
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
            <ExpandableTableRowController
                {...ExpandableTableRowControllerStory.args}
            >
                Vis detaljer
            </ExpandableTableRowController>
        </ExpandableTableRow>
    ),
};
