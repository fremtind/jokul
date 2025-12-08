import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../button/index.js";
import { Icon } from "../../icon/index.js";
import { Tooltip } from "../Tooltip.js";
import { TooltipTrigger } from "../TooltipTrigger.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Tooltip",
    component: TooltipTrigger,
    args: {
        children: (
            <Button
                variant="primary"
                icon={<Icon>send</Icon>}
                iconPosition="right"
            />
        ),
    },
    decorators: (Story) => (
        <Tooltip>
            <Story />
        </Tooltip>
    ),
    tags: ["autodocs"],
} satisfies Meta<typeof TooltipTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _TooltipTrigger: Story = {};
