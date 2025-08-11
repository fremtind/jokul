import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostBySlugQuery } from "@/sanity/queries/blog";

import styles from "../blog.module.scss";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const { data: blogPost } = await sanityFetch({
        query: blogPostBySlugQuery,
        params: { slug },
        requestTag: "blog-post",
        tags: [`jokul_blog_post:${slug}`],
    });

    return { title: blogPost?.name || "Blogg" };
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;

    const { data: blogPost } = await sanityFetch({
        query: blogPostBySlugQuery,
        params: { slug },
        requestTag: "blog-post",
        tags: [`jokul_blog_post:${slug}`],
    });

    if (!blogPost) return null;

    const publishedDate = new Date(blogPost._createdAt).toLocaleString("no", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const updatedDate = new Date(blogPost._updatedAt).toLocaleString("no", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const dateString =
        updatedDate !== publishedDate
            ? `Oppdatert ${updatedDate}`
            : `Publisert ${publishedDate}`;

    return (
        <article className={"prose"}>
            <header className={styles.articleHeader}>
                {blogPost.name && (
                    <h1 className={styles.title}>{blogPost.name}</h1>
                )}
                {blogPost.short_description && (
                    <p>{blogPost.short_description}</p>
                )}
                <p className="date">{dateString}</p>
            </header>
            {blogPost.article ? (
                <PortableText blocks={blogPost.article} />
            ) : null}
            <PageFooter />
        </article>
    );
}
