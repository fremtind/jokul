import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FieldGroup } from "../../input-group/index.js";
import { Checkbox as CheckboxComponent } from "../Checkbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Checkbox",
    component: CheckboxComponent,
    parameters: {
        layout: "centered",
    },
    args: {
        value: "Kjekk boks",
        name: "checkbox",
        children: "Kjekk boks",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};

export const CheckboxGroup: Story = {
    render: (args) => {
        return (
            <FieldGroup legend="Velg kjeks">
                <CheckboxComponent {...args}>Kjeks 1</CheckboxComponent>
                <CheckboxComponent {...args}>Kjeks 2</CheckboxComponent>
                <CheckboxComponent {...args}>Kjeks 3</CheckboxComponent>
            </FieldGroup>
        );
    },
};
