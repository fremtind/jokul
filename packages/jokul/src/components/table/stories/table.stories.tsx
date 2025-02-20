import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
    Table as TableComponent,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../index.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Table",
    component: TableComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SummaryTable: Story = {
    args: {},
};
