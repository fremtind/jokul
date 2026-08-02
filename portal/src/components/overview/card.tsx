import type { SanityImageLike } from "@/sanity/lib/image";
import { Card } from "@fremtind/jokul/card";
import NextLink from "next/link";
import { type ReactNode, useId } from "react";
import { OverviewThumbnail } from "./thumbnail";

import styles from "./overview.module.scss";

export type OverviewCardImage = {
    light?: SanityImageLike;
    dark?: SanityImageLike;
};

export type OverviewCardProps = {
    title: string;
    description?: string;
    image?: OverviewCardImage;
    link: string;
    footer?: ReactNode;
};

export const OverviewCard = (props: OverviewCardProps) => {
    const id = useId();
    const { link, title, description, image, footer } = props;
    const descriptionId = description ? `${id}-description` : undefined;
    const footerId = footer ? `${id}-footer` : undefined;
    const describedBy =
        [footerId, descriptionId].filter(Boolean).join(" ") || undefined;

    return (
        <li>
            <Card
                as={NextLink}
                href={link}
                padding="l"
                className={styles.card}
                aria-labelledby={`${id}-title`}
                aria-describedby={describedBy}
            >
                <p className={styles.name} id={`${id}-title`}>
                    {title}
                </p>
                {description && (
                    <p className={styles.description} id={descriptionId}>
                        {description}
                    </p>
                )}
                {image && (
                    <OverviewThumbnail
                        darkImage={image.dark}
                        lightImage={image.light}
                    />
                )}
                {footer && (
                    <footer className={styles.footer} id={footerId}>
                        {footer}
                    </footer>
                )}
            </Card>
        </li>
    );
};
