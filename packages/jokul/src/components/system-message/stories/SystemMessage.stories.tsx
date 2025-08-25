import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../../card/Card.js";
import { Flex } from "../../flex/Flex.js";
import {
    ErrorSystemMessage,
    InfoSystemMessage,
    SuccessSystemMessage,
    WarningSystemMessage,
} from "../SystemMessage.js";

import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const meta = {
    title: "Komponenter/SystemMessage",
    component: ErrorSystemMessage,
    parameters: {
        layout: "centered",
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
    tags: ["autodocs"],
} satisfies Meta<typeof ErrorSystemMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const insurances = [
    "Hund og katt",
    "Livsforsikring",
    "Hus",
    "Innbo",
    "Reise",
    "Barneforsikring",
    "Hus 2",
];
const exampleContent = (
    <Flex
        gap={24}
        wrap
        direction="column"
        alignContent="center"
        justifyContent="center"
        style={{ padding: "24px" }}
    >
        {insurances.map((insurance) => (
            <Card key={insurance} clickable>
                {insurance}
            </Card>
        ))}
    </Flex>
);

export const ErrorMessage: Story = {
    render: (args) => {
        return (
            <div
                style={{
                    width: "70svw",
                    height: "50dvh",
                    backgroundColor: "var(--jkl-color-background-page)",
                    overflow: "scroll",
                }}
            >
                <ErrorSystemMessage {...args} />
                {exampleContent}
            </div>
        );
    },
};

export const SuccessMessage: Story = {
    render: (args) => {
        return (
            <div
                style={{
                    width: "70svw",
                    height: "50dvh",
                    backgroundColor: "var(--jkl-color-background-page)",
                    overflow: "scroll",
                }}
            >
                <SuccessSystemMessage {...args} />
                {exampleContent}
            </div>
        );
    },
};

export const WarningMessage: Story = {
    render: (args) => {
        return (
            <div
                style={{
                    width: "70svw",
                    height: "50dvh",
                    backgroundColor: "var(--jkl-color-background-page)",
                    overflow: "scroll",
                }}
            >
                <WarningSystemMessage {...args} />
                {exampleContent}
            </div>
        );
    },
};

export const InfoMessage: Story = {
    render: (args) => {
        return (
            <div
                style={{
                    width: "70svw",
                    height: "50dvh",
                    backgroundColor: "var(--jkl-color-background-page)",
                    overflow: "scroll",
                }}
            >
                <InfoSystemMessage {...args} />
                {exampleContent}
            </div>
        );
    },
};
