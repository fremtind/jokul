import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostBySlugQuery } from "@/sanity/queries/blog";
import clsx from "clsx";
import styles from "./blogpost.module.scss";
import { BlogHeader } from "./components/BlogHeader";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const { data: blogPost } = await sanityFetch({
        query: blogPostBySlugQuery,
        params: { slug },
        tags: [`jokul_blog_post:${slug}`],
    });

    return { title: blogPost?.name || "Blogg" };
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;

    const { data: blogPost } = await sanityFetch({
        query: blogPostBySlugQuery,
        params: { slug },
        tags: [`jokul_blog_post:${slug}`],
    });

    if (!blogPost) return null;

    return (
        <article>
            <BlogHeader
                name={blogPost.name}
                description={blogPost.short_description}
            />
            <div className={clsx("prose", styles.wrapper)}>
                {blogPost.article ? (
                    <PortableText blocks={blogPost.article} />
                ) : null}
                <PageFooter />
            </div>
        </article>
    );
}
