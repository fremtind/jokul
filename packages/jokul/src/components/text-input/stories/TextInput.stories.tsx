import type { Meta, StoryObj } from "@storybook/react";
import { TextInput as TextInputComponent } from "../TextInput.js";
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

export const TextInput: Story = {
    args: {
        name: "text-input",
        label: "Label",
        disabled: false,
        disabledReason: "",
    },
};
