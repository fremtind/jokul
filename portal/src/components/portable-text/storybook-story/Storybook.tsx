import { CodeBlock } from "@/components/portable-text/code-block";
import { StorybookFrame } from "@/components/storybook/StorybookFrame";
import type { Jokul_storybook } from "@/sanity/types";
import { storyExists } from "@/storybook/storybookIndex";
import { Card } from "@fremtind/jokul/card";
import { ExpandablePanel, Expander } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import type { PortableTextTypeComponentProps } from "next-sanity";
import NextLink from "next/link";
import type { FC } from "react";

export const Storybook: FC<PortableTextTypeComponentProps<Jokul_storybook>> = ({
    value,
}) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

    const story = value.story;
    const codeExample = value.code;
    const height = value.height;

    if (!story) {
        return null;
    }

    const hasStory = storyExists(story.storyId);
    const storyName = story.storyName ?? "Storybook-eksempel";

    return (
        <Flex
            as={Card}
            direction="column"
            gap="s"
            padding="m"
            className="storybook-card"
        >
            <Flex alignItems="center" justifyContent="space-between" gap="m">
                {STORYBOOK_URL && hasStory && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/?path=/story/${story.storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
                        className={"jkl-link"}
                        external={true}
                    >
                        {storyName}
                    </Link>
                )}
            </Flex>
            <StorybookFrame
                storyId={story.storyId}
                title={storyName}
                height={height}
            />
            {codeExample?.code && (
                <ExpandablePanel>
                    <Expander>Kode</Expander>
                    <ExpandablePanel.Content>
                        <CodeBlock language={codeExample.language}>
                            {codeExample.code.toString()}
                        </CodeBlock>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            )}
        </Flex>
    );
};
