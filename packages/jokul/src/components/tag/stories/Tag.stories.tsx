import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "../Tag.js";

const meta = {
    title: "Komponenter/Tag",
    component: Tag,
    tags: ["autodocs"],
    args: {
        children: "Hei",
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagStory: Story = {
    name: "Tag",
    render: (args) => <Tag {...args} />,
};

export const SuccessTagStory: Story = {
    name: "Success Tag",
    render: (args) => <SuccessTag {...args} />,
};

export const InfoTagStory: Story = {
    name: "Info Tag",
    render: (args) => <InfoTag {...args} />,
};

export const WarningTagStory: Story = {
    name: "Warning Tag",
    render: (args) => <WarningTag {...args} />,
};

export const ErrorTagStory: Story = {
    name: "Error Tag",
    render: (args) => <ErrorTag {...args} />,
};
