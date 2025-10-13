import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { InputGroup } from "../InputGroup.js";
import "../styles/_index.scss";
import "../../text-input/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/InputGroup",
    component: InputGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "forms"],
    args: {
        label: "Fødeselsnummer",
        labelProps: {
            srOnly: false,
            standAlone: false,
        },
        helpLabel: "Hjelpetekst",
    },
    argTypes: {
        label: {
            control: "text",
        },
    },
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const InputGroupStory: Story = {
    name: "InputGroup",
    render: (props) => (
        <InputGroup {...props}>
            <BaseTextInput />
        </InputGroup>
    ),
};
