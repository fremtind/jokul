import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "../Button.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Button",
    component: ButtonComponent,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    args: {
        type: "button",
        children: "Knapp",
        variant: "secondary",
        loader: {
            showLoader: false,
            textDescription: "laster inn",
        },
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};

export const PrimaryButton: Story = {
    args: {
        variant: "primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        variant: "secondary",
    },
};

export const TertiaryButton: Story = {
    args: {
        variant: "tertiary",
    },
};

export const GhostButton: Story = {
    args: {
        variant: "ghost",
    },
};
