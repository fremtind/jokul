import type { Meta, StoryObj } from "@storybook/nextjs";
import { MenuItemCheckbox as MenuItemCheckboxComponent } from "../MenuItemCheckbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItemCheckbox",
    component: MenuItemCheckboxComponent,
} satisfies Meta<typeof MenuItemCheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemCheckbox: Story = {
    args: {
        "aria-checked": false,
    },
};
