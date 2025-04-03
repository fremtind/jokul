import "@fremtind/jokul/styles/components/link/_index.scss";
import { backgroundOptions } from "@storybook-config/backgrounds";
import { themeGlobal } from "@storybook-config/theme";
import DOMPurify from "dompurify";
import { PortableTextTypeComponentProps } from "next-sanity";
import { type FC } from "react";
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
    return (
        <div className={styles.storybook}>
            <iframe
                title={value.stories[0].storyName}
                className={styles.story}
                src={DOMPurify.sanitize(
                    `${STORYBOOK_BASE_URL}/iframe.html?viewMode=story&id=${value.stories[0].storyId}&globals=theme:${themes[0].value};backgrounds.value:${backgrounds[1].value}`,
                )}
            />
        </div>
    );
};
