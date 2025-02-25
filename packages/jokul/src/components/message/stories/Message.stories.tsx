import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Message as MessageComponent } from "../Message.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message",
    component: MessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {
    args: {
        children: `Hei, jeg er en melding av typen info`,
        title: "Info",
        variant: "info",
        dismissAction: { handleDismiss() {} },
    },
    render: (args) => (
        <MessageComponent {...args}>
            {`Hei, jeg er en melding av typen ${args.variant}`}
        </MessageComponent>
    ),
};
