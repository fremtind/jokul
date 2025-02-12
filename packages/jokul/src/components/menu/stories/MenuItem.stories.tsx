import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { InfoIcon } from "../../icon/index.js";
import { MenuItem as Component } from "../MenuItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Menu/MenuItem",
    component: Component,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    decorators: (Story) => (
        <Flex direction="column" style={{ width: "350px" }}>
            <Story />
        </Flex>
    ),
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItem: Story = {
    args: {
        children: "Jeg er et menyelement",
    },
};

export const Ekspanderbar: Story = {
    args: {
        children: "Jeg er et menyelement",
        // @ts-ignore
        expandable: true,
    },
};

export const Ekstern: Story = {
    args: {
        children: "Jeg er et menyelement",
        as: "a",
        // @ts-ignore
        external: true,
    },
};

export const Icon: Story = {
    name: "Med ikon",
    args: {
        children: "Jeg er et menyelement",
        icon: <InfoIcon />,
    },
};
