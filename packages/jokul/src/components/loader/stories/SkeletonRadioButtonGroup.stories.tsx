import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonRadioButtonGroup as Component } from "../skeletons/SkeletonRadioButtonGroup.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonRadioButtonGroup",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: (Story) => (
        <SkeletonAnimation>
            <Story />
        </SkeletonAnimation>
    ),
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonRadioButtonGroup: Story = {
    args: {
        radioButtons: 3,
    },
};
