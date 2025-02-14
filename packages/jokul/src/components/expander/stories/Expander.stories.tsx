import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GreenCheckIcon } from "../../icon/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { Expander } from "../Expander.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/ExpandablePanel/Expander",
    component: ExpandablePanel,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type StoryExpander = StoryObj<typeof Expander>;

export const ExpanderStory: StoryExpander = {
    name: "Expander",
    args: {
        icon: true,
        flipDirection: false,
    },
    render: ({ icon, ...props }) => (
        <Expander icon={icon ? <GreenCheckIcon /> : undefined} {...props}>
            Når er det vi faktisk er åpne?
        </Expander>
    ),
};
