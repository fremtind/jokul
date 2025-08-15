import { ArticleCard } from "@/app/(frontend)/blog/components/ArticleCard";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery } from "@/sanity/queries/blog";
import { logger } from "logger";
import styles from "./blog.module.scss";

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
            <h1 className={"header"}>Artikler</h1>
            <div className={styles.articleGallery}>
                {sortedPosts.map((post) => (
                    <ArticleCard key={post.slug?.current} {...post} />
                ))}
            </div>
        </>
    );
}
