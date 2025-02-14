import { Meta, StoryObj } from "@storybook/react";
import React, { CSSProperties } from "react";
import tokens from "../../../core/tokens.js";
import { Flex } from "../Flex.js";

const meta: Meta<typeof Flex> = {
    title: "Layout/Flex",
    component: Flex,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        direction: {
            control: "select",
            options: [
                "row",
                "row-reverse",
                "column",
                "column-reverse",
            ] satisfies CSSProperties["flexDirection"][],
        },
        alignItems: {
            control: "select",
            options: [
                "flex-start",
                "flex-end",
                "center",
                "baseline",
                "stretch",
            ] satisfies CSSProperties["alignItems"][],
        },
        justifyContent: {
            control: "select",
            options: [
                "flex-start",
                "flex-end",
                "center",
                "space-between",
                "space-around",
                "space-evenly",
            ] satisfies CSSProperties["justifyContent"][],
        },
        wrap: {
            control: "boolean",
        },
        gap: {
            control: "select",
            options: Object.keys(tokens.spacing),
        },
    },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Box = ({ label }: { label: string }) => (
    <div
        style={{
            padding: "var(--jkl-spacing-24)",
            backgroundColor: "var(--jkl-background-color)",
            border: "1px solid var(--jkl-color)",
            textAlign: "center",
        }}
    >
        {label}
    </div>
);

export const FlexStory: Story = {
    name: "Flex",
    args: {
        style: {
            border: "3px dashed var(--jkl-color)",
            padding: "var(--jkl-spacing-24)",
            height: "50vh",
            width: "50vw",
        },
        direction: "row",
        wrap: true,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        children: Array.from({ length: 5 }, (_, i) => (
            <Box key={i} label={`Box ${i + 1}`} />
        )),
    },
    render: (args) => <Flex {...args} />,
};
