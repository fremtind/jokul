import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { fundamentalsBySlugQuery } from "@/sanity/queries/fundamentals";
import { logger } from "logger";

import { ArticleHeader } from "@/components/article/header";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const { data: fundamental } = await sanityFetch({
        query: fundamentalsBySlugQuery,
        params: { slug },
        requestTag: "fundamental-post",
        tags: [`jokul_fundamental_post:${slug}`],
    });

    return { title: fundamental?.name || "Tokens" };
}

export default async function FundamentalPage({ params }: Props) {
    const { slug } = await params;

    const initialTime = performance.now();
    const { data: fundamental } = await sanityFetch({
        query: fundamentalsBySlugQuery,
        params: { slug },
        requestTag: "fundamental-post",
        tags: [`jokul_fundamental_post:${slug}`],
    });

    if (!fundamental) {
        logger.warn("Post not found", { slug });
        return null;
    }

    logger.info("Fetched fundamental post", {
        slug,
        time: `${Math.round(performance.now() - initialTime)}ms`,
    });

    return (
        <article className={"prose"}>
            <ArticleHeader
                title={fundamental.name || ""}
                description={fundamental.short_description}
            />
            {fundamental.article ? (
                <PortableText blocks={fundamental.article} />
            ) : null}
            <PageFooter />
        </article>
    );
}
