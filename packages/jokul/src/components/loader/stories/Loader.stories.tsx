import type { Meta, StoryObj } from "@storybook/react";
import { Loader as Component } from "../Loader.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loader: Story = {
    args: {
        textDescription: "Laster inn…",
        variant: "large",
    },
};
