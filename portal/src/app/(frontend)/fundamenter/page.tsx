import { OverviewCardWithPreferences } from "@/components/overview/OverviewCardWithPreferences";
import { OverviewGridWithPreferences } from "@/components/overview/OverviewGridWithPreferences";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { fundamentalsQuery } from "@/sanity/queries/fundamentals";
import { parseUserPreferences } from "@/utils/user-preferences";
import { getCookie } from "cookies-next";
import { logger } from "logger";
import { cookies } from "next/headers";

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

    const userPreferences = parseUserPreferences(
        await getCookie("userPreferences", { cookies }),
    );

    return (
        <>
            <OverviewHeader title="Fundamenter" showToolbar />
            <OverviewGridWithPreferences initialPreferences={userPreferences}>
                {posts.map((post) => (
                    <OverviewCardWithPreferences
                        key={post.slug?.current}
                        title={post.name || ""}
                        description={post.short_description || ""}
                        image={{
                            light: post.image,
                            dark: post.imageDark,
                        }}
                        link={`/fundamenter/${post.slug?.current}`}
                        initialPreferences={userPreferences}
                    />
                ))}
            </OverviewGridWithPreferences>
        </>
    );
}
