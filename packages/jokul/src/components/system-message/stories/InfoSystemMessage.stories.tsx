import type { Meta, StoryObj } from "@storybook/react";
import { InfoSystemMessage as InfoSystemMessageComponent } from "../SystemMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage/InfoSystemMessage",
    component: InfoSystemMessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof InfoSystemMessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    name: "Info Message",
    value: "Info",
    children: "Hei, jeg er en varslingsmelding av typen Info ",
    defaultValue: 0,
};
export const InfoSystemMessage: Story = {
    args: {
        ...baseArgs,
    },
};
