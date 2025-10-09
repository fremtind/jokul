import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BETA_Select } from "../BETA_Select.js";
import "../styles/_index.scss";
import "../../help/styles/_index.scss";
import "../../button/styles/_index.scss";

const meta = {
    title: "Komponenter/Select/BETA_Select,",
    component: BETA_Select,
    args: {
        placeholder: "hei",
    },
} satisfies Meta<typeof BETA_Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Default: Story = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        help: {
            buttonText: "Hei",
            children: <p>Hjelpetekst</p>,
        },
    },
    render: (args) => (
        <BETA_Select {...args}>
            <option>Hei</option>
        </BETA_Select>
    ),
};

export const _GroupedOptions: Story = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        help: {
            buttonText: "Hei",
            children: <p>Hjelpetekst</p>,
        },
    },
    render: (args) => (
        <BETA_Select {...args}>
            <optgroup label="Samsung">
                <option>Galaxy S24</option>
                <option>Galaxy S25</option>
            </optgroup>
            <optgroup label="Apple">
                <option>iPhone 15</option>
                <option>iPhone 16</option>
                <option>iPhone 17</option>
            </optgroup>
        </BETA_Select>
    ),
};
