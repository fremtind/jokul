import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UnorderedList } from "../List.js";
import { CheckListItem as ListItemComponent } from "../ListItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/List/CheckListItem",
    component: ListItemComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckListItem: Story = {
    args: {
        children: "Jeg er et listepunkt",
    },
    decorators: (Story) => (
        <UnorderedList>
            <Story />
        </UnorderedList>
    ),
};
