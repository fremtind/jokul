import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../button/Button.js";
import { HamburgerIcon } from "../../icon/index.js";
import { Menu } from "../Menu.js";
import { MenuDivider } from "../MenuDivider.js";
import { MenuItem } from "../MenuItem.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/Menu",
    component: Menu,
    args: {
        openOnHover: false,
        keepOpenOnClickOutside: false,
        initialPlacement: "bottom-start",
        triggerElement: (
            <Button
                variant="ghost"
                iconPosition="right"
                icon={<HamburgerIcon />}
            >
                Meny
            </Button>
        ),
        children: (
            <>
                <MenuItem as="a" href="#">
                    Forsikringene dine
                </MenuItem>
                <MenuItem as="a" href="#">
                    Meld skade
                </MenuItem>
                <MenuItem as="a" href="#">
                    Skadesakene dine
                </MenuItem>
                <Menu
                    triggerElement={
                        <MenuItem expandable>Endre forsikring</MenuItem>
                    }
                >
                    <MenuItem as="a" href="#">
                        Flytte forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#">
                        Endre dekning
                    </MenuItem>
                    <MenuItem as="a" href="#">
                        Si opp forsikring
                    </MenuItem>
                </Menu>
                <MenuDivider />
                <MenuItem as="a" href="#">
                    Kontakt oss
                </MenuItem>
            </>
        ),
    },
    argTypes: {
        isOpen: {
            control: { disable: true },
        },
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    name: "Menu",
};
