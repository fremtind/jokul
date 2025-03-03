import type { Meta, StoryObj } from "@storybook/react";
import { BaseTextInput as TextInputComponent } from "../BaseTextInput.js";
import "../styles/_index.scss";

const meta = {
    title: "Skjemaelementer/TextInput/BaseTextInput",
    component: TextInputComponent,
    parameters: {
        controls: { expanded: true, sort: "alpha" },
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "text",
            description: "Verdien i feltet",
        },
        unit: {
            control: "text",
        },
        width: {
            control: "text",
            description: "Absolutt verdi for bredden til input-feltet",
        },
        maxLength: {
            control: "number",
        },
        action: {
            type: "function",
        },
        actionButton: {
            type: "function",
        },
        name: {
            control: "text",
            table: {
                disable: true,
            },
        },
        density: { table: { disable: true } },
        align: {
            table: { defaultValue: { summary: "left" } },
        },
    },
} satisfies Meta<typeof TextInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseTextInput: Story = {
    args: {
        name: "base-text-input",
        align: "left",
        placeholder: "Ditt innhold",
        maxLength: 500,
        disabled: false,
        readOnly: false,
        defaultValue: "Ditt innhold",
    },
};
