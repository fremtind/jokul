"use client";

import {
    StorybookFrame,
    getStorybookUrl,
} from "@/components/storybook/StorybookFrame";
import type { Jokul_storybookEmbed } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Text } from "@fremtind/jokul/typography";
import { type StegaBranded, stegaClean } from "next-sanity";
import NextLink from "next/link";

type Props = {
    storybook?: StegaBranded<Jokul_storybookEmbed> | null;
};

export const ComponentExampleCard = ({ storybook }: Props) => {
    if (!storybook?.storyId) {
        return null;
    }

    const storyId = stegaClean(storybook.storyId);
    const version = stegaClean(storybook.version);

    const storyName = storybook.storyName ?? storyId;
    const storybookUrl = getStorybookUrl({ storyId, version });

    return (
        <Flex direction="column" gap="s">
            <Card padding="m" outlined>
                <Flex direction="column" gap="s">
                    <StorybookFrame
                        storyId={storyId}
                        version={version}
                        title={storyName}
                        height={storybook.height}
                        inert={storybook.interactive === false}
                    />
                    <Flex direction="column" gap="xs">
                        <Text size="m">{storyName}</Text>
                        {storybookUrl && (
                            <Text size="s">
                                <Link
                                    as={NextLink}
                                    href={storybookUrl}
                                    aria-label={`Se ${storyName} i Storybook`}
                                    external
                                    target="_blank"
                                >
                                    Se i <span lang="en">Storybook</span>
                                </Link>
                            </Text>
                        )}
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    );
};
