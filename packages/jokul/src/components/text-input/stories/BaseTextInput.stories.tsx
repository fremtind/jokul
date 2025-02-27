import type { Meta, StoryObj } from "@storybook/react";
import { BaseTextInput as TextInputComponent } from "../BaseTextInput.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/TextInput",
    component: TextInputComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disabledReason: {
            control: "text",
        },
    },
} satisfies Meta<typeof TextInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseTextInput: Story = {
    args: {
        name: "base-text-input",
        disabled: false,
        disabledReason: "",
    },
};
