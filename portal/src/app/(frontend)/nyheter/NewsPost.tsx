import { OverviewCardWithPreferences } from "@/components/overview/OverviewCardWithPreferences";
import type { NewsPageQueryResult } from "@/sanity/types";
import { Text } from "@fremtind/jokul/typography";

export default function NewsPost({
    article,
}: { article: NewsPageQueryResult["articles"][number] }) {
    const { name, short_description, updated, created, type, href, images } =
        article;

    if (!href) return null;

    const relativeDate = new Intl.RelativeTimeFormat("no", { numeric: "auto" });
    const createdMs = new Date(created).getTime();
    const updatedMs = new Date(updated).getTime();
    const wasUpdated = updatedMs - createdMs > 600_000; // edited >10 min after creation
    const referenceMs = wasUpdated ? updatedMs : createdMs;
    const label = wasUpdated ? "Oppdatert" : "Postet";

    const daysAgo = Math.max(
        0,
        Math.round((Date.now() - referenceMs) / 86_400_000),
    );

    let relative: string;
    if (daysAgo > 60) {
        relative = new Date(referenceMs).toLocaleDateString("no", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    } else if (daysAgo >= 30) {
        relative = relativeDate.format(-Math.round(daysAgo / 30), "month");
    } else if (daysAgo >= 7) {
        relative = relativeDate.format(-Math.round(daysAgo / 7), "week");
    } else {
        relative = relativeDate.format(-daysAgo, "day");
    }

    const dateText = `${label} ${relative}`;

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
