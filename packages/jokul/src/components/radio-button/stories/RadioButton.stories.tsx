import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import contactChoices from "../../../../../../storybook-public/data/contactChoices.js";
import { FieldGroup } from "../../input-group/index.js";
import { RadioButton } from "../RadioButton.js";
import BaseRadioStory from "./BaseRadioButton.stories.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Radio Button",
    component: RadioButton,
    args: {
        ...BaseRadioStory.args,
        children: "Radio button",
    },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const RadioButtonStory: Story = {
    name: "Radio Button",
};

export const RadioButtonGroup: Story = {
    render: (args) => (
        <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map((value) => (
                <RadioButton
                    {...RadioButtonStory.args}
                    {...args}
                    key={value}
                    value={value}
                    name="kontaktmetode"
                >
                    {value}
                </RadioButton>
            ))}
        </FieldGroup>
    ),
};
