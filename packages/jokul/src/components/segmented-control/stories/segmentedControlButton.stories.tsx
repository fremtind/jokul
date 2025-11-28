import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { SegmentedControl } from "../SegmentedControl.js";
import { SegmentedControlButton } from "../SegmentedControlButton.js";

import "../styles/_index.scss";
import "../../list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/SegmentedControl/SegmentedControlButton",
    component: SegmentedControlButton,
    args: {
        separated: true,
        value: "Auto",
        children: "Auto",
    },
    decorators: [
        (Story) => (
            <SegmentedControl legend="Temavelger">
                <Story />
            </SegmentedControl>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof SegmentedControlButton>;

const themeChoices = ["Light", "Dark"];

export const SegmentedControlStory: Story = {
    name: "Segmented Control Button",
};

export const Temavelger: Story = {
    render: (args) => (
        <>
            <SegmentedControlButton {...args} name="temavalg">
                {args.value}
            </SegmentedControlButton>
            {themeChoices.map((choice) => (
                <SegmentedControlButton
                    value={choice}
                    key={choice}
                    name="temavalg"
                >
                    {choice}
                </SegmentedControlButton>
            ))}
        </>
    ),
};
