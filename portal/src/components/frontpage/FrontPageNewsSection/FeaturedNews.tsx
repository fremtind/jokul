import { client } from "@/sanity/lib/client";
import type { FrontpageQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { createImageUrlBuilder } from "@sanity/image-url";
import Link from "next/link";
import styles from "./frontPageNewsSection.module.scss";

type FrontPageFeaturedContent = NonNullable<
    NonNullable<FrontpageQueryResult["frontpage"]>["highlightedEntry"]
>;
type FrontPageFeaturedDocument = NonNullable<
    FrontPageFeaturedContent["targetDocument"]
>;

interface FeaturedNewsProps {
    featuredDocument?: FrontPageFeaturedContent | null;
}

const builder = createImageUrlBuilder(client);
const FEATURED_NEWS_FALLBACK_IMAGE = "/component_placeholder_light.svg";

const getImageUrl = (image?: FrontPageFeaturedDocument["image"] | null) => {
    if (!image?.asset?._ref) {
        return FEATURED_NEWS_FALLBACK_IMAGE;
    }

    return builder
        .image(image)
        .width(1200)
        .height(900)
        .fit("crop")
        .auto("format")
        .url();
};

const getFeaturedNews = (
    featuredDocument?: FrontPageFeaturedContent | null,
) => {
    if (
        featuredDocument?.enabled === false ||
        !featuredDocument?.targetDocument
    ) {
        return null;
    }

    const content = featuredDocument.targetDocument;

    return {
        href: content.href || "/",
        title: featuredDocument.title ?? content.name ?? undefined,
        description:
            featuredDocument.description ??
            content.short_description ??
            undefined,
        image: content.image || undefined,
    };
};

export const FeaturedNews = ({ featuredDocument }: FeaturedNewsProps) => {
    const item = getFeaturedNews(featuredDocument);

    if (!item) {
        return null;
    }

    return (
        <Card
            as={Link}
            href={item.href}
            padding="xl"
            clickable
            aria-label={item.title}
            className={styles.featuredCard}
        >
            <div className={styles.featuredNewsContent}>
                <div className={styles.featuredNewsImageShell}>
                    <img
                        className={styles.featuredNewsImage}
                        src={getImageUrl(item.image)}
                        alt=""
                    />
                </div>
                <Flex
                    className={styles.featuredNewsContentText}
                    direction="column"
                    gap="s"
                    justifyContent="center"
                >
                    <h3>{item.title}</h3>
                    {item.description ? <p>{item.description}</p> : null}
                </Flex>
            </div>
        </Card>
    );
};
