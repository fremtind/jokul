#!/usr/bin/env node

/**
 * Jøkul MCP Server
 *
 * An MCP (Model Context Protocol) server that helps AI models use the
 * Jøkul design system correctly. It provides tools and resources for
 * accessing Jøkul documentation, component information, Figma Code Connect
 * examples, and migration guidance.
 *
 * This server supports two transport modes:
 * - stdio: For local development with VS Code, Claude Desktop, Zed, etc.
 * - HTTP: For shared deployment as a service multiple teams can connect to
 */

import { parseArgs } from "./cli.js";
import { createMcpServer } from "./server.js";
import {
    getConfig,
    startHttpServer,
    startStdioServer,
} from "./transport/index.js";

/**
 * Main entry point
 */
async function main(): Promise<void> {
    const { mode, port } = parseArgs();
    const config = getConfig();

    // Override port from CLI if provided
    if (port !== undefined) {
        config.port = port;
    }

    if (mode === "http") {
        await startHttpServer(config, createMcpServer);
    } else {
        await startStdioServer(createMcpServer);
    }
}

main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
