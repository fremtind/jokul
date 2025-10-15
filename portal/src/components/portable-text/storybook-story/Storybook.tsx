import { CodeBlock } from "@/components/portable-text/code-block";
import type { Jokul_storybook } from "@/sanity/types";
import {Card} from "@fremtind/jokul/card";
import { ExpandablePanel, Expander } from "@fremtind/jokul/expander";
import {Flex} from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import type { PortableTextTypeComponentProps } from "next-sanity";
import NextLink from "next/link";
import React, { type FC } from "react";

import "./storybook.scss";

export const Storybook: FC<PortableTextTypeComponentProps<Jokul_storybook>> = ({
    value,
}) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

    const story = value.story;
    const codeExample = value.code;

    if (!story) {
        return null;
    }

    return (
        <Flex
            as={Card}
            direction="column"
            gap={12}
            padding="m"
            className="storybook-card"
        >
            <Flex alignItems="center" justifyContent="space-between" gap={24}>
                {STORYBOOK_URL && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/?path=/story/${story.storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
                        className={"jkl-link"}
                        external={true}
                    >
                        {story.storyName}
                    </Link>
                )}
            </Flex>
            <iframe
                title={story.storyName}
                className="storybook-example"
                src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${story.storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
            />
            {codeExample?.code && (
                <ExpandablePanel variant="fill">
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
