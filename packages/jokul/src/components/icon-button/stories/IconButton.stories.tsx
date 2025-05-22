import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PenIcon } from "../../icon/icons/PenIcon.js";
import { IconButton } from "../IconButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconButtonStory: Story = {
    name: "IconButton",
    args: {
        children: <PenIcon />,
    },
    render: (props) => <IconButton {...props} />,
};
