import type { Meta, StoryObj } from "@storybook/react";
import { Logo as Component } from "../Logo.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
    args: {
        style: { width: "100px" },
    },
};
