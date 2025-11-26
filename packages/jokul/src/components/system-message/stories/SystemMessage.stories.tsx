import type { Meta, StoryObj } from "@storybook/react";
import { SystemMessage } from "../SystemMessage.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage",
    component: SystemMessage,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        dismissed: false,
        dismissAction: {
            buttonTitle: "Fjern melding",
            handleDismiss: () => "",
        },
        children: "Melding om noe som har skjedd i systemet.",
        maxContentWidth: "120ch",
        paddingLeft: "24px",
        role: "status",
        variant: "info",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SystemMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SystemMessage: Story = {};
