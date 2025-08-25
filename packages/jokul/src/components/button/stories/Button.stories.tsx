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
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    type: "submit",
    children: "Knapp",
    loader: {
        showLoader: false,
        textDescription: "laster inn",
    },
};
export const Button: Story = {
    args: baseArgs,
};

export const PrimaryButton: Story = {
    args: {
        ...baseArgs,
        variant: "primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        ...baseArgs,
        variant: "secondary",
    },
};

export const TertiaryButton: Story = {
    args: {
        ...baseArgs,
        variant: "tertiary",
    },
};

export const GhostButton: Story = {
    args: {
        ...baseArgs,
        variant: "ghost",
    },
};
