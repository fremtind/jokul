import { client } from "@/sanity/lib/client";
import { latestUpdatedArticlesQuery } from "@/sanity/queries/allPosts";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://jokul.fremtind.no";
export const revalidate = 3600;
const esc = (v: string) =>
    v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
    const arts = await client.fetch(
        latestUpdatedArticlesQuery,
        { limit: 50 },
        { stega: false },
    );
    const items = arts
        .map((a) => {
            if (!a.href) return "";
            const url = new URL(a.href, SITE).toString();
            return [
                "<item>",
                `<title>${esc(a.name ?? "")}</title>`,
                `<link>${url}</link>`,
                `<guid>${url}</guid>`,
                `<category>${esc(a.type)}</category>`,
                `<pubDate>${new Date(a.updated).toUTCString()}</pubDate>`,
                `<description>${esc(a.short_description ?? "")}</description>`,
                "</item>",
            ].join("");
        })
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Jøkul – Nylig oppdatert</title><link>${SITE}/nyheter</link><atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" /><description>Nylig oppdaterte artikler i Jøkul.</description><language>nb-NO</language>${items}</channel></rss>`;
    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}
