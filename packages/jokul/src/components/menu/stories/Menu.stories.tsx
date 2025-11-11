import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../button/Button.js";
import { ChevronDownIcon } from "../../icon/index.js";
import { Menu as MenuComponent } from "../Menu.js";
import { MenuItem } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/Menu",
    component: MenuComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
    argTypes: {
        open: {
            control: { disable: true },
        },
    },
    args: {
        triggerElement: (
            <Button
                variant="ghost"
                icon={<ChevronDownIcon bold />}
                iconPosition="right"
                data-testid="open-menu"
            >
                Meny
            </Button>
        ),
        keepOpenOnClickOutside: false,
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
                <MenuComponent
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
                </MenuComponent>
                <MenuItem as="a" href="#kontakt-oss">
                    Kontakt oss
                </MenuItem>
            </>
        ),
    },
    render: ({ open, ...args }) => <MenuComponent {...args} />,
};
