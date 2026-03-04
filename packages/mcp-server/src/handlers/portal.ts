import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
    type PortalComponent,
    fetchBlogPostBySlug,
    fetchBlogPosts,
    fetchComponentBySlug,
    fetchComponents,
    fetchFundamentalBySlug,
    fetchFundamentals,
    portableTextToString,
    searchPortal,
} from "../utils/sanity.js";

const PORTAL_BASE_URL = "https://jokul.fremtind.no";

function componentToMarkdown(c: PortalComponent): string {
    const lines: string[] = [];

    lines.push(`# ${c.name}`);
    lines.push(`**URL:** ${PORTAL_BASE_URL}/komponenter/${c.slug}`);

    if (c.short_description) {
        lines.push(`\n${c.short_description}`);
    }

    if (c.status?.value) {
        lines.push(`\n**Status:** ${c.status.value}`);
        if (c.status.statusDescription) {
            lines.push(c.status.statusDescription);
        }
    }

    if (c.categories && c.categories.length > 0) {
        lines.push(`\n**Kategorier:** ${c.categories.join(", ")}`);
    }

    if (c.keywords && c.keywords.length > 0) {
        lines.push(`**Stikkord:** ${c.keywords.join(", ")}`);
    }

    if (c.external_links) {
        const links: string[] = [];
        if (c.external_links.github_link)
            links.push(`[GitHub](${c.external_links.github_link})`);
        if (c.external_links.figma_link)
            links.push(`[Figma](${c.external_links.figma_link})`);
        if (c.external_links.storybook_link)
            links.push(`[Storybook](${c.external_links.storybook_link})`);
        if (links.length > 0) {
            lines.push(`\n**Lenker:** ${links.join(" | ")}`);
        }
    }

    return lines.join("\n");
}

/**
 * Register portal tools on the MCP server.
 * These tools query the Jøkul portal's Sanity CMS to expose design
 * documentation, component guidelines, fundamentals and blog posts.
 */
