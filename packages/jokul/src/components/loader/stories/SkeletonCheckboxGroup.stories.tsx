import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonCheckboxGroup as Component } from "../skeletons/SkeletonCheckboxGroup.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonCheckboxGroup",
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

export const SkeletonCheckboxGroup: Story = {
    args: {
        checkboxes: 3,
    },
};
