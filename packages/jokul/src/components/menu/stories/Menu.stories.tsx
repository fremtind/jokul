import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GhostButton } from "../../button/Button.js";
import { ChevronDownIcon, ErrorIcon } from "../../icon/index.js";
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
    args: {
        triggerElement: (
            <GhostButton
                icon={<ChevronDownIcon bold />}
                iconPosition="right"
                data-testid="open-menu"
            >
                Ola Nordmann
            </GhostButton>
        ),
        keepOpenOnClickOutside: false,
        children: (
            <>
                <MenuItem>Forsikringsprofil</MenuItem>
                <MenuComponent
                    triggerElement={
                        <MenuItem expandable={true}>Dokumenter</MenuItem>
                    }
                >
                    {" "}
                    <MenuItem as="a" href="https://jokul.fremtind.no/">
                        Jøkuls hjemmeside
                    </MenuItem>
                    <MenuItem as="a" href="https://fremtind.no/">
                        Fremtind Forsikring
                    </MenuItem>
                </MenuComponent>

                <MenuItem icon={<ErrorIcon />}>Skadesaker</MenuItem>
            </>
        ),
        isOpen: false,
    },
    render: ({ ...args }) => <MenuComponent {...args} />,
};
