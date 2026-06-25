import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import contactChoices from "../../../../../../storybook-public/data/contactChoices.js";
import { Checkbox } from "../../checkbox/index.js";
import { CheckboxStory } from "../../checkbox/stories/Checkbox.stories.js";
import { Help } from "../../help/index.js";
import HelpStories from "../../help/stories/Help.stories.js";
import { RadioButton } from "../../radio-button/index.js";
import RadioButtonStories from "../../radio-button/stories/RadioButton.stories.js";
import { FieldGroup } from "../FieldGroup.js";
import { CheckboxPanel } from "../../checkbox-panel/index.js";
import { CheckboxPanelStory } from "../../checkbox-panel/stories/CheckboxPanel.stories.js";
import { RadioPanel } from "../../radio-panel/index.js";
import { RadioPanel as RadioPanelStory } from "../../radio-panel/stories/RadioPanel.stories.js";

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

export const FieldGroupCheckboxPanelGroup: Story = {
    name: "Checkbox panel gruppe",
    args: {
        legend: "Velg kontaktmetoder",
        children: contactChoices.map((value) => (
            <CheckboxPanel
                {...CheckboxPanelStory.args}
                key={value}
                value={value}
                name="kontaktmetode"
                label={value}
            >
                {value}
            </CheckboxPanel>
        )),
    },
};

export const FieldGroupRadioPanelGroup: Story = {
    name: "Radio panel gruppe",
    args: {
        legend: "Velg kontaktmetoder",
        children: contactChoices.map((value) => (
            <RadioPanel
                {...RadioPanelStory.args}
                key={value}
                value={value}
                name="kontaktmetode"
                label={value}
            />
        )),
    },
};

export const GroupWithTooltip: Story = {
    name: "Field Group med tooltip",
    args: {
        tooltip: <Help {...HelpStories.args} />,
    },
};
