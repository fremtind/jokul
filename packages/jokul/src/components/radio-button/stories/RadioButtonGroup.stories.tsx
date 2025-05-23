import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../RadioButton.js";
import { RadioButtonGroup as RadioButtonGroupComponent } from "../RadioButtonGroup.js";
import "../styles/_index.scss";
import React from "react";

const meta: Meta = {
    title: "Komponenter/RadioButton/RadioButtonGroup",
    component: RadioButtonGroupComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonGroupComponent>;

export default meta;

type Story = StoryObj<typeof RadioButtonGroupComponent>;

const choices = [
    "Send en e-post",
    "Ring meg",
    "Send et brev til folkeregistrert adresse",
];

export const RadioButtonGroup: Story = {
    args: {
        legend: "Dette er en RadioButtonGroup",
    },
    render: (args) => (
        <RadioButtonGroupComponent {...args}>
            {choices.map((value) => (
                <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>
            ))}
        </RadioButtonGroupComponent>
    ),
};
