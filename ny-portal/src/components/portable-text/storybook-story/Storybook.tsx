"use client";

import { Link } from "@fremtind/jokul/components/link";
import { NativeSelect } from "@fremtind/jokul/components/select";
import "@fremtind/jokul/styles/components/link/_index.scss";
import { backgroundOptions } from "@storybook-config/backgrounds";
import { themeGlobal } from "@storybook-config/theme";
import DOMPurify from "dompurify";
import { PortableTextTypeComponentProps } from "next-sanity";
import NextLink from "next/link";
import { FC, useState } from "react";
import styles from "./storybook.module.scss";

const STORYBOOK_BASE_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

type StorybookSchema = {
    stories: Array<{
        storyId: string;
        storyName: string;
    }>;
};

const backgrounds = Object.entries(backgroundOptions).map(([key, option]) => ({
    label: option.name,
    value: key,
}));

const themes = themeGlobal.toolbar.items.map((item) => ({
    label: item.title,
    value: item.value || "undefined",
}));

export const Storybook: FC<PortableTextTypeComponentProps<StorybookSchema>> = ({
    value,
}) => {
    const [backgroundId, setBackgroundId] = useState(backgrounds[1].value); // default: Page variant
    const [theme, setTheme] = useState<string>(themes[0].value); // default: Automatisk (undefined)
    const [story, setStory] = useState<string>(value.stories[0].storyId);

    const storyWithId = (id: string) =>
        value.stories.find((story) => story.storyId === id)?.storyId ||
        value.stories[0].storyId;

    return (
        <div className={styles.storybook}>
            <iframe
                title={
                    value.stories.find((s) => s.storyId === story)?.storyName
                }
                className={styles.story}
                src={DOMPurify.sanitize(
                    `${STORYBOOK_BASE_URL}/iframe.html?viewMode=story&id=${story}&globals=theme:${theme};backgrounds.value:${backgroundId}`,
                )}
            />
            <div className={styles.controls}>
                <div
                    data-density="compact"
                    className={styles.backgroundOptions}
                >
                    {value.stories.length > 1 && (
                        <NativeSelect
                            width="150px"
                            inline
                            name="story"
                            label="Eksempel"
                            value={story}
                            items={value.stories.map((story) => ({
                                label: story.storyName,
                                value: story.storyId,
                            }))}
                            onChange={(e) =>
                                setStory(storyWithId(e.target.value))
                            }
                        />
                    )}
                    <NativeSelect
                        width="150px"
                        inline
                        name="backgrounds"
                        label="Bakgrunnsfarge"
                        value={backgroundId}
                        items={backgrounds}
                        onChange={(e) => setBackgroundId(e.target.value)}
                    />
                    <NativeSelect
                        width="150px"
                        inline
                        name="themes"
                        label="Fargetema"
                        value={theme}
                        items={themes}
                        onChange={(e) => setTheme(e.target.value)}
                    />
                </div>
                <Link
                    external
                    as={NextLink}
                    href={DOMPurify.sanitize(
                        `${STORYBOOK_BASE_URL}/?path=/story/${story}`,
                    )}
                >
                    Åpne i storybook
                </Link>
            </div>
        </div>
    );
};
