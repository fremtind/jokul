import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BETA_NavLink } from "../index.js";

import "../styles/_index.scss";
import "../../../components/button/styles/_index.scss";

const meta: Meta = {
    title: "Beta/Nav Link",
    component: BETA_NavLink,
    parameters: {
        layout: "centered",
    },
    args: {
        as: "a",
        title: "Vurderingen vår",
        href: "#",
        description: "",
        to: "#",
    },
    argTypes: {
        title: {
            control: "text",
            table: {
                category: "Innhold",
            },
        },
        description: {
            table: {
                category: "Innhold",
            },
        },
        as: {
            description: "Bytt ut med ditt rammeverks lenke-element",
            control: "text",
            table: {
                category: "Lenke",
            },
        },
        href: {
            if: { arg: "as", eq: "a" },
            table: {
                category: "Lenke",
            },
        },
        to: {
            if: { arg: "as", neq: "a" },
            control: "text",
            table: {
                category: "Lenke",
            },
        },
        ref: {
            table: {
                category: "React",
            },
        },
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof BETA_NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavLinkStory: Story = {
    name: "Nav Link",
    render: (args) => <BETA_NavLink {...args} title={args.title} as="a" />,
};
