import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button.js";
import "../styles/_index.scss";
import { Flex } from "../../flex/Flex.jsx";
import { CheckIcon, CloseIcon } from "../../icon/index.js";

const meta = {
    title: "Komponenter/Button",
    component: Button,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    args: {
        type: "button",
        children: "Knapp",
        variant: "secondary",
        loader: {
            showLoader: false,
            textDescription: "laster inn",
        },
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {};

export const PrimaryButton: Story = {
    args: {
        variant: "primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        variant: "secondary",
    },
};

export const TertiaryButton: Story = {
    args: {
        variant: "tertiary",
    },
};

export const GhostButton: Story = {
    args: {
        variant: "ghost",
    },
};

export const ShortButtons: Story = {
    name: "Knapper med kort tekst",
    argTypes: {
        as: {
            table: { disable: true },
        },
        children: {
            table: { disable: true },
        },
        iconLeft: {
            table: { disable: true },
        },
        iconRight: {
            table: { disable: true },
        },
        icon: {
            control: "boolean",
        },
    },
    render: ({ icon }) => (
        <Flex gap={16}>
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
    ),
};
