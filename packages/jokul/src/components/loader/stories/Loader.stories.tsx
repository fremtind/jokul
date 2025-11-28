import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import "../styles/_index.scss";
import { Loader } from "../Loader.js";

const meta = {
    title: "Komponenter/Loader/Loader",
    component: Loader,
    args: {
        textDescription: "Laster innhold",
        variant: "large",
        inline: false,
        delay: 0,
        role: "status",
    },
    argTypes: {
        variant: { control: "select" },
        role: { control: "text" },
    },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderStory: Story = {
    name: "Loader",
    render: (args) => <Loader {...args} />,
};
