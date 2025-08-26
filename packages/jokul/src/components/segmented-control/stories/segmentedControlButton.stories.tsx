import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { FieldGroup } from "../../input-group/FieldGroup.js";
import { SegmentedControl } from "../SegmentedControl.js";
import { SegmentedControlButton } from "../SegmentedControlButton.js";

import "../styles/_index.scss";
import "../../list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/SegmentedControl",
    component: SegmentedControlButton,
    subcomponents: { FieldGroup, SegmentedControl },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SegmentedControlButton>;

const themeChoices = ["Light", "Dark"];

export const SegmentedControlStory: Story = {
    name: "Segmented Control Button",
    args: {
        separated: true,
        value: "Auto",
    },
    render: (args) => (
        <SegmentedControl legend="Velg tema">
            {themeChoices.map((choice) => (
                <SegmentedControlButton
                    value={choice}
                    key={choice}
                    name="temavalg"
                >
                    {choice}
                </SegmentedControlButton>
            ))}
            <SegmentedControlButton {...args} name="temavalg">
                {args.value}
            </SegmentedControlButton>
        </SegmentedControl>
    ),
};
