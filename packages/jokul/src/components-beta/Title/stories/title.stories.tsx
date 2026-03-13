import type { Meta, StoryFn, StoryObj } from "@storybook/nextjs";
import React from "react";

import { Flex } from "../../../components/flex/Flex.js";
import { Title as BETA_Title } from "../Title.js";
import "../styles/_index.scss";
import "../../../components/flex/styles/_index.scss";

const meta = {
    title: "Beta/Title",
    component: BETA_Title,
    argTypes: {
        size: {
            control: "select",
            options: [1, 2, 3, 4, 5, 6, "body"],
            table: { defaultValue: { summary: "2" } },
            description:
                "Optionally use the size prop to override the visual size.",
        },
        as: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            table: { defaultValue: { summary: "h2" } },
            description:
                "By default, Title renders as an h2. Change this to keep a semantic and accessible heading hierarchy.",
        },
        children: { control: "text", description: "React.ReactNode" },
        text: {
            control: "text",
            description: "String-only title for editorial word-break handling.",
        },
    },
    args: {
        children: "I am Title",
        text: "",
        as: "h2",
        size: 1,
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof BETA_Title>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Sizes: Story = {
    args: {
        size: 2,
        children: "Title with size",
    },
    render: ({ children, ...args }) => (
        <Flex layout="1" gap="s">
            <BETA_Title size="1">{children} 1</BETA_Title>
            <BETA_Title {...args}>
                {children} {args.size}
            </BETA_Title>
            <BETA_Title size="3">{children} 3</BETA_Title>
            <BETA_Title size="4">{children} 4</BETA_Title>
            <BETA_Title size="5">{children} 5</BETA_Title>
            <BETA_Title size="body">{children} body</BETA_Title>
            <BETA_Title size="6">{children} 6</BETA_Title>
        </Flex>
    ),
};

export const EditorialWordBreaks: Story = {
    decorators: [
        (StoryComponent: StoryFn) => (
            <div
                style={{
                    border: "1px dashed rgba(0,0,0,.3)",
                    borderRadius: 6,
                    overflow: "auto",
                    padding: 20,
                    position: "relative",
                    resize: "horizontal",
                    maxWidth: 1000,
                }}
            >
                <span
                    style={{
                        bottom: 0,
                        position: "absolute",
                        right: 20,
                    }}
                >
                    Resize to see the title breakpoints &rarr;
                </span>
                <StoryComponent />
            </div>
        ),
    ],
    render: () => (
        <Flex direction="column">
            <div>
                <BETA_Title
                    size="4"
                    text="Unngå linjeskift i tall som 1 000 000."
                />
                <p>
                    {"\u{261D}\u{FE0F}"} Dette skjer fordi Title-elementet
                    automatisk formaterer tall med &amp;nbsp;
                </p>
            </div>
            <div>
                <BETA_Title
                    size="4"
                    text="Unngå linjeskift i åpne sammensatte__ord."
                />
                <p>
                    {"\u{261D}\u{FE0F}"} Dette skjer fordi Title-elementet
                    konverterer "__" til &amp;nbsp; i teksten "compound__words"
                </p>
            </div>
            <div>
                <BETA_Title
                    size="4"
                    text="Legg til linjeskift i ord som tverr--faglig."
                />
                <p>
                    {"\u{261D}\u{FE0F}"} Dette skjer fordi Title-elementet
                    konverterer "--" til &amp;shy; i teksten
                    "inter--disciplinary"
                </p>
            </div>
        </Flex>
    ),
};
