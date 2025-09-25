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
        value: "kjekk",
        name: "checkbox",
        children: "Kjekk boks",
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};

export const CheckboxGroup: Story = {
    render: (args) => {
        return (
            <FieldGroup legend="Velg kjeks">
                <CheckboxComponent {...args} value="ritz">
                    Ritz
                </CheckboxComponent>
                <CheckboxComponent {...args} value="biscoff">
                    Biscoff
                </CheckboxComponent>
                <CheckboxComponent {...args} value="tuc">
                    Tuc Paprika
                </CheckboxComponent>
            </FieldGroup>
        );
    },
};
