import type { SanityImageLike } from "@/sanity/lib/image";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text } from "@fremtind/jokul/typography";
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
            <Flex direction="column" asChild gap="16 0">
                <Card
                    as={NextLink}
                    href={link}
                    padding="l"
                    className={styles.card}
                    aria-labelledby={`${id}-title`}
                    aria-describedby={describedBy}
                >
                    <Flex direction="column" gap="8 0">
                        <p className={styles.name} id={`${id}-title`}>
                            {title}
                        </p>
                        {description && (
                            <Text
                                subdued
                                size="s"
                                className={styles.description}
                                id={descriptionId}
                            >
                                {description}
                            </Text>
                        )}
                    </Flex>
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
            </Flex>
        </li>
    );
};
