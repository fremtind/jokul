import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { MenuItemCheckbox as MenuItemCheckboxComponent } from "../MenuItemCheckbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItemCheckbox",
    component: MenuItemCheckboxComponent,
    args: {
        children: "Vis kun aktive forsikringer",
        "aria-checked": false,
    },
} satisfies Meta<typeof MenuItemCheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    name: "MenuItemCheckbox",
    render: (args) => {
        const [checked, setChecked] = React.useState(args["aria-checked"]);
        return (
            <MenuItemCheckboxComponent
                {...args}
                aria-checked={checked}
                onChange={(_, val) => setChecked(val)}
            />
        );
    },
};
