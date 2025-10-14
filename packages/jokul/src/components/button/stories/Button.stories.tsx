import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button.js";
import "../styles/_index.scss";
import { Flex } from "../../flex/Flex.jsx";
import { CheckIcon, CloseIcon, PlusIcon } from "../../icon/index.js";

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
        variant: "primary",
        icon: undefined,
        loader: {
            showLoader: false,
            textDescription: "Laster inn avtaler",
        },
    },
    argTypes: {
        iconLeft: {
            table: { disable: true },
        },
        iconRight: {
            table: { disable: true },
        },
        iconPosition: {
            control: { type: "radio" },
            options: ["left", "right"],
        },
        variant: {
            control: "select",
            options: ["primary", "secondary", "ghost"],
        },
        ref: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
    name: "Primær knapp",
};

export const SecondaryButton: Story = {
    name: "Sekundær knapp",
    args: {
        variant: "secondary",
    },
};

export const GhostButton: Story = {
    name: "Ghost knapp",
    args: {
        variant: "ghost",
    },
};

export const ButtonWithIcon: Story = {
    name: "Knapp med ikon",
    args: {
        variant: "primary",
        icon: <PlusIcon bold={false} />,
        iconPosition: "right",
        children: "Knapp",
    },
};

export const ButtonWithLoader: Story = {
    name: "Knapp med loader",
    args: {
        variant: "primary",
        children: "Klikk for å vise loader",
        loader: {
            showLoader: true,
            textDescription: "Lagrer...",
        },
    },
    render: (args) => {
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSave = () => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
        };

        return (
            <Button
                {...args}
                onClick={handleSave}
                loader={{
                    showLoader: isLoading,
                    textDescription: "Lagrer...",
                }}
            >
                {args.children}
            </Button>
        );
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
