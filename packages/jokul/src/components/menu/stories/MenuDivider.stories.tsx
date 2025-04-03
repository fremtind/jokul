import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MenuDivider as MenuDividerComponent } from "../MenuDivider.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuDivider",
    component: MenuDividerComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuDividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuDivider: Story = {
    render: () => <MenuDividerComponent />,
};
