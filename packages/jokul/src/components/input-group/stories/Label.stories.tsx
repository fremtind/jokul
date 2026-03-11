import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Label } from "../Label.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Label",
    component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
    name: "Label",
    args: {
        ["data-size"]: "small",
        srOnly: false,
    },
    render: (props) => <Label {...props}>Label</Label>,
};
