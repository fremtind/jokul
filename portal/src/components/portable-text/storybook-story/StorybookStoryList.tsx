import type { Jokul_storybookStory } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import type { PortableTextTypeComponentProps } from "next-sanity";
import React, { type FC } from "react";
import { StorybookStoryItem } from "./StorybookStoryItem";

type Props = {
    title?: string;
    stories: Jokul_storybookStory[];
};

export const StorybookStoryList: FC<PortableTextTypeComponentProps<Props>> = ({
    value,
}) => {
    const { title, stories } = value;

    if (!stories) {
        return null;
    }

    console.log(stories);

    return (
        <Flex direction="column" gap="s">
            {title && <h2>{title}</h2>}
            <ul className="carousel">
                {stories.map((story) => (
                    <li key={story._id}>
                        <StorybookStoryItem story={story} key={story._id} />
                    </li>
                ))}
            </ul>
        </Flex>
    );
};
