"use client";

import NextLink from "next/link";
import { Link } from "@fremtind/jokul/components/link";
import { NativeSelect } from "@fremtind/jokul/components/select";
import { backgroundOptions } from "@storybook-config/backgrounds";
import { themeGlobal } from "@storybook-config/theme";
import { PortableTextTypeComponentProps } from "next-sanity";
import { FC, useState } from "react";
import styles from "./storybook-story.module.scss";
import "@fremtind/jokul/styles/components/link/_index.scss";

type StorybookStorySchema = {
    storybookStory: string;
};

const backgrounds = Object.entries(backgroundOptions).map(([key, option]) => ({
    label: option.name,
    value: key,
}));

const themes = themeGlobal.toolbar.items.map((item) => ({
    label: item.title,
    value: item.value || "undefined",
}));

export const StorybookStory: FC<
    PortableTextTypeComponentProps<StorybookStorySchema>
> = ({ value }) => {
    const [background, setBackground] = useState(backgrounds[1].value); // Page variant
    const [theme, setTheme] = useState<string>(themes[0].value);

    return (
        <div className={styles.storybookStory}>
            <iframe
                className={styles.story}
                src={`http://localhost:6007/iframe.html?viewMode=story&id=${value.storybookStory}&globals=theme:${theme};backgrounds.value:${background}`}
            />
            <div className={styles.controls}>
                <div
                    data-density="compact"
                    className={styles.backgroundOptions}
                >
                    <NativeSelect
                        width="150px"
                        inline
                        name="backgrounds"
                        label="Bakgrunnsfarge"
                        value={background}
                        items={backgrounds}
                        onChange={(e) => setBackground(e.target.value)}
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
                    as={NextLink}
                    external
                    href={`http://localhost:6007/?path=/story/${value.storybookStory}`}
                >
                    Åpne i storybook
                </Link>
            </div>
        </div>
    );
};
