import type { Meta, StoryObj } from "@storybook/react";
import { DismissButton as Component } from "../DismissButton.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message/DismissButton",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DismissButton: Story = {
    args: {},
};
