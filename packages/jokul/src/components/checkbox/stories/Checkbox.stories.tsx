import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "../Checkbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Checkbox",
    component: CheckboxComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
    args: { children: "Kjekk boks", name: "checkbox", value: "true" },
};
