import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Select } from "../Select.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select",
    component: Select,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

const baseArgs = {
    name: "Select",
    args: {
        id: "produsent",
        name: "produsent",
        label: "Hvilket merke er telefonen?",
        helpLabel: undefined,
        errorLabel: undefined,
        items: undefined,
        value: undefined,
    },
};

export const SelectStory: Story = {
    args: baseArgs,
    render: ({ ...props }) => <Select {...props}>WIP eksempel</Select>,
};
