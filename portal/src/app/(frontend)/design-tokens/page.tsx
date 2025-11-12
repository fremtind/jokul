import { OverviewCard } from "@/components/overview/card";
import { OverviewGrid } from "@/components/overview/grid";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { fundamentalsQuery } from "@/sanity/queries/fundamentals";
import { logger } from "logger";

export default async function FundamentalsPage() {
    logger.info("Rendering fundamentals page");

    const { data: posts } = await sanityFetch({
        query: fundamentalsQuery,
        requestTag: "fundamentals-posts",
        tags: ["jokul_fundamentals"],
    });

    if (!posts) {
        logger.warn("No fundamental posts found");
        return null;
    }

    return (
        <>
            <OverviewHeader title="Design Tokens" />
            <OverviewGrid title="Fundamenter">
                {posts.map((post) => (
                    <OverviewCard
                        key={post.slug?.current}
                        title={post.name || ""}
                        description={post.short_description || ""}
                        link={`design-tokens/${post.slug?.current}` || ""}
                    />
                ))}
            </OverviewGrid>
        </>
    );
}
