import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { MenuItemCheckbox as Component } from "../MenuItemCheckbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItemCheckbox",
    component: Component,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    decorators: (Story) => (
        <Flex direction="column" style={{ width: "350px" }}>
            <Story />
        </Flex>
    ),
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemCheckbox: Story = {
    args: {
        children: "Jeg er et menyelement",
        "aria-checked": false,
    },
};
