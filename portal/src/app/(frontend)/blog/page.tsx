import { OverviewCard } from "@/components/overview/card";
import { OverviewGrid } from "@/components/overview/grid";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery } from "@/sanity/queries/blog";
import { logger } from "logger";

export default async function BlogPage() {
    logger.info("Rendering blog overview page");

    const { data: posts } = await sanityFetch({
        query: blogPostsQuery,
        requestTag: "blog-posts",
        tags: ["jokul_blog_post"],
    });

    if (!posts) {
        logger.warn("No blog posts found");
        return null;
    }

    const sortedPosts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return (
        <>
            <OverviewHeader title="Artikler" />
            <OverviewGrid>
                {sortedPosts.map((post) => (
                    <OverviewCard
                        key={post.slug?.current}
                        title={post.name || ""}
                        description={post.short_description || ""}
                        link={`/blog/${post.slug?.current}` || ""}
                    />
                ))}
            </OverviewGrid>
        </>
    );
}
