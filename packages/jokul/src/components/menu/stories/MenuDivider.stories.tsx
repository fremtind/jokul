import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { MenuDivider as Component } from "../MenuDivider.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuDivider",
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

export const MenuDivider: Story = {};
