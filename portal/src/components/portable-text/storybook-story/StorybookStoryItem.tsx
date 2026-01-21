import type { Jokul_storybookStory } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import NextLink from "next/link";
import React from "react";

import "./storybook.scss";

type Props = {
    story: Jokul_storybookStory;
};

export const StorybookStoryItem = ({ story }: Props) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

    const { storyName, storyId, storyDescription, height } = story;

    const storybookExampleHeight =
        typeof height === "number" ? `${height}` : undefined;

    if (!storyId || !storyName) {
        return null;
    }

    return (
        <Card padding="m" className="storybook-item" variant="outlined">
            <iframe
                title={storyName}
                src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
                style={
                    storybookExampleHeight
                        ? ({
                              "--storybook-example-height":
                                  storybookExampleHeight,
                          } as React.CSSProperties)
                        : undefined
                }
            />
            <div className="info">
                <p className="title">{storyName}</p>
                {storyDescription && (
                    <p className="description">{storyDescription}</p>
                )}
                {STORYBOOK_URL && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/?path=/story/${storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
                        className={"jkl-link"}
                        external={true}
                    >
                        Se <span className="jkl-sr-only">{storyName}</span> i{" "}
                        <span lang="en">Storybook</span>
                    </Link>
                )}
            </div>
        </Card>
    );
};
