import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import * as url from "../../file/stories/cow.jpg";
import { Flex } from "../../flex/Flex.js";
import { Card } from "../Card.js";
import { CardImage } from "../CardImage.js";
import { CARD_PADDINGS, CARD_VARIANTS } from "../types.js";

import "../styles/_index.scss";
import "../../nav-link/styles/_index.scss";

const meta = {
    title: "Komponenter/Card",
    component: Card,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Another description, overriding the comments",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: CARD_VARIANTS,
        },
        padding: { control: "select", options: CARD_PADDINGS },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageCard: Story = {
    name: "Card med bilde",
    args: {
        variant: "high",
        padding: "m",
        children: "",
        clickable: true,
        as: "a",
        href: "#",
        "aria-label": "Se forsikringene mine",
        style: { maxWidth: "420px" },
    },
    render: ({ ...args }) => (
        <Card {...args} asChild={false}>
            <CardImage
                src={url.default}
                alt=""
                style={{
                    overflow: "hidden",
                    objectFit: "cover",
                    aspectRatio: 16 / 9,
                }}
            />

            <Flex direction="column" gap={16}>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Se forsikringene mine</p>
                    <p>
                        Du vil alltid ha en oversikt over forsikringene dine på
                        forsikringsoversikten.
                    </p>
                </Flex>
            </Flex>
        </Card>
    ),
};
