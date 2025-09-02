import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../../card/Card.js";
import {
    ErrorSystemMessage,
    InfoSystemMessage,
    SuccessSystemMessage,
    WarningSystemMessage,
} from "../SystemMessage.js";

import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const insurances = [
    "Hund og katt",
    "Livsforsikring",
    "Hus",
    "Innbo",
    "Reise",
    "Barneforsikring",
    "Hus 2",
    "Livsforsikring",
    "Hus",
    "Innbo",
    "Reise",
    "Barneforsikring",
    "Hus 2",
    "Livsforsikring",
    "Hus",
    "Innbo",
    "Reise",
    "Barneforsikring",
    "Hus 2",
    "Livsforsikring",
    "Hus",
    "Innbo",
    "Reise",
    "Barneforsikring",
    "Hus 2",
];

const meta = {
    title: "Komponenter/SystemMessage",
    component: ErrorSystemMessage,
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
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    backgroundColor: "var(--jkl-color-background-page)",
                }}
            >
                <Story />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "24px",
                        padding: "24px",
                    }}
                >
                    {insurances.map((insurance) => (
                        <Card key={insurance}>{insurance}</Card>
                    ))}
                </div>
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ErrorSystemMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorMessage: Story = {};

export const SuccessMessage: Story = {
    render: (args) => <SuccessSystemMessage {...args} />,
};

export const WarningMessage: Story = {
    render: (args) => <WarningSystemMessage {...args} />,
};

export const InfoMessage: Story = {
    render: (args) => <InfoSystemMessage {...args} />,
};
