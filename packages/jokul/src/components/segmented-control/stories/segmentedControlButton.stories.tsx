import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Icon } from "../../icon/Icon.js";
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

export const SegmentedControlStory: Story = {
    name: "Segmented Control Button",
    args: {
        separated: true,
        value: "Auto",
    },
    render: (args) => (
        <SegmentedControl legend="Velg tema">
            <SegmentedControlButton
                value={"light"}
                name="temavalg"
                icon={<Icon>light_mode</Icon>}
            >
                Light
            </SegmentedControlButton>
            <SegmentedControlButton
                value={"dark"}
                name="temavalg"
                icon={<Icon>dark_mode</Icon>}
            >
                Dark
            </SegmentedControlButton>
            <SegmentedControlButton
                {...args}
                name="temavalg"
                icon={<Icon>routine</Icon>}
            >
                {args.value}
            </SegmentedControlButton>
        </SegmentedControl>
    ),
};
