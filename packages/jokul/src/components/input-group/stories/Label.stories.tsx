import type { Meta, StoryObj } from "@storybook/nextjs";
import { Label } from "../Label.js";
import "../styles/_index.scss";
import React from "react";
import { Help } from "../../help/index.js";
import HelpStories from "../../help/stories/Help.stories.js";

const meta: Meta = {
    title: "Komponenter/Label",
    component: Label,
    args: {
        standAlone: true,
        srOnly: false,
        children: "Label",
    },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const LabelStory: Story = {
    name: "Label",
};

export const LabelMedHelp: Story = {
    args: {
        children: (
            <>
                <span style={{ whiteSpace: "normal" }}>Label</span>
                {"\u00A0"}
                <Help {...HelpStories.args} />
            </>
        ),
    },
};
