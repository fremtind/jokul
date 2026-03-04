/**
 * CLI argument parsing and help text for the MCP server
 */

export interface CliArgs {
    mode: "stdio" | "http";
    port?: number;
}

/**
 * Parse command-line arguments
 */
export function parseArgs(): CliArgs {
    const args = process.argv.slice(2);

    const isHttpMode = args.includes("--http") || args.includes("-h");
    const portArgIndex = args.findIndex(
        (arg) => arg === "--port" || arg === "-p",
    );
    const port =
        portArgIndex !== -1 && args[portArgIndex + 1]
            ? Number.parseInt(args[portArgIndex + 1], 10)
            : undefined;

    // Show help
    if (args.includes("--help")) {
        printHelp();
        process.exit(0);
    }

    return {
        mode: isHttpMode ? "http" : "stdio",
        port,
    };
}

/**
 * Print help text
 */
function printHelp(): void {
    console.log(`
Jøkul MCP Server - AI assistant for Jøkul design system

USAGE:
    jokul-mcp-server [OPTIONS]

OPTIONS:
    --http, -h          Run in Streamable HTTP mode for remote connections
    --port, -p <PORT>   Port number for HTTP mode (default: 3000)
    --help              Show this help message

MODES:
    stdio (default)     Standard input/output mode for local CLI tools
                        Compatible with VS Code, Claude Desktop, Zed, etc.

    http                Streamable HTTP server for remote connections
                        Allows multiple teams to share a single MCP server

EXAMPLES:
    # Run in stdio mode (default)
    jokul-mcp-server

    # Run in HTTP mode on default port 3000
    jokul-mcp-server --http

    # Run in HTTP mode on custom port
    jokul-mcp-server --http --port 8080

ENVIRONMENT VARIABLES:
    PORT                HTTP server port (default: 3000)
    HOST                HTTP server host (default: 0.0.0.0)
    CORS_ORIGINS        Comma-separated list of allowed origins (default: *)
`);
}
