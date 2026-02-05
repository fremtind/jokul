import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostBySlugQuery } from "@/sanity/queries/blog";

import { ArticleHeader } from "@/components/article/header";
import { logger } from "logger";

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
    const { slug } = await params;

    const initialTime = performance.now();
    const { data: blogPost } = await sanityFetch({
        query: blogPostBySlugQuery,
        params: { slug },
        requestTag: "blog-post",
        tags: [`jokul_blog_post:${slug}`],
    });

    if (!blogPost) {
        logger.warn("Blog post not found", { slug });
        return null;
    }

    logger.info("Fetched blog post", {
        slug,
        time: `${Math.round(performance.now() - initialTime)}ms`,
    });

    return (
        <article className={"prose"}>
            <ArticleHeader
                title={blogPost.name || ""}
                description={blogPost.short_description}
                date={{ updated: new Date(blogPost._updatedAt) }}
                backLink={{ href: "/blog", label: "Artikler" }}
            />
            {blogPost.article ? (
                <PortableText blocks={blogPost.article} />
            ) : null}
            <PageFooter />
        </article>
    );
}
