import { client } from "@/sanity/lib/client";
import {
    blogPostSearchQuery,
    componentSearchQuery,
    fundamentalsSearchQuery,
} from "@/sanity/queries/indexedSearch";
import type {
    Jokul_blog_post,
    Jokul_component,
    Jokul_fundamentals,
} from "@/sanity/types";
import {
    type SanityImageObject,
    createImageUrlBuilder,
} from "@sanity/image-url";
import type { Document } from "flexsearch";
import { extractPlainText } from "./portable-text";

export type DocumentType = "component" | "fundamental" | "blog_post";

export type SearchDocument = {
    id: string;
    documentType: DocumentType;
    title: string;
    keywords: string;
    image?: string;
    imageDark?: string;
    short_description: string;
    bodyText: string;
    slug: string;
};

const builder = createImageUrlBuilder(client);
function urlFor(source?: SanityImageObject | null) {
    return source?.asset?._ref ? builder.image(source).url() : undefined;
}

/**
 * Henter alt indekserbart innhold fra Sanity og fyller søkeindeksen.
 * Trygt å kalle flere ganger — eksisterende oppføringer overskrives via `add`.
 *
 * Tar imot indeksinstansen som parameter slik at kalleren (singletonen)
 * styrer hvilken instans som blir populert.
 */
export async function buildSearchIndex(
    index: Document<SearchDocument>,
): Promise<void> {
    await Promise.all([
        indexComponents(index),
        indexFundamentals(index),
        indexBlogPosts(index),
    ]);
}

/**
 * Henter alle komponenter fra Sanity og legger dem til i søkeindeksen.
 * Komponenter indekseres med tittel, nøkkelord, kort beskrivelse og brødtekst
 * fra dokumentasjonsartikkelen, samt bildeURLer for lys og mørk visning.
 */
async function indexComponents(index: Document<SearchDocument>): Promise<void> {
    const results = await client.fetch(componentSearchQuery);

    for (const doc of results) {
        if (!doc.id || !doc.title) {
            continue;
        }

        const article =
            doc.documentation_article as Jokul_component["documentation_article"];

        index.add({
            id: doc.id,
            documentType: "component",
            title: doc.title,
            image: urlFor(doc.image as SanityImageObject),
            imageDark: urlFor(doc.imageDark as SanityImageObject),
            keywords: (doc.keywords ?? []).join(" "),
            short_description: doc.short_description ?? "",
            bodyText: extractPlainText(article),
            slug: doc.slug ?? "",
        });
    }
}

/**
 * Henter alle fundamenter fra Sanity og legger dem til i søkeindeksen.
 * Fundamenter indekseres med tittel, kort beskrivelse og brødtekst fra artikkelen.
 */
async function indexFundamentals(
    index: Document<SearchDocument>,
): Promise<void> {
    const results = await client.fetch(fundamentalsSearchQuery);

    for (const doc of results) {
        if (!doc.id || !doc.title) {
            continue;
        }

        const article = doc.article as Jokul_fundamentals["article"];

        index.add({
            id: doc.id,
            documentType: "fundamental",
            title: doc.title,
            keywords: "",
            short_description: doc.short_description ?? "",
            bodyText: extractPlainText(article),
            slug: doc.slug ?? "",
        });
    }
}

/**
 * Henter alle blogginnlegg fra Sanity og legger dem til i søkeindeksen.
 * Blogginnlegg indekseres med tittel, kort beskrivelse og brødtekst fra artikkelen.
 */
async function indexBlogPosts(index: Document<SearchDocument>): Promise<void> {
    const results = await client.fetch(blogPostSearchQuery);

    for (const doc of results) {
        if (!doc.id || !doc.title) {
            continue;
        }

        const article = doc.article as Jokul_blog_post["article"];

        index.add({
            id: doc.id,
            documentType: "blog_post",
            title: doc.title,
            keywords: "",
            short_description: doc.short_description ?? "",
            bodyText: extractPlainText(article),
            slug: doc.slug ?? "",
        });
    }
}
