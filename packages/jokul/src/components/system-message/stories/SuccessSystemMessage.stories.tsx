import type { Meta, StoryObj } from "@storybook/react";
import { SuccessSystemMessage as SuccessSystemMessageComponent } from "../SystemMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage/SuccessSystemMessage",
    component: SuccessSystemMessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SuccessSystemMessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    name: "Success Message",
    value: "Success",
    children: "Hei, jeg er en varslingsmelding av typen Success ",
    defaultValue: 0,
};
export const SuccessSystemMessage: Story = {
    args: {
        ...baseArgs,
    },
};
