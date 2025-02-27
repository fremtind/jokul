import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar as ProgressBarComponent } from "../ProgressBar.js";
import "../styles/_index.scss";
import React from "react";

const meta: Meta = {
    title: "Komponenter/ProgressBar",
    component: ProgressBarComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProgressBarComponent>;

export default meta;

type Story = StoryObj<typeof ProgressBarComponent>;

export const ProgressBar: Story = {
    args: {
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
    },
    render: (args) => (
        <div {...args} style={{ width: "100%", minWidth: "240px" }}>
            <ProgressBarComponent {...args} />
        </div>
    ),
};
