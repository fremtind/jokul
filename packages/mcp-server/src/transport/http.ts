import { randomUUID } from "node:crypto";
import {
    type Server as HttpServer,
    type IncomingMessage,
    type ServerResponse,
    createServer,
} from "node:http";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

/**
 * Configuration for the HTTP server
 */
export interface ServerConfig {
    port: number;
    host: string;
    corsOrigins: string[];
}

/**
 * Get server configuration from environment variables
 */
export function getConfig(): ServerConfig {
    return {
        port: Number.parseInt(process.env.PORT || "3000", 10),
        host: process.env.HOST || "0.0.0.0",
        corsOrigins: process.env.CORS_ORIGINS?.split(",") || ["*"],
    };
}

/**
 * Set CORS headers on response
 */
function setCorsHeaders(res: ServerResponse, config: ServerConfig): void {
    const origin = config.corsOrigins.includes("*")
        ? "*"
        : config.corsOrigins.join(", ");
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Accept, Mcp-Session-Id",
    );
    res.setHeader(
        "Access-Control-Expose-Headers",
        "Content-Type, Mcp-Session-Id",
    );
}

/**
 * Parse URL path and query parameters
 */
function parseUrl(url: string): {
    pathname: string;
    searchParams: URLSearchParams;
} {
    const parsedUrl = new URL(url, "http://localhost");
    return {
        pathname: parsedUrl.pathname,
        searchParams: parsedUrl.searchParams,
    };
}

/**
 * Session data stored for each connected client
 */
interface Session {
    transport: StreamableHTTPServerTransport;
    server: McpServer;
}

/**
 * Start the HTTP server with Streamable HTTP transport for remote MCP connections.
 * This allows multiple teams to connect their AI agents to a shared Jøkul MCP server.
 *
 * Uses the modern StreamableHTTPServerTransport which supports both SSE streaming
 * and direct HTTP responses, with built-in session management.
 */
export async function startHttpServer(
    config: ServerConfig,
    createMcpServer: () => McpServer,
): Promise<HttpServer> {
    // Store active sessions: transport + server pairs
    const sessions = new Map<string, Session>();

    const httpServer = createServer(
        async (req: IncomingMessage, res: ServerResponse) => {
            const { pathname } = parseUrl(req.url || "/");
            const method = req.method || "GET";

            // Set CORS headers for all responses
            setCorsHeaders(res, config);

            // Handle preflight requests
            if (method === "OPTIONS") {
                res.writeHead(204);
                res.end();
                return;
            }

            // Health check endpoint
            if (pathname === "/health" && method === "GET") {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        status: "ok",
                        server: "jokul-mcp-server",
                        version: "1.0.0",
                        transport: "streamable-http",
                        activeSessions: sessions.size,
                    }),
                );
                return;
            }

            // MCP endpoint - handles all MCP communication
            if (pathname === "/mcp") {
                await handleMcpRequest(
                    req,
                    res,
                    method,
                    sessions,
                    createMcpServer,
                );
                return;
            }

            // Info endpoint - provides usage information
            if (pathname === "/" && method === "GET") {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        name: "Jøkul MCP Server",
                        description:
                            "MCP server for Jøkul design system - helps AI models use Jøkul components correctly",
                        version: "1.0.0",
                        endpoints: {
                            mcp: {
                                methods: ["GET", "POST", "DELETE"],
                                path: "/mcp",
                                description:
                                    "MCP Streamable HTTP endpoint - POST to send requests, GET for SSE stream, DELETE to close session",
                            },
                            health: {
                                method: "GET",
                                path: "/health",
                                description: "Health check endpoint",
                            },
                        },
                        documentation: "https://jokul.fremtind.no",
                        github: "https://github.com/fremtind/jokul",
                    }),
                );
                return;
            }

            // 404 for unknown routes
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Not found" }));
        },
    );

    // Start listening
    httpServer.listen(config.port, config.host, () => {
        console.error(`
╔════════════════════════════════════════════════════════════════╗
║                    Jøkul MCP Server                            ║
╠════════════════════════════════════════════════════════════════╣
║  Mode:      Streamable HTTP (Remote)                           ║
║  URL:       http://${config.host}:${config.port.toString().padEnd(36)}║
║  MCP:       http://${config.host}:${config.port}/mcp${" ".repeat(30)}║
║  Health:    http://${config.host}:${config.port}/health${" ".repeat(27)}║
╠════════════════════════════════════════════════════════════════╣
║  Connect your MCP client to the /mcp endpoint above.           ║
╚════════════════════════════════════════════════════════════════╝
`);
    });

    // Handle graceful shutdown
    const shutdown = async () => {
        console.error("\nShutting down Jøkul MCP Server...");

        // Close all active sessions
        for (const [sessionId, session] of sessions) {
            try {
                await session.transport.close();
                console.error(`Closed session: ${sessionId}`);
            } catch (error) {
                console.error(`Error closing session ${sessionId}:`, error);
            }
        }
        sessions.clear();

        httpServer.close(() => {
            console.error("Server closed.");
            process.exit(0);
        });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

    return httpServer;
}

