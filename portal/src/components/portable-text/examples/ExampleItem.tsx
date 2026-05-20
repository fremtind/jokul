import { StorybookFrame } from "@/components/storybook/StorybookFrame";
import type { Jokul_story } from "@/sanity/types";
import { storyExists } from "@/storybook/storybookIndex";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import NextLink from "next/link";

type Props = {
    example: Jokul_story;
};

export const ExampleItem = ({ example }: Props) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;
    const { name, id, description, height, inert } = example;

    const backgroundColor = undefined;
    const theme = undefined;
    const density = undefined;

    if (!name) {
        return null;
    }

    const hasStory = storyExists(id);

    return (
        <Card padding="m" className="example" outlined>
            <StorybookFrame
                height={height}
                inert={inert}
                storyId={id}
                title={name}
                globals={`backgrounds.value:${backgroundColor};theme:${theme};density:${density}`}
            />
            <div className="info">
                <p className="title">{name}</p>
                {description && <p className="description">{description}</p>}
                {STORYBOOK_URL && hasStory && (
                    <Link
                        as={NextLink}
                        href={`${STORYBOOK_URL}/?path=/story/${id}`}
                        className={"jkl-link"}
                        external={true}
                        target="_blank"
                    >
                        Se <span className="jkl-sr-only">{name}</span> i{" "}
                        <span lang="en">Storybook</span>
                    </Link>
                )}
            </div>
        </Card>
    );
};
