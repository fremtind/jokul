import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Button } from "../../button/index.js";
import "../styles/_index.scss";
import { Icon } from "../../icon/index.js";
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
        children: "Send til saksbehandler",
        delay: 300,
        initialOpen: true,
        placement: "top",
        triggerOn: "hover",
    },
    render: (args) => (
        <TooltipComponent {...args}>
            <TooltipTrigger>
                <Button
                    variant="ghost"
                    icon={<Icon>send</Icon>}
                    iconPosition="right"
                />
            </TooltipTrigger>
            <TooltipContent>{args.children}</TooltipContent>
        </TooltipComponent>
    ),
};

export const TooltipInMenuBar: Story = {
    args: {
        children: "Send til saksbehandler",
        delay: 300,
        initialOpen: false,
        placement: "top",
        triggerOn: "hover",
    },
    parameters: {
        layout: "fullscreen",
    },
    render: (args) => (
        <menu
            style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: 0,
                padding: "1ch",
                width: "100%",
                display: "flex",
                border: "1px solid var(--jkl-color-border-separator)",
                backgroundColor: "var(--jkl-color-background-container-high)",
            }}
        >
            <li>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button
                            variant="ghost"
                            icon={<Icon>Person_remove</Icon>}
                            iconPosition="right"
                        />
                    </TooltipTrigger>
                    <TooltipContent>Gi fra deg saken</TooltipContent>
                </TooltipComponent>
            </li>

            <li>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button
                            variant="ghost"
                            icon={<Icon>add_notes</Icon>}
                            iconPosition="right"
                        />
                    </TooltipTrigger>
                    <TooltipContent>Legg til dokument</TooltipContent>
                </TooltipComponent>
            </li>

            <li style={{ marginLeft: "auto" }}>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button
                            variant="primary"
                            icon={<Icon>Send</Icon>}
                            iconPosition="right"
                        />
                    </TooltipTrigger>
                    <TooltipContent>{args.children}</TooltipContent>
                </TooltipComponent>
            </li>
        </menu>
    ),
};
