import type { Meta, StoryObj } from "@storybook/nextjs";
import { InfoIcon } from "../../icon/index.js";
import { MenuItem as MenuItemComponent } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItem",
    component: MenuItemComponent,
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
