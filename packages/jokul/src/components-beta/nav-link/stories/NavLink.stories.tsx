import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { BETA_NavLink } from "../index.js";

const meta: Meta = {
    title: "Beta/Nav Link",
    component: BETA_NavLink,
    parameters: {
        layout: "centered",
    },
    args: {
        title: "Vurderingen vår",
        href: "#",
        description: "",
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof BETA_NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavLinkStory: Story = {
    name: "Nav Link",
};
