import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BETA_Select } from "../BETA_Select.js";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const meta: Meta = {
    title: "Expressive/Select",
    component: BETA_Select,
    parameters: {
        layout: "centered",
    },
    args: {
        placeholder: "Velg",
        label: "Skriv noe her",
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof BETA_Select>;

export const _Select: Story = {
    render: (args) => (
        <BETA_Select {...args}>
            <optgroup label="Gruppe 1">
                <option>Valg 1.1</option>
                <option>Valg 1.2</option>
                <option>Valg 1.3</option>
                <option>Valg 1.4</option>
                <option>Valg 1.5</option>
            </optgroup>
            <optgroup label="Gruppe 2">
                <option>Valg 2.1</option>
                <option>Valg 2.2</option>
                <option>Valg 2.3</option>
            </optgroup>
            <optgroup label="Gruppe 3">
                <option>Valg 3.1</option>
            </optgroup>
        </BETA_Select>
    ),
};
