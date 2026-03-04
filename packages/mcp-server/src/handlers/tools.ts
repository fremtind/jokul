import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
    getAvailableComponents,
    getComponentFigmaConnect,
    getComponentSource,
    getComponentStories,
    getComponentTypes,
} from "../utils/components.js";
import {
    getEmbeddedUsageGuide,
    readDocumentationFile,
} from "../utils/documentation.js";

/**
 * Category keywords for component search
 */
const categoryKeywords: Record<string, string[]> = {
    form: [
        "text-input",
        "text-area",
        "select",
        "checkbox",
        "radio-button",
        "toggle-switch",
        "datepicker",
        "file-input",
        "autosuggest",
        "combobox",
        "input-group",
    ],
    input: [
        "text-input",
        "text-area",
        "select",
        "checkbox",
        "radio-button",
        "autosuggest",
        "combobox",
        "datepicker",
        "file-input",
    ],
    navigation: [
        "breadcrumb",
        "nav-link",
        "link",
        "link-list",
        "tabs",
        "pagination",
        "menu",
        "table-of-contents",
    ],
    feedback: [
        "message",
        "system-message",
        "toast",
        "feedback",
        "loader",
        "progress-bar",
    ],
    layout: ["card", "flex", "expander", "modal", "popover"],
    button: ["button", "icon-button"],
    display: [
        "chip",
        "tag",
        "tooltip",
        "description-list",
        "table",
        "list",
        "image",
        "logo",
    ],
    icon: ["icon"],
};

/**
 * Known hooks in Jøkul
 */
const knownHooks = [
    "useAnimatedDetails",
    "useAnimatedHeight",
    "useBrowserPreferences",
    "useClickOutside",
    "useFocusOutside",
    "useId",
    "useIntersectionObserver",
    "useLocalStorage",
    "useMutationObserver",
    "useProgressiveImg",
    "useReducedMotion",
    "useScreen",
    "useScrollIntoView",
];

/**
 * Known utilities in Jøkul
 */
const knownUtilities = [
    "formatTelefonnummer",
    "formatKontonummer",
    "formatValuta",
    "formatFodselsnummer",
    "formatOrganisasjonsnummer",
    "unicode",
    "tabListener",
];

/**
 * Known core types in Jøkul
 */
const knownCoreTypes = ["WithChildren", "Density", "ColorScheme"];

/**
 * Register all tools on the MCP server
 */
