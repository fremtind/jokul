import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Card } from "../../card/index.js";
import { Tag } from "../../tag/index.js";
import { Text, Title } from "../../typography/index.js";
import { Flex } from "../Flex.js";
import FlexStories from "./Flex.stories.js";

const meta = {
    title: "Komponenter/Flex/Eksempler",
    component: Flex,
    args: FlexStories.args,
    argTypes: FlexStories.argTypes,
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof meta>;

export default meta;

export const KortMedHeader: Story = {
    name: "Kort med header",
    render: () => (
        <Card padding="l" outlined>
            <Flex direction="column" gap="s">
                <Tag variant="info">Fornyelse</Tag>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap="s"
                >
                    <Title as="h2" size="s">
                        Husforsikring
                    </Title>
                    <Text as="span" size="s" short>
                        311 kr/mnd
                    </Text>
                </Flex>
                <Text>Kittel Nielsens vei 88 1163 Oslo</Text>
            </Flex>
        </Card>
    ),
};
