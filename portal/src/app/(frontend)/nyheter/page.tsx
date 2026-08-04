import { FilterChip } from "@/app/(frontend)/nyheter/FilterChip";
import { NewsPagination } from "@/app/(frontend)/nyheter/NewsPagination";
import NewsPost from "@/app/(frontend)/nyheter/NewsPost";
import { OverviewGridWithPreferences } from "@/components/overview/OverviewGridWithPreferences";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { newsPageQuery } from "@/sanity/queries/allPosts";
import { type DocumentType, documents } from "@/sanity/schemas/documents";
import { parseUserPreferences } from "@/utils/user-preferences";
import { Flex } from "@fremtind/jokul/flex";
import { getCookie } from "cookies-next";
import { logger } from "logger";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jokul.fremtind.no";
const DESCRIPTION =
    "Nylig oppdaterte artikler, komponenter, fundamenter og release notes i Jøkul – Fremtinds designsystem.";
const PAGE_SIZE = 12;

type ArticleType = {
    value: string;
    sanityType: DocumentType;
    label: string;
};

const ARTICLE_TYPES: readonly ArticleType[] = [
    {
        value: "blogg",
        sanityType: "jokul_blog_post",
        label: "Blogg",
    },
    {
        value: "komponent",
        sanityType: "jokul_component",
        label: "Komponenter",
    },
    {
        value: "fundament",
        sanityType: "jokul_fundamentals",
        label: "Fundamenter",
    },
    {
        value: "release-notes",
        sanityType: "jokul_release_notes",
        label: "Release notes",
    },
    {
        value: "monster",
        sanityType: "jokul_monster",
        label: "Mønster",
    },
] as const;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Nyheter",
    description: DESCRIPTION,
    openGraph: {
        type: "website",
        siteName: "Jøkul",
        locale: "nb_NO",
        url: "/nyheter",
        title: "Nyheter – Jøkul",
        description: DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: "Nyheter – Jøkul",
        description: DESCRIPTION,
    },
    robots: { index: true, follow: true },
};

export default async function NyheterPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    logger.info("Rendering nyheter page");

    const userPreferences = parseUserPreferences(
        await getCookie("userPreferences", { cookies }),
    );

    const { types: typesParam, page: pageParam } = await searchParams;

    const selectedValues = (typesParam ?? "")
        .split(",")
        .filter((value) => ARTICLE_TYPES.some((type) => type.value === value));
    const selectedTypes = ARTICLE_TYPES.filter((type) =>
        selectedValues.includes(type.value),
    );
    const selectedSanityTypes = selectedTypes.map((type) => type.sanityType);

    if (selectedValues.length > 0) {
        logger.info(`Filtering articles by types: ${selectedValues.join(",")}`);
    }

    const requestedPage = Math.max(1, Number(pageParam) || 1);
    const start = (requestedPage - 1) * PAGE_SIZE;

    const { data } = await sanityFetch({
        query: newsPageQuery,
        params: {
            types: selectedSanityTypes,
            start,
            end: start + PAGE_SIZE,
        },
        requestTag: "news-page",
        tags: documents.map((doc) => doc.name),
    });

    const articles = data?.articles ?? [];
    const total = articles.length;

    const numberOfPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    if (requestedPage > numberOfPages) {
        const params = new URLSearchParams();
        if (selectedValues.length > 0) {
            params.set("types", selectedValues.join(","));
        }
        if (numberOfPages > 1) {
            params.set("page", String(numberOfPages));
        }
        const query = params.toString();
        redirect(query ? `/nyheter?${query}` : "/nyheter");
    }

    return (
        <>
            <OverviewHeader
                title="Nylig oppdatert"
                showToolbar
                actions={
                    numberOfPages > 1 ? (
                        <NewsPagination
                            currentPage={requestedPage}
                            numberOfPages={numberOfPages}
                        />
                    ) : undefined
                }
            >
                <Flex wrap="wrap" gap="xs">
                    {ARTICLE_TYPES.map((type) => (
                        <FilterChip
                            key={type.value}
                            value={type.value}
                            label={type.label}
                            selectedValues={selectedValues}
                        />
                    ))}
                </Flex>
            </OverviewHeader>
            <OverviewGridWithPreferences initialPreferences={userPreferences}>
                {articles.length === 0 && <p>Fant ingen artikler :(</p>}
                {articles.map((article) => (
                    <NewsPost key={article._id} article={article} />
                ))}
            </OverviewGridWithPreferences>
        </>
    );
}
