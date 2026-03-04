import { type SanityClient, createClient } from "@sanity/client";

/**
 * Sanity project configuration for the Jøkul portal.
 *
 * Required environment variable (for portal tools):
 *   SANITY_PROJECT_ID  - Sanity project ID (find it in sanity.io/manage
 *                        or in the portal/.env file)
 *
 * Optional environment variables:
 *   SANITY_DATASET     - Sanity dataset name (default: "production")
 *   SANITY_API_VERSION - ISO date string for the API version (default: "2025-04-03")
 *   SANITY_API_TOKEN   - Read token for private datasets
 *
 * The client is lazily initialised – the server starts without SANITY_PROJECT_ID
 * and only throws when a portal tool is actually invoked.
 */

let _client: SanityClient | null = null;

/**
 * Returns a lazily-created Sanity client.
 * Throws a descriptive error when SANITY_PROJECT_ID is not set so that
 * the developer gets an actionable message instead of a cryptic 404.
 */
export function getSanityClient(): SanityClient {
    if (_client) return _client;

    const projectId = process.env.SANITY_PROJECT_ID;

    if (!projectId) {
        throw new Error(
            "Missing required environment variable: SANITY_PROJECT_ID\n" +
                "Set it to your Sanity project ID before using portal tools.\n" +
                "You can find the project ID in sanity.io/manage or in portal/.env.\n" +
                "Example: SANITY_PROJECT_ID=abc12345 node dist/index.js",
        );
    }

    _client = createClient({
        projectId,
        dataset: process.env.SANITY_DATASET ?? "production",
        apiVersion: process.env.SANITY_API_VERSION ?? "2025-04-03",
        useCdn: false,
        token: process.env.SANITY_API_TOKEN,
    });

    return _client;
}

// ---------------------------------------------------------------------------
// Types matching the Sanity schemas in portal/src/sanity/schemas/documents/
// ---------------------------------------------------------------------------

export interface PortalComponent {
    name: string;
    slug: string;
    short_description: string | null;
    categories: string[] | null;
    keywords: string[] | null;
    status: { value: string; statusDescription: string } | null;
    external_links: {
        github_link: string | null;
        figma_link: string | null;
        storybook_link: string | null;
    } | null;
}

export interface PortalComponentDetail extends PortalComponent {
    documentation_article: unknown[] | null;
    related_components: {
        components: PortalComponent[] | null;
    } | null;
}

export interface PortalFundamental {
    name: string;
    slug: string;
    short_description: string | null;
    date: string;
}

export interface PortalFundamentalDetail extends PortalFundamental {
    article: unknown[] | null;
}

export interface PortalBlogPost {
    name: string;
    slug: string;
    short_description: string | null;
    category: string | null;
    date: string;
}

export interface PortalBlogPostDetail extends PortalBlogPost {
    article: unknown[] | null;
}

// ---------------------------------------------------------------------------
// GROQ queries
// ---------------------------------------------------------------------------

const COMPONENTS_QUERY = `*[_type == "jokul_component"]{
    name,
    "slug": slug.current,
    short_description,
    categories,
    keywords,
    status,
    external_links
} | order(name)`;

const COMPONENT_BY_SLUG_QUERY = `*[_type == "jokul_component" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    short_description,
    categories,
    keywords,
    status,
    external_links,
    documentation_article[]{
        _type,
        // Standard block (paragraph/heading)
        _type == "block" => {
            _type,
            style,
            listItem,
            children[]{ _type, text, marks }
        },
        // Code snippet
        _type == "jokul_code" => {
            _type,
            title,
            code,
            language
        },
        // Inline code block
        _type == "jokul_codeBlock" => {
            _type,
            title,
            code,
            language
        },
        // Do / don't summary
        _type == "jokul_componentKortFortalt" => {
            _type,
            bruk[]{
                bruk_punkt[]{
                    _type,
                    style,
                    children[]{ _type, text }
                }
            },
            ikke_bruk[]{
                ikke_bruk_punkt[]{
                    _type,
                    style,
                    children[]{ _type, text }
                }
            }
        },
        // Do and don't image pairs
        _type == "jokul_doAndDont" => {
            _type,
            title
        },
        // Message/info box
        _type == "jokul_messageBox" => {
            _type,
            title,
            type
        }
    },
    related_components{
        components[]->{
            name,
            "slug": slug.current,
            short_description,
            categories
        }
    }
}`;

const FUNDAMENTALS_QUERY = `*[_type == "jokul_fundamentals"]{
    name,
    "slug": slug.current,
    short_description,
    "date": _createdAt
} | order(name)`;

