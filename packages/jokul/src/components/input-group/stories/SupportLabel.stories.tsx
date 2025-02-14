import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SupportLabel } from "../SupportLabel.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/InputGroup/SupportLabel",
    component: SupportLabel,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
        },
    },
} satisfies Meta<typeof SupportLabel>;

export default meta;

type Story = StoryObj<typeof SupportLabel>;

export const SupportLabelStory: Story = {
    name: "SupportLabel",
    args: {
        labelType: "help",
    },
    render: (props) => (
        <SupportLabel
            {...props}
            label={
                props.label
                    ? props.label
                    : `Dette er en ${props.labelType} label`
            }
        />
    ),
};