export function registerPortalTools(server: McpServer): void {
    // -------------------------------------------------------------------------
    // List portal components
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_list_components",
        {
            description:
                "List all Jøkul components documented in the portal, including their descriptions, categories and status",
            inputSchema: {
                filter: z
                    .string()
                    .optional()
                    .describe(
                        "Optional text filter applied to name, categories or keywords",
                    ),
            },
        },
        async ({ filter }) => {
            const components = await fetchComponents();
            const filterLower = filter?.toLowerCase();

            const filtered = filterLower
                ? components.filter(
                      (c) =>
                          c.name.toLowerCase().includes(filterLower) ||
                          c.categories?.some((cat) =>
                              cat.toLowerCase().includes(filterLower),
                          ) ||
                          c.keywords?.some((kw) =>
                              kw.toLowerCase().includes(filterLower),
                          ),
                  )
                : components;

            const result = filtered.map((c) => ({
                name: c.name,
                slug: c.slug,
                url: `${PORTAL_BASE_URL}/komponenter/${c.slug}`,
                short_description: c.short_description,
                categories: c.categories,
                status: c.status?.value ?? null,
            }));

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // -------------------------------------------------------------------------
    // Get portal component documentation
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_get_component",
        {
            description:
                "Get full documentation for a Jøkul component from the portal, including usage guidelines, do/don't lists, code examples and related components",
            inputSchema: {
                slug: z
                    .string()
                    .describe(
                        'The component slug (e.g. "button", "text-input", "modal"). Use portal_list_components to discover valid slugs.',
                    ),
            },
        },
        async ({ slug }) => {
            const component = await fetchComponentBySlug(slug);

            if (!component) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No portal documentation found for component slug "${slug}". Use portal_list_components to see available components.`,
                        },
                    ],
                };
            }

            const lines: string[] = [componentToMarkdown(component)];

            if (
                component.documentation_article &&
                component.documentation_article.length > 0
            ) {
                lines.push("\n## Dokumentasjon");
                lines.push(
                    portableTextToString(component.documentation_article),
                );
            }

            if (
                component.related_components?.components &&
                component.related_components.components.length > 0
            ) {
                lines.push("\n## Relaterte komponenter");
                for (const related of component.related_components.components) {
                    lines.push(
                        `- [${related.name}](${PORTAL_BASE_URL}/komponenter/${related.slug})${related.short_description ? ` – ${related.short_description}` : ""}`,
                    );
                }
            }

            return {
                content: [{ type: "text", text: lines.join("\n") }],
            };
        },
    );

    // -------------------------------------------------------------------------
    // List fundamentals (principles / guidelines)
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_list_fundamentals",
        {
            description:
                "List all Jøkul fundamentals (design principles and guidelines) documented in the portal",
        },
        async () => {
            const fundamentals = await fetchFundamentals();

            const result = fundamentals.map((f) => ({
                name: f.name,
                slug: f.slug,
                url: `${PORTAL_BASE_URL}/grunnleggende/${f.slug}`,
                short_description: f.short_description,
            }));

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // -------------------------------------------------------------------------
    // Get a fundamentals article
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_get_fundamental",
        {
            description:
                "Get the full content of a Jøkul fundamentals article (design principles, accessibility guidelines, brand guidelines, etc.)",
            inputSchema: {
                slug: z
                    .string()
                    .describe(
                        'The fundamentals slug (e.g. "tilgjengelighet", "farger", "typografi"). Use portal_list_fundamentals to discover valid slugs.',
                    ),
            },
        },
        async ({ slug }) => {
            const fundamental = await fetchFundamentalBySlug(slug);

            if (!fundamental) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No portal documentation found for fundamentals slug "${slug}". Use portal_list_fundamentals to see available articles.`,
                        },
                    ],
                };
            }

            const lines: string[] = [
                `# ${fundamental.name}`,
                `**URL:** ${PORTAL_BASE_URL}/grunnleggende/${fundamental.slug}`,
            ];

            if (fundamental.short_description) {
                lines.push(`\n${fundamental.short_description}`);
            }

            if (fundamental.article && fundamental.article.length > 0) {
                lines.push("\n---\n");
                lines.push(portableTextToString(fundamental.article));
            }

            return {
                content: [{ type: "text", text: lines.join("\n") }],
            };
        },
    );

    // -------------------------------------------------------------------------
    // List blog posts
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_list_blog_posts",
        {
            description:
                "List blog posts and articles from the Jøkul portal (release notes, guides, news)",
            inputSchema: {
                category: z
                    .string()
                    .optional()
                    .describe(
                        'Optional category filter. Known categories: "Release notes", "Blogg", "Kom i gang", "Referat"',
                    ),
            },
        },
        async ({ category }) => {
            const posts = await fetchBlogPosts();

            const filtered = category
                ? posts.filter(
                      (p) =>
                          p.category?.toLowerCase() === category.toLowerCase(),
                  )
                : posts;

            const result = filtered.map((p) => ({
                name: p.name,
                slug: p.slug,
                url: `${PORTAL_BASE_URL}/blogg/${p.slug}`,
                short_description: p.short_description,
                category: p.category,
                date: p.date,
            }));

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // -------------------------------------------------------------------------
    // Get a blog post
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_get_blog_post",
        {
            description:
                "Get the full content of a Jøkul blog post or article from the portal",
            inputSchema: {
                slug: z
                    .string()
                    .describe(
                        'The blog post slug (e.g. "kom-i-gang"). Use portal_list_blog_posts to discover valid slugs.',
                    ),
            },
        },
        async ({ slug }) => {
            const post = await fetchBlogPostBySlug(slug);

            if (!post) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No blog post found with slug "${slug}". Use portal_list_blog_posts to see available posts.`,
                        },
                    ],
                };
            }

            const lines: string[] = [
                `# ${post.name}`,
                `**URL:** ${PORTAL_BASE_URL}/blogg/${post.slug}`,
            ];

            if (post.category) {
                lines.push(`**Kategori:** ${post.category}`);
            }
            if (post.date) {
                lines.push(
                    `**Dato:** ${new Date(post.date).toLocaleDateString("nb-NO")}`,
                );
            }
            if (post.short_description) {
                lines.push(`\n${post.short_description}`);
            }

            if (post.article && post.article.length > 0) {
                lines.push("\n---\n");
                lines.push(portableTextToString(post.article));
            }

            return {
                content: [{ type: "text", text: lines.join("\n") }],
            };
        },
    );

    // -------------------------------------------------------------------------
    // Search portal
    // -------------------------------------------------------------------------
    server.registerTool(
        "portal_search",
        {
            description:
                "Search across all content in the Jøkul portal (components, fundamentals and blog posts)",
            inputSchema: {
                query: z
                    .string()
                    .describe(
                        'The search term, e.g. "tilgjengelighet", "knapp", "farger"',
                    ),
            },
        },
        async ({ query }) => {
            const results = await searchPortal(query);

            if (results.length === 0) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No results found for "${query}" in the Jøkul portal. Try portal_list_components, portal_list_fundamentals or portal_list_blog_posts to browse all content.`,
                        },
                    ],
                };
            }

            const mapped = results.map((r) => {
                const section =
                    r._type === "jokul_component"
                        ? "komponenter"
                        : r._type === "jokul_fundamentals"
                          ? "grunnleggende"
                          : "blogg";
                return {
                    type: r._type,
                    name: r.name,
                    slug: r.slug,
                    url: `${PORTAL_BASE_URL}/${section}/${r.slug}`,
                    short_description: r.short_description,
                    categories: r.categories,
                    keywords: r.keywords,
                };
            });

            return {
                content: [
                    { type: "text", text: JSON.stringify(mapped, null, 2) },
                ],
            };
        },
    );
}
