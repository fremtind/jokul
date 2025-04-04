import { Meta, StoryObj } from "@storybook/react";
import { MenuItemCheckbox as MenuItemCheckboxComponent } from "../MenuItemCheckbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItemCheckbox",
    component: MenuItemCheckboxComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItemCheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemCheckbox: Story = {
    args: {
        "aria-checked": false,
    },
};
