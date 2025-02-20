import type { Meta, StoryObj } from "@storybook/react";
import { ErrorSystemMessage as ErrorSystemMessageComponent } from "../SystemMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage/ErrorSystemMessage",
    component: ErrorSystemMessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ErrorSystemMessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    name: "Error Message",
    value: "Error",
    children: "Hei, jeg er en varslingsmelding av typen Error ",
    defaultValue: 0,
};
export const ErrorSystemMessage: Story = {
    args: {
        ...baseArgs,
    },
};
