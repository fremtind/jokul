import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { BETA_Text } from "../index.js";
import "../styles/_index.scss";

const meta = {
    title: "Beta/Text",
    component: BETA_Text,
    argTypes: {
        size: {
            control: "radio",
            options: ["inherit", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            table: { defaultValue: { summary: "inherit" } },
        },
        weight: {
            control: "radio",
            options: [400, 700],
            table: { defaultValue: { summary: "400" } },
        },
        as: {
            description:
                "By default Text renders as a <p>. You can pass another HTML tag or React component to the as prop.",
            table: { defaultValue: { summary: "p" } },
        },
    },
    args: {
        size: "inherit",
        weight: 400,
        as: "p",
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof BETA_Text>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    args: {
        children: "Default look of the Text component",
    },
};

export const SizesAndWeights: Story = {
    render: (args) => {
        return (
            <>
                <BETA_Text {...args}>
                    Text size "{args.size}" and weight {args.weight}
                </BETA_Text>
                <BETA_Text {...args} size={1}>
                    Text size 1
                </BETA_Text>
                <BETA_Text {...args} size={3}>
                    Text size 3
                </BETA_Text>
                <BETA_Text {...args} size={5}>
                    Text size 5
                </BETA_Text>
                <BETA_Text {...args} size={7}>
                    Text size 7
                </BETA_Text>
                <BETA_Text {...args} size={10}>
                    Text size 10
                </BETA_Text>
                <BETA_Text weight={400}>Text weight 400</BETA_Text>
                <BETA_Text weight={700}>Text weight 700</BETA_Text>
            </>
        );
    },
};

export const SizeScale: Story = {
    render: () => (
        <>
            <BETA_Text size={1}>Font size 1</BETA_Text>
            <BETA_Text size={2}>Font size 2</BETA_Text>
            <BETA_Text size={3}>Font size 3</BETA_Text>
            <BETA_Text size={4}>Font size 4</BETA_Text>
            <BETA_Text size={5}>Font size 5</BETA_Text>
            <BETA_Text size={6}>Font size 6</BETA_Text>
            <BETA_Text size={7}>Font size 7</BETA_Text>
            <BETA_Text size={8}>Font size 8</BETA_Text>
            <BETA_Text size={9}>Font size 9</BETA_Text>
            <BETA_Text size={10}>Font size 10</BETA_Text>
        </>
    ),
};
