import { ArticleCard } from "@/app/(frontend)/blog/components/ArticleCard";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery } from "@/sanity/queries/blog";
import styles from "./blog.module.scss";

export default async function BlogPage() {
    const { data: posts } = await sanityFetch({ query: blogPostsQuery });

    if (!posts) return null;

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
