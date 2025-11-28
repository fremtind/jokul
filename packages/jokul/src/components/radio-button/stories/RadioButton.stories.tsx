import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioButton as RadioButtonComponent } from "../RadioButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/RadioButton/RadioButton",
    component: RadioButtonComponent,
} satisfies Meta<typeof RadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;

export const RadioButton: Story = {
    args: {
        value: "RadioButton",
    },
};
