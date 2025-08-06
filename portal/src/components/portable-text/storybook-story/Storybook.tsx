import { CodeBlock } from "@/components/portable-text/code-block";
import type { Jokul_storybook } from "@/sanity/types";
import { ExpandablePanel, Expander } from "@fremtind/jokul/expander";
import { Link } from "@fremtind/jokul/link";
import { clsx } from "clsx";
import type { PortableTextTypeComponentProps } from "next-sanity";
import NextLink from "next/link";
import React, { type FC } from "react";

import styles from "./storybook.module.scss";

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
        <div className={styles.storybook}>
            <header className={styles.header}>
                <p className={"jkl-heading-5"}>{story.storyName}</p>
                {STORYBOOK_URL && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/iframe.html?id=${story.storyId}`}
                        className={"jkl-link"}
                        external={true}
                    >
                        Lenke til storybook
                    </Link>
                )}
            </header>
            <iframe
                title={story.storyName}
                className={styles.story}
                src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${story.storyId}`}
            />
            {codeExample && (
                <ExpandablePanel>
                    <Expander>Kode</Expander>
                    <ExpandablePanel.Content>
                        <CodeBlock language={codeExample.language}>
                            {codeExample.code}
                        </CodeBlock>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            )}
        </div>
    );
};