const FUNDAMENTAL_BY_SLUG_QUERY = `*[_type == "jokul_fundamentals" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    short_description,
    "date": _createdAt,
    article[]{
        _type,
        _type == "block" => {
            _type,
            style,
            listItem,
            children[]{ _type, text, marks }
        },
        _type == "jokul_code" => {
            _type,
            title,
            code,
            language
        },
        _type == "jokul_codeBlock" => {
            _type,
            title,
            code,
            language
        }
    }
}`;

const BLOG_POSTS_QUERY = `*[_type == "jokul_blog_post"]{
    name,
    "slug": slug.current,
    short_description,
    category,
    "date": _createdAt
} | order(_createdAt desc)`;

const BLOG_POST_BY_SLUG_QUERY = `*[_type == "jokul_blog_post" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    short_description,
    category,
    "date": _createdAt,
    article[]{
        _type,
        _type == "block" => {
            _type,
            style,
            listItem,
            children[]{ _type, text, marks }
        },
        _type == "jokul_code" => {
            _type,
            title,
            code,
            language
        },
        _type == "jokul_codeBlock" => {
            _type,
            title,
            code,
            language
        }
    }
}`;

const SEARCH_QUERY = `*[_type in ["jokul_component", "jokul_fundamentals", "jokul_blog_post"]
    && (
        name match $term
        || short_description match $term
        || $term in categories
        || $term in keywords
    )
]{
    _type,
    name,
    "slug": slug.current,
    short_description,
    categories,
    keywords
} | order(name)`;

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

export async function fetchComponents(): Promise<PortalComponent[]> {
    return getSanityClient().fetch<PortalComponent[]>(COMPONENTS_QUERY);
}

export async function fetchComponentBySlug(
    slug: string,
): Promise<PortalComponentDetail | null> {
    return getSanityClient().fetch<PortalComponentDetail | null>(
        COMPONENT_BY_SLUG_QUERY,
        { slug },
    );
}

export async function fetchFundamentals(): Promise<PortalFundamental[]> {
    return getSanityClient().fetch<PortalFundamental[]>(FUNDAMENTALS_QUERY);
}

export async function fetchFundamentalBySlug(
    slug: string,
): Promise<PortalFundamentalDetail | null> {
    return getSanityClient().fetch<PortalFundamentalDetail | null>(
        FUNDAMENTAL_BY_SLUG_QUERY,
        { slug },
    );
}

export async function fetchBlogPosts(): Promise<PortalBlogPost[]> {
    return getSanityClient().fetch<PortalBlogPost[]>(BLOG_POSTS_QUERY);
}

export async function fetchBlogPostBySlug(
    slug: string,
): Promise<PortalBlogPostDetail | null> {
    return getSanityClient().fetch<PortalBlogPostDetail | null>(
        BLOG_POST_BY_SLUG_QUERY,
        { slug },
    );
}

export async function searchPortal(query: string): Promise<
    Array<{
        _type: string;
        name: string;
        slug: string;
        short_description: string | null;
        categories: string[] | null;
        keywords: string[] | null;
    }>
> {
    // Sanity's `match` operator needs a wildcard suffix for partial matching
    const term = query.trim().endsWith("*") ? query.trim() : `${query.trim()}*`;
    return getSanityClient().fetch(SEARCH_QUERY, { term });
}

/**
 * Converts Sanity Portable Text blocks to a readable plain-text string.
 * This is intentionally lightweight – it extracts text spans from block nodes
 * without pulling in the full @portabletext/* stack.
 */
export function portableTextToString(blocks: unknown[]): string {
    if (!Array.isArray(blocks)) return "";

    return blocks
        .map((block) => {
            if (!block || typeof block !== "object") return "";
            const b = block as Record<string, unknown>;

            if (b._type === "block" && Array.isArray(b.children)) {
                return (b.children as Array<Record<string, unknown>>)
                    .map((child) =>
                        typeof child.text === "string" ? child.text : "",
                    )
                    .join("");
            }

            if (b._type === "jokul_code" || b._type === "jokul_codeBlock") {
                const lang = typeof b.language === "string" ? b.language : "";
                const code = typeof b.code === "string" ? b.code : "";
                const title =
                    typeof b.title === "string" ? `\n// ${b.title}` : "";
                return `\`\`\`${lang}${title}\n${code}\n\`\`\``;
            }

            return "";
        })
        .filter(Boolean)
        .join("\n\n");
}
