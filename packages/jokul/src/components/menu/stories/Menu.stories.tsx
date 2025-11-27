import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../button/Button.js";
import { Menu } from "../Menu.js";
import { MenuItem } from "../MenuItem.js";

import "../styles/_index.scss";
import { HamburgerIcon } from "../../icon/index.js";

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
                <MenuItem as="a" href="#forsikringene-dine">
                    Forsikringene dine
                </MenuItem>
                <MenuItem as="a" href="#meld-skade">
                    Meld skade
                </MenuItem>
                <MenuItem as="a" href="#skadesakene-dine">
                    Skadesakene dine
                </MenuItem>
                <Menu
                    triggerElement={
                        <MenuItem expandable={true}>Skjemaoppgaver</MenuItem>
                    }
                >
                    <MenuItem as="a" href="#flytte-forsikring">
                        Flytte forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#endre-forsikring">
                        Endre forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#oppsigelse">
                        Oppsigelse av forsikring
                    </MenuItem>
                </Menu>
                <MenuItem as="a" href="#kontakt-oss">
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

export const _Menu: Story = {};