/**
 * Handle MCP endpoint requests (POST, GET, DELETE)
 */
async function handleMcpRequest(
    req: IncomingMessage,
    res: ServerResponse,
    method: string,
    sessions: Map<string, Session>,
    createMcpServer: () => McpServer,
): Promise<void> {
    // Handle POST requests (new sessions and messages)
    if (method === "POST") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        // If we have a session ID, route to existing session
        if (sessionId) {
            const session = sessions.get(sessionId);
            if (session) {
                await session.transport.handleRequest(req, res);
                return;
            }
        }

        // New session - create transport and server
        console.error(
            `[${new Date().toISOString()}] New MCP session from ${req.socket.remoteAddress}`,
        );

        try {
            const transport = new StreamableHTTPServerTransport({
                sessionIdGenerator: () => randomUUID(),
                onsessioninitialized: (newSessionId) => {
                    // Store the session after initialization
                    const mcpServer = createMcpServer();
                    sessions.set(newSessionId, {
                        transport,
                        server: mcpServer,
                    });
                    console.error(
                        `[${new Date().toISOString()}] Session initialized: ${newSessionId}`,
                    );

                    // Set up cleanup on close
                    transport.onclose = () => {
                        sessions.delete(newSessionId);
                        console.error(
                            `[${new Date().toISOString()}] Session closed: ${newSessionId}`,
                        );
                    };

                    // Connect McpServer to transport via its underlying server
                    mcpServer.server.connect(transport).catch((error) => {
                        console.error(
                            `[${new Date().toISOString()}] Error connecting server:`,
                            error,
                        );
                    });
                },
            });

            await transport.handleRequest(req, res);
        } catch (error) {
            console.error(
                `[${new Date().toISOString()}] Error handling MCP request:`,
                error,
            );
            if (!res.headersSent) {
                res.writeHead(500, {
                    "Content-Type": "application/json",
                });
                res.end(
                    JSON.stringify({
                        jsonrpc: "2.0",
                        error: {
                            code: -32603,
                            message: "Internal server error",
                        },
                        id: null,
                    }),
                );
            }
        }
        return;
    }

    // Handle GET requests (SSE stream for server-initiated messages)
    if (method === "GET") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        if (!sessionId || !sessions.has(sessionId)) {
            res.writeHead(400, {
                "Content-Type": "application/json",
            });
            res.end(
                JSON.stringify({
                    jsonrpc: "2.0",
                    error: {
                        code: -32600,
                        message: "Invalid or missing session ID",
                    },
                    id: null,
                }),
            );
            return;
        }

        const session = sessions.get(sessionId);
        if (session) {
            await session.transport.handleRequest(req, res);
        }
        return;
    }

    // Handle DELETE requests (session termination)
    if (method === "DELETE") {
        const sessionId = req.headers["mcp-session-id"] as string | undefined;

        if (sessionId) {
            const session = sessions.get(sessionId);
            if (session) {
                await session.transport.close();
                sessions.delete(sessionId);
                console.error(
                    `[${new Date().toISOString()}] Session terminated: ${sessionId}`,
                );
                res.writeHead(204);
                res.end();
                return;
            }
        }

        res.writeHead(404, {
            "Content-Type": "application/json",
        });
        res.end(
            JSON.stringify({
                jsonrpc: "2.0",
                error: {
                    code: -32600,
                    message: "Session not found",
                },
                id: null,
            }),
        );
        return;
    }

    // Method not allowed
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify({
            jsonrpc: "2.0",
            error: {
                code: -32600,
                message: "Method not allowed",
            },
            id: null,
        }),
    );
}
