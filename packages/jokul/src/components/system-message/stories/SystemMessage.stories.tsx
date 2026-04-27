import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { SystemMessage } from "../SystemMessage.js";

import "../styles/_index.scss";
import { fn } from "storybook/test";

const meta = {
    title: "Komponenter/SystemMessage",
    component: SystemMessage,
    args: {
        dismissed: false,
        dismissAction: {
            buttonTitle: "Fjern melding",
            handleDismiss: fn(),
        },
        children: "Melding om noe som har skjedd i systemet.",
        maxContentWidth: "120ch",
        paddingLeft: "24px",
        role: "status",
        variant: "info",
    },
    argTypes: {
        role: {
            options: ["status", "presentation", "none"],
            control: "select",
        },
    },
} satisfies Meta<typeof SystemMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SystemMessage: Story = {};

export const AlleVarianter: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <SystemMessage {...args} variant="info">
                Info: melding om noe som har skjedd i systemet.
            </SystemMessage>
            <SystemMessage {...args} variant="success">
                Success: operasjonen ble fullført.
            </SystemMessage>
            <SystemMessage {...args} variant="warning">
                Warning: noe kan være galt, ta en kikk.
            </SystemMessage>
            <SystemMessage {...args} variant="error">
                Error: noe gikk galt og må rettes opp.
            </SystemMessage>
        </div>
    ),
};
