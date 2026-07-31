import { PageFooter } from "@/components/PageFooter";
import { ArticleHeader } from "@/components/article/header";
import { OverviewCardWithPreferences } from "@/components/overview/OverviewCardWithPreferences";
import { OverviewGridWithPreferences } from "@/components/overview/OverviewGridWithPreferences";
import { PortableText } from "@/components/portable-text/PortableText";
import { getSanityImageUrl } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { monsterBySlugQuery } from "@/sanity/queries/monster";
import { parseUserPreferences } from "@/utils/user-preferences";
import { getCookie } from "cookies-next";
import { logger } from "logger";
import type { Metadata } from "next";
import { cookies } from "next/headers";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const { data: monster } = await sanityFetch({
        query: monsterBySlugQuery,
        params: { slug },
        requestTag: "monster",
        tags: [`jokul_monster:${slug}`],
    });

    const ogImage = getSanityImageUrl(monster?.image);

    return {
        title: monster?.name || "Mønster",
        description: monster?.short_description || undefined,
        openGraph: {
            title: monster?.name || "Mønster",
            description: monster?.short_description || undefined,
            images: ogImage ? [{ url: ogImage }] : undefined,
        },
    };
}

export default async function MonsterPage({ params }: Props) {
    const { slug } = await params;

    const { data: monster } = await sanityFetch({
        query: monsterBySlugQuery,
        params: { slug },
        requestTag: "monster",
        tags: [`jokul_monster:${slug}`],
    });

    if (!monster) {
        logger.warn("Mønster not found", { slug });
        return null;
    }

    const userPreferences = parseUserPreferences(
        await getCookie("userPreferences", { cookies }),
    );

    return (
        <article className="prose">
            <ArticleHeader
                title={monster.name || ""}
                description={monster.short_description}
                date={{ updated: new Date(monster._updatedAt) }}
                backLink={{ href: "/monster", label: "Mønster" }}
            />
            {monster.article ? <PortableText blocks={monster.article} /> : null}
            {monster.related_components &&
            monster.related_components.length > 0 ? (
                <>
                    <h2>Relevante komponenter</h2>
                    <OverviewGridWithPreferences
                        initialPreferences={userPreferences}
                    >
                        {monster.related_components.map((component) => (
                            <OverviewCardWithPreferences
                                key={component.slug}
                                title={component.name || ""}
                                description={component.short_description || ""}
                                image={{
                                    light: component.image,
                                    dark: component.imageDark,
                                }}
                                link={`/komponenter/${component.slug}`}
                                initialPreferences={userPreferences}
                            />
                        ))}
                    </OverviewGridWithPreferences>
                </>
            ) : null}

            {monster.related_patterns && monster.related_patterns.length > 0 ? (
                <>
                    <h2>Relaterte mønstre</h2>
                    <OverviewGridWithPreferences
                        initialPreferences={userPreferences}
                    >
                        {monster.related_patterns.map((pattern) => (
                            <OverviewCardWithPreferences
                                key={pattern.slug}
                                title={pattern.name || ""}
                                description={pattern.short_description || ""}
                                image={{ light: pattern.image }}
                                link={`/monster/${pattern.slug}`}
                                initialPreferences={userPreferences}
                            />
                        ))}
                    </OverviewGridWithPreferences>
                </>
            ) : null}

            <PageFooter />
        </article>
    );
}
