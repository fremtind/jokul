"use client";

import { ExampleItem } from "@/components/portable-text/to-be-deleted/examples/ExampleItem";
import {
    StorybookFrame,
    getStorybookUrl,
} from "@/components/storybook/StorybookFrame";
import type { Jokul_story, Jokul_storybookEmbed } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Text } from "@fremtind/jokul/typography";
import NextLink from "next/link";

import "portal/src/components/portable-text/to-be-deleted/examples/examples.scss";

type ExampleCardValue = {
    story?: Jokul_story | null;
    storybook?: Jokul_storybookEmbed | null;
};

type Props = {
    value?: ExampleCardValue;
};

export const ComponentExampleCard = ({ value }: Props) => {
    const storybook = value?.storybook;
    const legacyStory = value?.story;

    if (!storybook?.storyId && !legacyStory) {
        return null;
    }

    const storyName = storybook?.storyName ?? storybook?.storyId ?? "";
    const storybookUrl = getStorybookUrl({
        storyId: storybook?.storyId,
        version: storybook?.version,
    });

    return (
        <Flex direction="column" gap="s">
            {storybook?.storyId ? (
                <Card padding="m" outlined>
                    <Flex direction="column" gap="s">
                        <StorybookFrame
                            storyId={storybook.storyId}
                            version={storybook.version}
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
            ) : (
                <div className="examples">
                    {legacyStory && <ExampleItem example={legacyStory} />}
                </div>
            )}
        </Flex>
    );
};
