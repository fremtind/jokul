import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { InfoTag } from "../../tag/Tag.js";
import { Card } from "../Card.js";
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

export const LinkCard: Story = {
    name: "Card som lenke",
    args: {
        padding: "l",
        variant: "high",
        children: "e",
        clickable: true,
    },
    render: ({ ...args }) => (
        <Card
            {...args}
            as="a"
            href="#"
            asChild={false}
            aria-label="Husforsikring"
        >
            <Flex direction="column" gap={16}>
                <div>
                    <InfoTag>Fornyelse</InfoTag>
                </div>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Hus</p>
                    <p>Kittel Nielsens vei 88 1163 Oslo</p>
                </Flex>
            </Flex>
            <hr />
            <Flex>
                <p>311 kr/mnd</p>
            </Flex>
        </Card>
    ),
};
