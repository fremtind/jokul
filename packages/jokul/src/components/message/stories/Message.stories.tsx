import type { Meta, StoryObj } from "@storybook/nextjs";
import { Message } from "../Message.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message",
    component: Message,
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Message: Story = {
    args: {
        children: "Hei, jeg er en melding av typen info",
        title: "Info",
        dismissAction: { handleDismiss() {} },
        variant: "info",
    },
};
