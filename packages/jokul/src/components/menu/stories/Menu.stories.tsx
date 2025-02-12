import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../button/Button.js";
import { DotsIcon, ErrorIcon } from "../../icon/index.js";
import { Menu as Component } from "../Menu.js";
import { MenuDivider } from "../MenuDivider.js";
import { MenuItem } from "../MenuItem.js";
import "../../button/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu",
    component: Component,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
    args: {
        triggerElement: (
            <Button icon={<DotsIcon />} title="Vis meny" variant="ghost" />
        ),
        children: [
            <MenuItem key={1}>Forsikringsprofil</MenuItem>,
            <MenuItem key={2} onClick={() => console.log("Hei fra Dokumenter")}>
                Dokumenter
            </MenuItem>,
            <MenuItem key={3} icon={<ErrorIcon />}>
                Skadesaker
            </MenuItem>,
            <MenuDivider key={4} />,
            <Component
                key={5}
                triggerElement={
                    <MenuItem expandable={true}>Ressurser</MenuItem>
                }
            >
                <MenuItem as="a" href="https://jokul.fremtind.no/">
                    Jøkuls hjemmeside
                </MenuItem>
                <MenuItem as="a" href="https://fremtind.no/">
                    Fremtind Forsikring
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    as="a"
                    href="https://www.w3.org/TR/WCAG22/"
                    external
                    target="_blank"
                >
                    WCAG 2.2
                </MenuItem>
            </Component>,
        ],
    },
};
