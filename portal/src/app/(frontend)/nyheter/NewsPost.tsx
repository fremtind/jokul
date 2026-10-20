import { OverviewCardWithPreferences } from "@/components/overview/OverviewCardWithPreferences";
import type { NewsPageQueryResult } from "@/sanity/types";
import { getRelativeTime } from "@/utils/relativeTime";
import { Text } from "@fremtind/jokul/typography";
import { type StegaBranded, stegaClean } from "next-sanity";

type Article = StegaBranded<NewsPageQueryResult>["articles"][number];

export default function NewsPost({ article }: { article: Article }) {
    const { name, short_description, type, images } = article;

    const href = stegaClean(article.href);
    const created = stegaClean(article.created);
    const updated = stegaClean(article.updated);

    if (!href) return null;

    const createdMs = new Date(created).getTime();
    const updatedMs = new Date(updated).getTime();
    const wasUpdated = updatedMs - createdMs > 600_000; // edited >10 min after creation

    const dateText = `${wasUpdated ? "Oppdatert" : "Publisert"} ${getRelativeTime(wasUpdated ? new Date(updated) : new Date(created))}`;

    return (
        <OverviewCardWithPreferences
            link={href || ""}
            image={images.light || images.dark ? images : undefined}
            title={name || ""}
            description={short_description || ""}
            footer={
                <div>
                    <Text size="xs" short>
                        {type}
                    </Text>
                    <Text subdued size="xs">
                        {dateText}
                    </Text>
                </div>
            }
        />
    );
}
