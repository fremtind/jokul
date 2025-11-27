import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import contactChoices from "../../../../../../storybook-public/data/contactChoices.js";
import { Checkbox } from "../../checkbox/index.js";
import { CheckboxStory } from "../../checkbox/stories/Checkbox.stories.js";
import { RadioButton } from "../../radio-button/index.js";
import RadioButtonStories from "../../radio-button/stories/RadioButton.stories.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import PopuptipStories from "../../tooltip/stories/Popuptip.stories.js";
import { FieldGroup } from "../FieldGroup.js";

const meta: Meta = {
    title: "Komponenter/Field Group",
    component: FieldGroup,
    args: {
        legend: "Velg kontaktmetode",
        description: "Vi kontakter deg bare ved nødtilfeller",
        errorLabel: "",
        name: "Kontaktmetode(r)",
        labelProps: { srOnly: false },
        children: contactChoices.map((value) => (
            <RadioButton
                {...RadioButtonStories.args}
                key={value}
                value={value}
                name="Kontaktmetode(r)"
            >
                {value}
            </RadioButton>
        )),
    },
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof FieldGroup>;

export const RadioGroup: Story = {
    name: "Radio gruppe",
};

export const FieldGroupCheckboxGroup: Story = {
    name: "Checkbox gruppe",
    args: {
        legend: "Velg kontaktmetoder",
        children: contactChoices.map((value) => (
            <Checkbox
                {...CheckboxStory.args}
                key={value}
                value={value}
                name="kontaktmetode"
            >
                {value}
            </Checkbox>
        )),
    },
};

export const GroupWithTooltip: Story = {
    name: "Field Group med tooltip",
    args: {
        tooltip: (
            <PopupTip
                {...PopuptipStories.args}
                content="Du kan bare velge en metode"
            />
        ),
    },
};
