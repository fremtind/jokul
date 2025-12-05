import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip } from "../Tooltip.js";
import { TooltipContent } from "../TooltipContent.js";
import { TooltipTrigger } from "../TooltipTrigger.js";
import { _TooltipTrigger as TriggerStory } from "./TooltipTrigger.stories.js";

import "../styles/_index.scss";
import { Button } from "../../button/index.js";
import { Icon } from "../../icon/index.js";

const meta = {
    title: "Komponenter/Tooltip",
    component: TooltipContent,
    args: {
        children: "Tooltip Content",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TooltipContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _TooltipContent: Story = {
    render: (args) => (
        <Tooltip initialOpen>
            <TooltipTrigger {...TriggerStory.args}>
                <Button
                    variant="ghost"
                    icon={<Icon>send</Icon>}
                    iconPosition="right"
                />
            </TooltipTrigger>
            <TooltipContent {...args} />
        </Tooltip>
    ),
};
