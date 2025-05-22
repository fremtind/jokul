import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label } from "../Label.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/InputGroup/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const LabelStory: Story = {
    name: "Label",
    args: {
        variant: "small",
        standAlone: false,
        srOnly: false,
    },
    render: (props) => <Label {...props}>Label</Label>,
};
