import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { InputGroup } from "../InputGroup.js";
import "../styles/_index.scss";
import "../../text-input/styles/_index.scss";
import { Help } from "../../help/index.js";
import HelpStories from "../../help/stories/Help.stories.js";
import BaseTextInputStories from "../../text-input/stories/BaseTextInput.stories.js";

const meta: Meta = {
    title: "Komponenter/Input Group",
    component: InputGroup,
    args: {
        label: "Fødeselsnummer",
        description: "Fødselsnummer består av 11 siffer.",
        children: (
            <BaseTextInput
                {...BaseTextInputStories.args}
                defaultValue="12345 123456"
            />
        ),
    },
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const _InputGroup: Story = {
    args: {},
};

export const InputGroupTooltip: Story = {
    name: "Input Group med tooltip",
    args: {
        tooltip: (
            <Help {...HelpStories.args}>
                Vi bruker fødselsnummer for å identifisere deg i systemene våre.
            </Help>
        ),
    },
};

export const MultiLineLabel: Story = {
    name: "Input Group med label over flere linjer",
    args: {
        label: (
            <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>
        ),
        description: undefined,
        tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>,
    },
};

export const MultiLineLabelAndDescription: Story = {
    name: "Input Group med lang label og description",
    args: {
        label: (
            <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>
        ),
        tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>,
    },
};
