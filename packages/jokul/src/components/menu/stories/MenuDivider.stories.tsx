import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { MenuDivider as MenuDividerComponent } from "../MenuDivider.js";
import { MenuItem } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuDivider",
    component: MenuDividerComponent,
} satisfies Meta<typeof MenuDividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    name: "MenuDivider",
    render: () => (
        <div
            style={{ display: "flex", flexDirection: "column", width: "280px" }}
        >
            <MenuItem as="a" href="#">
                Forsikringene dine
            </MenuItem>
            <MenuItem as="a" href="#">
                Meld skade
            </MenuItem>
            <MenuDividerComponent />
            <MenuItem as="a" href="#">
                Kontakt oss
            </MenuItem>
        </div>
    ),
};
