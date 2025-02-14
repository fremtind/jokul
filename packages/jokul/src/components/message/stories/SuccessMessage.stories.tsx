import type { Meta, StoryObj } from "@storybook/react";
import { SuccessMessage as Component } from "../Message.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message/SuccessMessage",
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
        children: "Jeg er en bekreftende melding",
    },
};
