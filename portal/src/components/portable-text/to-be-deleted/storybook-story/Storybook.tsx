import { CodeBlock } from "@/components/portable-text/code-block";
import { StorybookFrame } from "@/components/storybook/StorybookFrame";
import type { Jokul_storybook } from "@/sanity/types";

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
    const story = value.story;
    const codeExample = value.code;
    const height = value.height;

    if (!story || !story.storyId) {
        return null;
    }

    const storyName = story.storyName ?? "Storybook-eksempel";
    const storybookUrl =
        story.storyUrl?.replace(
            /\/iframe\.html\?viewMode=story&id=(.+)/,
            "/?path=/story/$1",
        ) ??
        `https://fremtind.github.io/jokul/latest/?path=/story/${story.storyId}`;

    return (
        <Flex
            as={Card}
            direction="column"
            gap="s"
            padding="m"
            className="storybook-card"
        >
            <Flex alignItems="center" justifyContent="space-between" gap="m">
                {storybookUrl && (
                    <Link
                        as={NextLink}
                        href={storybookUrl}
                        className={"jkl-link"}
                        external={true}
                    >
                        {storyName}
                    </Link>
                )}
            </Flex>
            <StorybookFrame
                storyId={story.storyId}
                storyUrl={story.storyUrl}
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
