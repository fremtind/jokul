import type { Jokul_story } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import NextLink from "next/link";
import React from "react";

type Props = {
    example: Jokul_story;
};

export const ExampleItem = ({ example }: Props) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;
    const { title, id, description, height, inert } = example;

    const backgroundColor = undefined;
    const theme = undefined;
    const density = undefined;

    const exampleHeight = typeof height === "number" ? `${height}` : undefined;

    if (!id || !title) {
        return null;
    }

    return (
        <Card padding="m" className="example" variant="outlined">
            <iframe
                inert={inert}
                title={title}
                src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${id}&globals=backgrounds.value:${backgroundColor};theme:${theme};density:${density}`}
                style={
                    exampleHeight
                        ? ({
                              "--example-height": exampleHeight,
                          } as React.CSSProperties)
                        : undefined
                }
            />
            <div className="info">
                <p className="title">{title}</p>
                {description && <p className="description">{description}</p>}
                {STORYBOOK_URL && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/?path=/story/${id}`}
                        className={"jkl-link"}
                        external={true}
                        target="_blank"
                    >
                        Se <span className="jkl-sr-only">{title}</span> i{" "}
                        <span lang="en">Storybook</span>
                    </Link>
                )}
            </div>
        </Card>
    );
};
