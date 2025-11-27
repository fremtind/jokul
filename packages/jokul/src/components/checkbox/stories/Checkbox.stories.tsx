import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import contactChoices from "../../../../../../storybook-public/data/contactChoices.js";
import { FieldGroup } from "../../input-group/index.js";
import { Checkbox } from "../Checkbox.js";

const meta = {
    title: "Komponenter/Checkbox",
    component: Checkbox,
    args: {
        value: "kjekk",
        name: "checkbox",
        children: "Kjekk boks",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
    name: "Checkbox",
};

export const CheckboxGroup: Story = {
    render: (args) => (
        <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map((value) => (
                <Checkbox
                    {...CheckboxStory.args}
                    {...args}
                    key={value}
                    value={value}
                    name="kontaktmetode"
                >
                    {value}
                </Checkbox>
            ))}
        </FieldGroup>
    ),
};
