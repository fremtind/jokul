import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { OrderedList as OrderedListComponent } from "../List.js";
import { ListItem } from "../ListItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/List/OrderedList",
    component: OrderedListComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof OrderedListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderedList: Story = {
    args: {
        className: "jkl-body",
        children: [
            <ListItem key={1}>Steg 1</ListItem>,
            <ListItem key={2}>
                Steg 2
                <OrderedListComponent>
                    <ListItem>Steg 2a</ListItem>
                    <ListItem>Steg 2b</ListItem>
                </OrderedListComponent>
            </ListItem>,
            <ListItem key={3}>Steg 3</ListItem>,
            <ListItem key={4}>Steg 4</ListItem>,
        ],
    },
};
