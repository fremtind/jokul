import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { InputGroup } from "../InputGroup.js";
import "../styles/_index.scss";
import "../../text-input/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Input Group",
    component: InputGroup,
    args: {
        description: "Fødselsnummer består av 11 siffer.",
    },
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const InputGroupStory: Story = {
    name: "InputGroup",
    args: {
        label: "Fødeselsnummer",
    },
    render: (props) => (
        <InputGroup {...props}>
            <BaseTextInput />
        </InputGroup>
    ),
};
