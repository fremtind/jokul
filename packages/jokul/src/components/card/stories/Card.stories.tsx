import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CardImage } from "../../card/CardImage.js";
import { Flex } from "../../flex/index.js";
import { CheckIcon, CopyIcon } from "../../icon/index.js";
import { Image } from "../../image/Image.jsx";
import { InfoTag } from "../../tag/index.js";
import { Card } from "../Card.js";
import { CARD_PADDINGS, CARD_VARIANTS } from "../types.js";

import "../styles/_index.scss";

const dog1200 = "/images/dog-1200.jpg";

const meta = {
    title: "Komponenter/Card",
    component: Card,
    parameters: {
        layout: "centered",
        docs: { toc: true },
    },
    tags: ["autodocs"],
    args: {
        clickable: false,
    },
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

export const CardStory: Story = {
    name: "Card",
    args: {
        padding: "l",
        variant: "high",
        children: "",
    },
    render: (args) => (
        <Card {...args}>
            <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                    outline: "1px dashed #9747FF",
                    height: "100px",
                    aspectRatio: 4 / 3,
                    textAlign: "center",
                    background: "#B4C9FFAA",
                    color: "#9747FF",
                    outlineOffset: "4px",
                }}
            >
                <p className="jkl-small">Bytt meg</p>
            </Flex>
        </Card>
    ),
};

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
                src={dog1200}
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

export const CopyCard: Story = {
    name: "Card som knapp",
    args: {
        children: "FremtindSD",
        clickable: true,
        padding: "l",
        variant: "low",
        as: "button",
    },
    render: ({ ...args }) => {
        const [hasCopied, setHasCopied] = React.useState(false);

        function copyToClipboard(text: string) {
            navigator.clipboard.writeText(text);
        }

        return (
            <Card
                {...args}
                aria-live="assertive"
                onClick={() => {
                    copyToClipboard(args.children?.toString() || "FremtindSD");
                    setHasCopied(true);
                    setTimeout(() => {
                        setHasCopied(false);
                    }, 3000);
                }}
            >
                <Flex alignItems="center" gap={16}>
                    <p id="kode">{args.children}</p>
                    {hasCopied ? (
                        <CheckIcon aria-label="Kopiert" aria-hidden="false" />
                    ) : (
                        <CopyIcon
                            aria-label="Kopier kode"
                            aria-hidden="false"
                        />
                    )}
                </Flex>
            </Card>
        );
    },
};

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

export const FullImageCard: Story = {
    name: "Card med heldekkende bilde",
    args: {
        children: null,
    },
    render: (args) => (
        <Card {...args} style={{ width: "500px" }}>
            <CardImage
                as={Image}
                src={dog1200}
                alt="En hund"
                placement="full"
            />
        </Card>
    ),
};
