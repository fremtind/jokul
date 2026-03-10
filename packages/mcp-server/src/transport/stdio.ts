import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

/**
 * Start the stdio transport for local CLI usage.
 * This is the default mode, compatible with VS Code, Claude Desktop, Zed, etc.
 *
 * @param createMcpServer Factory function to create a configured MCP server
 */
export async function startStdioServer(
    createMcpServer: () => McpServer,
): Promise<void> {
    const mcpServer = createMcpServer();
    const transport = new StdioServerTransport();
    await mcpServer.server.connect(transport);
    console.error("Jøkul MCP Server running on stdio");
}
