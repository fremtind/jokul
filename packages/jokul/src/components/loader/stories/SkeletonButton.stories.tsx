import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonButton as Component } from "../skeletons/SkeletonButton.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonButton",
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

export const SkeletonButton: Story = {
    args: {
        width: "150px",
    },
};
