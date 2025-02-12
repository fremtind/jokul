import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { formatValuta } from "../../../utilities/formatters/valuta/formatValuta.js";
import { Flex } from "../../flex/Flex.js";
import { ErrorTag } from "../../tag/Tag.js";
import {
    Card as CardComponent,
    CARD_PADDINGS,
    CARD_VARIANTS,
} from "../Card.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Card",
    component: CardComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: { control: "select", options: CARD_VARIANTS },
        padding: { control: "select", options: CARD_PADDINGS },
    },
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
    args: {
        padding: "m",
        variant: "outlined",
        children: "Hei, verden!",
    },
};

export const Fakturainformasjon: Story = {
    args: {
        padding: "m",
        clickable: true,
        variant: "outlined",
        children: "",
    },
    render: ({ asChild, as, ...props }) => (
        <CardComponent asChild {...props}>
            <Flex as="a" href="#test" colGap={40}>
                <Flex direction="column" gap={4}>
                    <p className="jkl-heading-2">
                        {formatValuta(18856)}
                        <span aria-hidden> →</span>
                    </p>
                    <p className="jkl-body">Frist 20.03.2023</p>
                </Flex>
                <Flex direction="column" gap={12}>
                    <ErrorTag>Ubetalt</ErrorTag>
                    <p className="jkl-body">Purring</p>
                </Flex>
            </Flex>
        </CardComponent>
    ),
};
