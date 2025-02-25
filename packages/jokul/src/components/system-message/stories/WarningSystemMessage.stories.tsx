import type { Meta, StoryObj } from "@storybook/react";
import { WarningSystemMessage as WarningSystemMessageComponent } from "../SystemMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage/WarningSystemMessage",
    component: WarningSystemMessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof WarningSystemMessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    name: "Warning Message",
    value: "Warning",
    children: "Hei, jeg er en varslingsmelding av typen Warning ",
    defaultValue: 0,
};
export const WarningSystemMessage: Story = {
    args: {
        ...baseArgs,
    },
};
