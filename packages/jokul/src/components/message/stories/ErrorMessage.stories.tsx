import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage as Component } from "../Message.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message/ErrorMessage",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoMessage: Story = {
    args: {
        title: "",
        children: "Jeg er en feilmelding",
    },
};

export const Dismissable: Story = {
    args: {
        ...InfoMessage.args,
        dismissAction: {
            handleDismiss: console.log,
        },
    },
};
