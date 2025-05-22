import type { Meta, StoryObj } from "@storybook/react";
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
    label: "Hvilket merke er telefonen?",
    items: [
        { value: "Apple", label: "Apple" },
        { value: "Samsung", label: "Samsung" },
        { value: "Google", label: "Google" },
        { value: "OnePlus", label: "OnePlus" },
        { value: "Nokia", label: "Nokia" },
    ],
};

export const SelectStory: Story = {
    args: baseArgs,
    render: ({ ...props }) => <Select {...props} />,
};