export function registerTools(server: McpServer): void {
    // List components tool
    server.registerTool(
        "list_components",
        {
            description:
                "List all available Jøkul components with their features (Figma Code Connect, stories, documentation)",
            inputSchema: {
                filter: z
                    .string()
                    .optional()
                    .describe("Optional filter to search component names"),
            },
        },
        async ({ filter }) => {
            const components = await getAvailableComponents();
            const filterLower = filter?.toLowerCase();

            const filtered = filterLower
                ? components.filter((c) =>
                      c.name.toLowerCase().includes(filterLower),
                  )
                : components;

            const result = filtered.map((c) => ({
                name: c.name,
                exports: c.exports,
                features: {
                    figmaCodeConnect: c.hasFigmaConnect,
                    stories: c.hasStories,
                    documentation: c.hasDocumentation,
                },
            }));

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // Get component info tool
    server.registerTool(
        "get_component_info",
        {
            description:
                "Get detailed information about a specific Jøkul component including its source code, types, and usage examples",
            inputSchema: {
                component: z
                    .string()
                    .describe(
                        "The component name (e.g., 'button', 'text-input', 'modal')",
                    ),
                include: z
                    .array(z.enum(["source", "types", "figma", "stories"]))
                    .optional()
                    .describe("What information to include. Defaults to all."),
            },
        },
        async ({ component, include }) => {
            const includeItems = include || [
                "source",
                "types",
                "figma",
                "stories",
            ];
            const result: Record<string, string | null> = {};

            if (includeItems.includes("source")) {
                result.source = await getComponentSource(component);
            }
            if (includeItems.includes("types")) {
                result.types = await getComponentTypes(component);
            }
            if (includeItems.includes("figma")) {
                result.figmaCodeConnect =
                    await getComponentFigmaConnect(component);
            }
            if (includeItems.includes("stories")) {
                result.stories = await getComponentStories(component);
            }

            // Add import statement
            result.importStatement = `import { ... } from "@fremtind/jokul/${component}";`;
            result.styleImport = `@use "@fremtind/jokul/styles/components/${component}";`;

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // Get Figma Code Connect tool
    server.registerTool(
        "get_figma_code_connect",
        {
            description:
                "Get Figma Code Connect examples for a component. This shows how Figma designs map to React code.",
            inputSchema: {
                component: z
                    .string()
                    .describe(
                        "The component name (e.g., 'button', 'modal', 'checkbox')",
                    ),
            },
        },
        async ({ component }) => {
            const figmaConnect = await getComponentFigmaConnect(component);

            if (!figmaConnect) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No Figma Code Connect found for component: ${component}`,
                        },
                    ],
                };
            }

            return {
                content: [
                    {
                        type: "text",
                        text: `# Figma Code Connect for ${component}\n\nThis shows how Figma designs map to React code:\n\n\`\`\`tsx\n${figmaConnect}\n\`\`\``,
                    },
                ],
            };
        },
    );

    // Get usage guide tool
    server.registerTool(
        "get_usage_guide",
        {
            description:
                "Get the comprehensive usage guide for Jøkul, including installation, setup, import patterns, theming, and accessibility requirements",
        },
        async () => {
            const guide = await readDocumentationFile(
                ".github/copilot-instructions.md",
            );

            return {
                content: [
                    {
                        type: "text",
                        text: guide || getEmbeddedUsageGuide(),
                    },
                ],
            };
        },
    );

    // Get migration guide tool
    server.registerTool(
        "get_migration_guide",
        {
            description:
                "Get migration guidance for upgrading Jøkul versions, including breaking changes and code transformations",
        },
        async () => {
            const migration = await readDocumentationFile(
                "packages/jokul/MIGRATION.md",
            );

            return {
                content: [
                    {
                        type: "text",
                        text:
                            migration ||
                            "Migration guide not found. Please check https://github.com/fremtind/jokul for the latest migration documentation.",
                    },
                ],
            };
        },
    );

    // Search components tool
    server.registerTool(
        "search_components",
        {
            description: "Search for components by functionality or use case",
            inputSchema: {
                query: z
                    .string()
                    .describe(
                        "Search query (e.g., 'form input', 'navigation', 'feedback')",
                    ),
            },
        },
        async ({ query }) => {
            const queryLower = query.toLowerCase();
            const components = await getAvailableComponents();

            let matches: string[] = [];

            // Check category keywords
            for (const [category, componentNames] of Object.entries(
                categoryKeywords,
            )) {
                if (queryLower.includes(category)) {
                    matches.push(...componentNames);
                }
            }

            // Also do direct name matching
            const directMatches = components
                .filter(
                    (c) =>
                        c.name.includes(queryLower) ||
                        c.exports.some((e) =>
                            e.toLowerCase().includes(queryLower),
                        ),
                )
                .map((c) => c.name);

            matches = [...new Set([...matches, ...directMatches])];

            if (matches.length === 0) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `No components found matching "${query}". Try searching for: form, input, navigation, feedback, layout, button, display, or icon.`,
                        },
                    ],
                };
            }

            const result = components
                .filter((c) => matches.includes(c.name))
                .map((c) => ({
                    name: c.name,
                    exports: c.exports,
                    importPath: `@fremtind/jokul/${c.name}`,
                }));

            return {
                content: [
                    { type: "text", text: JSON.stringify(result, null, 2) },
                ],
            };
        },
    );

    // Get import statement tool
    server.registerTool(
        "get_import_statement",
        {
            description:
                "Get the correct import statement for a Jøkul component or utility",
            inputSchema: {
                item: z
                    .string()
                    .describe("The component, hook, or utility name to import"),
            },
        },
        async ({ item }) => {
            const itemLower = item.toLowerCase();

            // Check if it's a known hook
            if (
                knownHooks.some((h) => h.toLowerCase() === itemLower) ||
                itemLower.startsWith("use")
            ) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `import { ${item} } from "@fremtind/jokul/hooks";`,
                        },
                    ],
                };
            }

            // Check if it's a utility
            if (knownUtilities.some((u) => u.toLowerCase() === itemLower)) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `import { ${item} } from "@fremtind/jokul/utilities";`,
                        },
                    ],
                };
            }

            // Check if it's a core type
            if (knownCoreTypes.some((t) => t.toLowerCase() === itemLower)) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `import type { ${item} } from "@fremtind/jokul/core";`,
                        },
                    ],
                };
            }

            // Try to find matching component
            const components = await getAvailableComponents();
            for (const comp of components) {
                if (comp.exports.some((e) => e.toLowerCase() === itemLower)) {
                    return {
                        content: [
                            {
                                type: "text",
                                text: `// Component import\nimport { ${item} } from "@fremtind/jokul/${comp.name}";\n\n// Style import (SCSS)\n@use "@fremtind/jokul/styles/components/${comp.name}";\n\n// Or in JS/TS\nimport "@fremtind/jokul/styles/components/${comp.name}/_index.scss";`,
                            },
                        ],
                    };
                }
            }

            // Fallback: try to derive component from item name
            const kebabCase = item
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .toLowerCase();

            return {
                content: [
                    {
                        type: "text",
                        text: `// Best guess for "${item}":\nimport { ${item} } from "@fremtind/jokul/${kebabCase}";\n\n// If this is incorrect, use list_components to find the right component.`,
                    },
                ],
            };
        },
    );
}
