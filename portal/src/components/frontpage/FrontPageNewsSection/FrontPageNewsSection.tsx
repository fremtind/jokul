import type { FrontpageQueryResult } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import { FeaturedNews } from "./FeaturedNews";
import { NewsList } from "./NewsList";
import styles from "./frontPageNewsSection.module.scss";

type FrontPageFeaturedContent = NonNullable<
    NonNullable<FrontpageQueryResult["frontpage"]>["highlightedEntry"]
>;

interface FrontPageNewsSectionProps {
    featuredDocument?: FrontPageFeaturedContent | null;
    documents: FrontpageQueryResult["latestUpdatedDocuments"];
}

export const FrontPageNewsSection = ({
    featuredDocument,
    documents,
}: FrontPageNewsSectionProps) => {
    const featuredId =
        featuredDocument?.enabled === false
            ? undefined
            : featuredDocument?.targetDocument?._id;
    const hasRegularNews = documents.some(
        (document) => document._id !== featuredId,
    );

    if (!featuredId && !hasRegularNews) {
        return null;
    }

    return (
        <Flex
            as="section"
            direction="column"
            gap="m"
            className={styles.latestUpdatesSection}
            aria-label="Nyheter"
        >
            <FeaturedNews featuredDocument={featuredDocument} />
            <NewsList documents={documents} excludedId={featuredId} />
        </Flex>
    );
};
