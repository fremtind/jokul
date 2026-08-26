import { getSanityImageUrl } from "@/sanity/lib/image";
import type { SanityImageLike } from "@/sanity/lib/image";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { OpenInNewIcon } from "@fremtind/jokul/icon";
import { Image } from "@fremtind/jokul/image";
import { Text } from "@fremtind/jokul/typography";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import Link from "next/link";
import type { FC } from "react";
import styles from "./LinkCard.module.scss";

type LinkCardValue = {
    _type: "jokul_linkCard";
    title?: string;
    description?: string;
    url?: string;
    images?: {
        light?: SanityImageLike;
        dark?: SanityImageLike;
    };
};

export const LinkCard: FC<PortableTextTypeComponentProps<LinkCardValue>> = ({
    value,
}) => {
    if (!value?.url) return null;

    const { title, description, url } = value;

    const isExternalLink = url.startsWith("http");
    const imageSrc = getSanityImageUrl(
        value.images?.light ?? value.images?.dark,
    );

    return (
        <Card
            as={Link}
            href={url}
            aria-label={title}
            padding="l"
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className={styles.linkCard}
        >
            <Flex direction="column" gap="s">
                <Flex direction="column" gap="none">
                    <Text bold short>
                        {title}
                    </Text>
                    <Text size="s">{description}</Text>
                </Flex>
                {isExternalLink && (
                    <Text size="xs" subdued>
                        {url}
                    </Text>
                )}
            </Flex>
            <div className={styles.accessory}>
                {isExternalLink ? (
                    <OpenInNewIcon />
                ) : (
                    imageSrc && (
                        <Image
                            src={imageSrc}
                            alt=""
                            className={styles.linkCardImage}
                        />
                    )
                )}
            </div>
        </Card>
    );
};
