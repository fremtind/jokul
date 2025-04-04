import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { InfoIcon } from "../../icon/index.js";
import { MenuItem as MenuItemComponent } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItem",
    component: MenuItemComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItem: Story = {
    args: {
        icon: false,
        expandable: false,
    },
    render: ({ icon, ...props }) => (
        <MenuItemComponent icon={icon ? <InfoIcon /> : undefined} {...props}>
            Hei, jeg er et MenuItem
        </MenuItemComponent>
    ),
};
