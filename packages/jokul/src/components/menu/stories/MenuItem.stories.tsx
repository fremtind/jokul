import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { WarningIcon } from "../../icon/index.js";
import { MenuItem as MenuItemComponent } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItem",
    component: MenuItemComponent,
    args: {
        children: "Forsikringene dine",
    },
} satisfies Meta<typeof MenuItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    name: "MenuItem",
};

export const MedIkon: Story = {
    name: "Med ikon",
    args: {
        icon: <WarningIcon />,
        children: "Meld skade",
    },
};

export const EksternLenke: Story = {
    name: "Ekstern lenke",
    args: {
        as: "a",
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer",
        external: true,
        children: "Ekstern side",
    },
};
