import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonAnimation as Component } from "../skeletons/SkeletonAnimation.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonAnimation",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonAnimation: Story = {
    args: {
        children: "Sett inn elementer her",
    },
};
