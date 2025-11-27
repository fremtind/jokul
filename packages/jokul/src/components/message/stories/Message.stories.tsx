import type { Meta, StoryObj } from "@storybook/nextjs";
import { Message } from "../Message.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message",
    component: Message,
    args: {
        children: "Hei, jeg er en melding av typen info",
        title: "Info",
        dismissAction: { handleDismiss() {} },
        variant: "info",
        dismissed: false,
        fullWidth: false,
    },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Message: Story = {};

export const InfoMessage: Story = {
    args: {
        variant: "info",
    },
};

export const ErrorMessage: Story = {
    args: {
        variant: "error",
    },
};

export const SuccessMessage: Story = {
    args: {
        variant: "success",
    },
};

export const WarningMessage: Story = {
    args: {
        variant: "warning",
    },
};
