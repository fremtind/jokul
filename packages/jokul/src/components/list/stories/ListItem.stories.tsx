import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { OrderedList, UnorderedList } from "../List.js";
import { ListItem as ListItemComponent } from "../ListItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/List/ListItem",
    component: ListItemComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItem: Story = {
    args: {
        children: "Jeg er et listepunkt",
    },
    decorators: (Story) => (
        <UnorderedList className="jkl-body">
            <Story />
        </UnorderedList>
    ),
};

export const OrderedListItem: Story = {
    name: "ListItem i OrderedList",
    args: {
        children: "Jeg er et listepunkt",
    },
    decorators: (Story) => (
        <OrderedList className="jkl-body">
            <Story />
        </OrderedList>
    ),
};
