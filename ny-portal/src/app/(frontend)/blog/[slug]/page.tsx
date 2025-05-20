import clsx from "clsx";
import styles from "./blogpost.module.scss";
import { BlogHeader } from "./components/BlogHeader";
import { PortableText } from "@/components/portable-text/PortableText";
import { client } from "@/sanity/client";
import { blogPostBySlugQuery } from "@/sanity/queries/blog";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const blogPost = await client.fetch(blogPostBySlugQuery, { slug });

    return { title: blogPost?.name || "Blogg" };
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;

    const blogPost = await client.fetch(blogPostBySlugQuery, { slug });

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
            </div>
        </article>
    );
}
