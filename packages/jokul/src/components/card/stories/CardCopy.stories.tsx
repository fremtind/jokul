import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/Flex.js";
import { CheckIcon } from "../../icon/icons/CheckIcon.js";
import { CopyIcon } from "../../icon/icons/CopyIcon.js";
import { Card } from "../Card.js";
import { CARD_PADDINGS, CARD_VARIANTS } from "../types.js";

import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const meta = {
    title: "Komponenter/Card",
    component: Card,
    parameters: {
        layout: "centered",
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

export const CopyCard: Story = {
    name: "Card med kopier-knapp",
    args: {
        padding: "m",
        variant: "low",
        children: "FremtindSD",
        clickable: false,
    },
    render: ({ ...args }) => {
        const [hasCopied, setHasCopied] = React.useState(false);

        function copyToClipboard(text: string) {
            navigator.clipboard.writeText(text);
        }

        return (
            <Card {...args}>
                <Flex alignItems="center" gap={16}>
                    <p>{args.children}</p>
                    <Button
                        variant="ghost"
                        icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
                        iconPosition="right"
                        onClick={(_) => {
                            copyToClipboard(
                                args.children?.toString() || "FremtindSD",
                            );
                            setHasCopied(true);
                            setTimeout(() => {
                                setHasCopied(false);
                            }, 3000);
                        }}
                    />
                </Flex>
            </Card>
        );
    },
};
