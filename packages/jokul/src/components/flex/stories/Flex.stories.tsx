import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import tokens from "../../../tokens.js";
import { Card } from "../../card/index.js";
import { Flex } from "../Flex.js";
import "../styles/_index.scss";
import "../../card/styles/_index.scss";

const spacing = Object.keys(tokens.spacing);

const meta = {
    title: "Komponenter/Flex",
    component: Flex,
    args: {
        children: (
            <>
                {[...Array(14)].map((_, index) => (
                    <Card key={index} outlined>
                        {index + 1}
                    </Card>
                ))}
            </>
        ),
        direction: "row",
        wrap: "wrap",
        gap: "xs",
    },
    argTypes: {
        direction: {
            control: "select",
            options: ["row", "row-reverse", "column", "column-reverse"],
            table: { category: "Flyt" },
        },
        wrap: {
            control: "select",
            options: ["wrap", "nowrap", "reverse"],
            table: { category: "Flyt" },
        },

        gap: {
            control: "select",
            options: spacing,
            description:
                'Avstand mellom elementene. To verdier, som `"8 32"`, gir ulik `row-gap` og `column-gap`.',
            table: { category: "Avstand" },
        },

        justifyContent: {
            control: "select",
            options: [
                "normal",
                "start",
                "center",
                "end",
                "space-between",
                "space-around",
                "space-evenly",
            ],
            table: { category: "Alignment" },
        },
        alignItems: {
            control: "select",
            options: [
                "normal",
                "start",
                "center",
                "end",
                "baseline",
                "stretch",
            ],
            table: { category: "Alignment" },
        },
        alignContent: {
            control: "select",
            options: [
                "normal",
                "start",
                "center",
                "end",
                "stretch",
                "baseline",
                "space-between",
                "space-around",
                "space-evenly",
            ],
            table: { category: "Alignment" },
        },

        as: {
            control: "text",
            table: { category: "Element", defaultValue: { summary: "div" } },
        },
        asChild: {
            control: "boolean",
            table: { category: "Element" },
        },
        className: {
            control: "text",
            table: { category: "Element" },
        },

        children: { table: { disable: true } },
    },
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const UlikeAkser: Story = {
    name: "Ulik avstand på aksene",
    args: { gap: "xl xs" },
};
