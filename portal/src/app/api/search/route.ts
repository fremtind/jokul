import type { DocumentType, SearchDocument } from "@/search/index";
import { getSearchIndex } from "@/search/singleton";
import { type NextRequest, NextResponse } from "next/server";

export type SearchResult = {
    id: string;
    documentType: DocumentType;
    title: string;
    image?: string;
    imageDark?: string;
    short_description: string;
    bodyText: string;
    slug: string;
    highlight:
        | Record<
              | "slug"
              | "title"
              | "short_description"
              | "keywords"
              | "id"
              | "documentType"
              | "bodyText",
              string
          >
        | undefined;
};

export async function GET(req: NextRequest) {
    const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";

    if (!q) {
        return NextResponse.json({ results: [] });
    }

    const merged = getSearchIndex().search(q, {
        enrich: true,
        merge: true,
        highlight: { template: "<mark>$1</mark>", boundary: 100 },
    } as const);

    const results = merged
        .filter((item) => item.doc != null)
        .map((item) => {
            const doc = item.doc as SearchDocument;
            const result: SearchResult = {
                id: doc.id,
                documentType: doc.documentType,
                title: doc.title,
                image: doc.image,
                imageDark: doc.imageDark,
                short_description: doc.short_description,
                bodyText: doc.bodyText,
                slug: doc.slug,
                highlight: item.highlight,
            };

            return result;
        });

    return NextResponse.json({ results });
}
