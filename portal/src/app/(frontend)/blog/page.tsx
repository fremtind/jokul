import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery } from "@/sanity/queries/blog";
import { ArticleCard } from "./ArticleCard";
import { BlogHeader } from "./[slug]/components/BlogHeader";

import styles from "./blog.module.scss";

export default async function BlogPage() {
    const { data: posts } = await sanityFetch({ query: blogPostsQuery });

    if (!posts) return null;

    return (
        <>
            <BlogHeader name="Artikler" />
            <div className={styles.articleGallery}>
                {posts.map((post) => (
                    <ArticleCard key={post.slug?.current} {...post} />
                ))}
            </div>
        </>
    );
}
