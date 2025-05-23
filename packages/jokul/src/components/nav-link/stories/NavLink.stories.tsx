import type { Meta, StoryObj } from "@storybook/react";
import { NavLink as NavLinkComponent } from "../NavLink.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/NavLink",
    component: NavLinkComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        href: {
            control: "text",
            defaultValue: "https://www.fremtind.no",
        },
    },
} satisfies Meta<typeof NavLinkComponent>;

export default meta;

type Story = StoryObj<typeof NavLinkComponent>;

export const NavLink: Story = {
    args: {
        children: "NavLink",
        href: "https://www.fremtind.no",
    },
};
