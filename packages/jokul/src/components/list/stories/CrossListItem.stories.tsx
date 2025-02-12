import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UnorderedList } from "../List.js";
import { CrossListItem as ListItemComponent } from "../ListItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/List/CrossListItem",
    component: ListItemComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CrossListItem: Story = {
    args: {
        children: "Jeg er et listepunkt",
    },
    decorators: (Story) => (
        <UnorderedList className="jkl-body">
            <Story />
        </UnorderedList>
    ),
};
