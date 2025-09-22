import type { Meta, StoryObj } from "@storybook/react";
import { TooltipButton } from "../TooltipButton.jsx";
import React from "react";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const meta = {
    title: "Komponenter/Tooltip Button",
    component: TooltipButton,
    tags: ["autodocs", "popover"],
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div style={{ height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TooltipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipButtonStory: Story = {
    name: "Tooltip Button",
    args: {
        title: "Hvorfor er prisen 0?",
        content: (
            <p>
                Avtalen er betalt av arbeidsgiveren din. Du betaler ingenting.
            </p>
        ),
        popover: "auto",
        position: "top",
    },
    render: (args) => (
        <p>
            Avtalepris: 0 kr/mnd. <TooltipButton {...args} />
        </p>
    ),
};
