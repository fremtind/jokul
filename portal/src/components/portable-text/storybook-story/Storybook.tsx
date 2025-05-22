import "@fremtind/jokul/styles/components/link/_index.scss";
import { PortableTextTypeComponentProps } from "next-sanity";
import { type FC } from "react";
import styles from "./storybook.module.scss";

type StorybookSchema = {
    stories: Array<{
        storyId: string;
        storyName: string;
    }>;
};

export const Storybook: FC<PortableTextTypeComponentProps<StorybookSchema>> = ({
    value,
}) => {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

    return (
        <div className={styles.storybook}>
            <iframe
                title={value.stories[0].storyName}
                className={styles.story}
                src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${value.stories[0].storyId}`}
            />
        </div>
    );
};
