import type { Meta, StoryObj } from "@storybook/nextjs";
import { BaseRadioButton as BaseRadioButtonComponent } from "../BaseRadioButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/RadioButton/BaseRadioButton",
    component: BaseRadioButtonComponent,
} satisfies Meta<typeof BaseRadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof BaseRadioButtonComponent>;

export const BaseRadioButton: Story = {
    args: {
        value: "BaseRadioButton",
    },
};
