import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getAvailableComponents } from "../utils/components.js";
import {
    getEmbeddedUsageGuide,
    readDocumentationFile,
} from "../utils/documentation.js";

/**
 * Register all resources on the MCP server
 */
export function registerResources(server: McpServer): void {
    // Usage guide resource
    server.registerResource(
        "usage-guide",
        "jokul://usage-guide",
        {
            description: "Comprehensive guide for using Jøkul design system",
            mimeType: "text/markdown",
        },
        async (uri) => {
            const guide = await readDocumentationFile(
                ".github/copilot-instructions.md",
            );

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: "text/markdown",
                        text: guide || getEmbeddedUsageGuide(),
                    },
                ],
            };
        },
    );

    // Migration guide resource
    server.registerResource(
        "migration-guide",
        "jokul://migration-guide",
        {
            description: "Guide for migrating between Jøkul versions",
            mimeType: "text/markdown",
        },
        async (uri) => {
            const migration = await readDocumentationFile(
                "packages/jokul/MIGRATION.md",
            );

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: "text/markdown",
                        text:
                            migration ||
                            "Migration guide not found. Please check https://github.com/fremtind/jokul",
                    },
                ],
            };
        },
    );

    // Components list resource
    server.registerResource(
        "components",
        "jokul://components",
        {
            description: "List of all available Jøkul components",
            mimeType: "application/json",
        },
        async (uri) => {
            const components = await getAvailableComponents();

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: "application/json",
                        text: JSON.stringify(components, null, 2),
                    },
                ],
            };
        },
    );
}
