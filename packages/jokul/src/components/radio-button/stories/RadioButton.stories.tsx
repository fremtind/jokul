import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton as RadioButtonComponent } from "../RadioButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/RadioButton/RadioButton",
    component: RadioButtonComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;

export const RadioButton: Story = {
    args: {
        value: "RadioButton",
    },
};
