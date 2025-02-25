import { Meta, StoryObj } from "@storybook/react";
import { WarningMessage as MessageComponent } from "../Message.js";
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

export const WarningMessage: Story = {
    args: {
        children: "Hei, jeg er en melding av typen warning",
        title: "Warning",
        dismissAction: { handleDismiss() {} },
    },
};
