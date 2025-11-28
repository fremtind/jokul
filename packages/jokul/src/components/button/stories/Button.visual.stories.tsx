import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../Button.js";
import type { ButtonVariant } from "../types.js";
import "../styles/_index.scss";
import { Flex } from "../../flex/Flex.js";
import { CopyIcon } from "../../icon/index.js";

const meta = {
    title: "Visuelle regresjonstester/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    type: "button",
    children: "Kopier",
    loader: {
        showLoader: false,
        textDescription: "laster inn",
    },
};

export const IconPlacements: Story = {
    args: baseArgs,
    render: (args) => (
        <Flex direction="column" gap="m" style={{ width: "100%" }}>
            {["primary", "secondary", "tertiary", "ghost"].map((variant) => (
                <Flex key={variant} gap="xs">
                    <Button {...args} variant={variant as ButtonVariant} />
                    <Button
                        {...args}
                        variant={variant as ButtonVariant}
                        icon={<CopyIcon />}
                    />
                    <Button
                        {...args}
                        variant={variant as ButtonVariant}
                        icon={<CopyIcon />}
                        iconPosition="right"
                    />
                    <Button
                        {...args}
                        variant={variant as ButtonVariant}
                        icon={<CopyIcon />}
                        iconPosition="right"
                        // biome-ignore lint/correctness/noChildrenProp: kun overstyring av args
                        children={null}
                    />
                </Flex>
            ))}
        </Flex>
    ),
};
