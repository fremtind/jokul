import { CodeBlock } from "@/components/portable-text/code-block";
import {
    StorybookFrame,
    getStorybookUrl,
} from "@/components/storybook/StorybookFrame";
import type { Jokul_storybookExample } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { ExpandablePanel, Expander } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import type { PortableTextTypeComponentProps } from "next-sanity";
import NextLink from "next/link";
import type { FC } from "react";

export const StorybookExample: FC<
    PortableTextTypeComponentProps<Jokul_storybookExample>
> = ({ value }) => {
    const { embed, code } = value;

    if (!embed?.storyId) {
        return null;
    }

    const storyName = embed.storyName ?? embed.storyId;
    const storybookUrl = getStorybookUrl({
        storyId: embed.storyId,
        version: embed.version,
    });

    return (
        <Flex as={Card} direction="column" gap="s" padding="m">
            {storybookUrl && (
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    gap="m"
                >
                    <Link as={NextLink} href={storybookUrl} external>
                        {storyName}
                    </Link>
                </Flex>
            )}

            <StorybookFrame
                storyId={embed.storyId}
                version={embed.version}
                title={storyName}
                height={embed.height}
                inert={embed.interactive === false}
            />

            {code?.code && (
                <ExpandablePanel>
                    <Expander>Kode</Expander>
                    <ExpandablePanel.Content>
                        <CodeBlock language={code.language}>
                            {code.code.toString()}
                        </CodeBlock>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            )}
        </Flex>
    );
};
