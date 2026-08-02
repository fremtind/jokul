import { FilterChip } from "@/app/(frontend)/nyheter/FilterChip";
import { NewsPagination } from "@/app/(frontend)/nyheter/NewsPagination";
import NewsPost from "@/app/(frontend)/nyheter/NewsPost";
import {
    ARTICLE_TYPES,
    isArticleTypeValue,
} from "@/app/(frontend)/nyheter/article.types";
import { OverviewGridWithPreferences } from "@/components/overview/OverviewGridWithPreferences";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { newsPageQuery } from "@/sanity/queries/allPosts";
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
        .filter(isArticleTypeValue);
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
        tags: [
            "jokul_blog_post",
            "jokul_component",
            "jokul_fundamentals",
            "jokul_release_notes",
            "jokul_temaside",
        ],
    });

    const articles = data?.articles ?? [];
    const total = data?.total ?? 0;
    const availableTypes = data?.availableTypes ?? [];

    if (articles.length === 0) {
        logger.warn("No updated articles found");
        return (
            <>
                <OverviewHeader title="Nylig oppdatert" />
                <p>Fant ingen artikler :(</p>
            </>
        );
    }

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

    const availableTypeSet = new Set(availableTypes);
    const articleTypes = ARTICLE_TYPES.filter((type) =>
        availableTypeSet.has(type.sanityType),
    );

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
                    {articleTypes.map((type) => (
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
                {articles.map((article) => (
                    <NewsPost key={article._id} article={article} />
                ))}
            </OverviewGridWithPreferences>
        </>
    );
}
