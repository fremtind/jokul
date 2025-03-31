import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { Tooltip as TooltipComponent } from "../Tooltip.js";
import { TooltipContent } from "../TooltipContent.js";
import { TooltipTrigger } from "../TooltipTrigger.js";

const meta = {
    title: "Komponenter/Tooltip",
    component: TooltipComponent,
    subcomponents: { TooltipTrigger, TooltipContent },
    tags: ["autodocs"],
    argTypes: {
        delay: { control: "number" },
        initialOpen: { control: "boolean" },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "left", "right"],
        },
        triggerOn: { control: "select", options: ["click", "hover"] },
    },
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
    args: {
        children: <p>eee</p>,
        delay: 2000,
        initialOpen: false,
        placement: "top",
        triggerOn: "hover",
    },
    render: (args) => (
        <p>
            Kontonummer:{" "}
            <TooltipComponent {...args}>
                <TooltipTrigger>eeeeee</TooltipTrigger>
                <TooltipContent>eee</TooltipContent>
            </TooltipComponent>
        </p>
    ),
};
