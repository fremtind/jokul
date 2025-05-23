import type { Meta, StoryObj } from "@storybook/react";
import { BaseRadioButton as BaseRadioButtonComponent } from "../BaseRadioButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/RadioButton/BaseRadioButton",
    component: BaseRadioButtonComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof BaseRadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof BaseRadioButtonComponent>;

export const BaseRadioButton: Story = {
    args: {
        value: "BaseRadioButton",
    },
};
