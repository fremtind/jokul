import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonElement as Component } from "../skeletons/SkeletonElement.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonElement",
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

export const SkeletonElement: Story = {
    args: {
        height: "50px",
        width: "200px",
    },
};
