import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Select } from "../Select.js";
import "../styles/_index.scss";

const options = [
    { value: "Apple", label: "Apple" },
    { value: "Samsung", label: "Samsung" },
    { value: "Google", label: "Google" },
    { value: "OnePlus", label: "OnePlus" },
    { value: "Nokia", label: "Nokia" },
    { value: "Annet", label: "Annet" },
];

const meta: Meta = {
    title: "Beta/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        description: "Du kan kun velge ett merke",
        placeholder: "Velg",
        required: false,
        disabled: false,
        children: options.map((option) => (
            <option value={option.value} key={option.value}>
                {option.label}
            </option>
        )),
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
};

export const InvalidStory: Story = {
    name: "Invalid Select",
    args: {
        required: true,
    },
    tags: ["dev"],
};
