import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
    registerPortalTools,
    registerPrompts,
    registerResources,
    registerTools,
} from "./handlers/index.js";

/**
 * Create the MCP server using the high-level McpServer class.
 *
 * McpServer provides a cleaner API with:
 * - registerTool() for tools with Zod schema validation
 * - registerResource() for resources
 * - registerPrompt() for prompts
 *
 * This factory function allows creating multiple server instances for different
 * transport mechanisms (stdio, HTTP, etc.)
 */
export function createMcpServer(): McpServer {
    const server = new McpServer({
        name: "jokul-mcp-server",
        version: "1.0.0",
    });

    // Register all handlers
    registerTools(server);
    registerPrompts(server);
    registerResources(server);
    registerPortalTools(server);

    return server;
}
