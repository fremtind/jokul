# Jøkul MCP Server

An MCP (Model Context Protocol) server that helps AI models use Jøkul design system correctly. It provides tools and resources for accessing Jøkul documentation, component information, Figma Code Connect examples, and migration guidance.

## Table of Contents

- [What is MCP?](#what-is-mcp)
- [Features](#features)
- [Installation](#installation)
- [Transport Modes](#transport-modes)
- [Usage](#usage)
  - [Stdio Mode (Default)](#stdio-mode-default)
  - [HTTP Mode (Remote/Shared)](#http-mode-remoteshared)
  - [Docker Deployment](#docker-deployment)
  - [Kubernetes Deployment](#kubernetes-deployment)
- [Available Tools](#available-tools)
- [Available Prompts](#available-prompts)
- [Available Resources](#available-resources)
- [Example Interactions](#example-interactions)
- [CLI Reference](#cli-reference)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) is an open protocol that enables AI models to interact with external tools and data sources. This server exposes Jøkul's documentation and component information through MCP, making it easy for AI assistants to help you build with Jøkul correctly.

## Features

- **Component Discovery**: List and search all available Jøkul components
- **Figma Code Connect**: Access Code Connect examples showing how Figma designs map to React code
- **Component Details**: Get source code, types, and usage examples for any component
- **Import Statements**: Get correct import statements for components, hooks, and utilities
- **Usage Guide**: Access the comprehensive Jøkul usage guide
- **Migration Guide**: Get migration guidance for upgrading between versions
- **Portal Documentation**: Query the live Jøkul portal (Sanity CMS) for component guidelines, design principles and blog posts

## Installation

```bash
# From the jokul monorepo
pnpm install
pnpm --filter @fremtind/jokul-mcp-server build

# Or install globally (once published)
npm install -g @fremtind/jokul-mcp-server
```

## Transport Modes

The server supports two transport modes:

| Mode | Use Case | Connection |
|------|----------|------------|
| **stdio** (default) | Local development, single user | Standard input/output |
| **Streamable HTTP** | Shared service, multiple teams | HTTP with SSE streaming |

## Usage

### Stdio Mode (Default)

Stdio mode is ideal for local development and is compatible with most MCP clients.

#### With VS Code (GitHub Copilot)

Add to `.vscode/mcp.json` in your project:

```json
{
    "servers": {
        "jokul": {
            "command": "node",
            "args": ["/path/to/jokul/packages/mcp-server/dist/index.js"]
        }
    }
}
```

Or globally in your VS Code settings (`settings.json`):

```json
{
    "mcp": {
        "servers": {
            "jokul": {
                "command": "node",
                "args": ["/path/to/jokul/packages/mcp-server/dist/index.js"]
            }
        }
    }
}
```

#### With IntelliJ IDEA (AI Assistant)

Add to `.idea/mcp.json` in your project:

```json
{
    "servers": {
        "jokul": {
            "command": "node",
            "args": ["/path/to/jokul/packages/mcp-server/dist/index.js"]
        }
    }
}
```

#### With Zed

Add to your Zed settings:

```json
{
    "context_servers": {
        "jokul": {
            "command": {
                "path": "node",
                "args": ["/path/to/jokul/packages/mcp-server/dist/index.js"]
            }
        }
    }
}
```

#### With Claude Desktop

Add to your Claude Desktop configuration (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
    "mcpServers": {
        "jokul": {
            "command": "node",
            "args": ["/path/to/jokul/packages/mcp-server/dist/index.js"]
        }
    }
}
```

### HTTP Mode (Remote/Shared)

HTTP mode allows you to deploy the MCP server as a shared service that multiple teams can connect to. It uses the modern Streamable HTTP transport which supports both SSE streaming and direct HTTP responses.

#### Starting the HTTP Server

```bash
# Start with HTTP transport on default port (3000)
node dist/index.js --http

# Start on a custom port
node dist/index.js --http --port 8080

# Using npm scripts
pnpm start:http
```

#### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | HTTP server port | `3000` |
| `HOST` | HTTP server host/interface | `0.0.0.0` |
| `CORS_ORIGINS` | Comma-separated allowed origins | `*` |

#### HTTP Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Server info and endpoint documentation |
| `/mcp` | POST | Send MCP requests (include `Mcp-Session-Id` header for existing sessions) |
| `/mcp` | GET | Establish SSE stream for server-initiated messages (requires `Mcp-Session-Id` header) |
| `/mcp` | DELETE | Terminate an MCP session (requires `Mcp-Session-Id` header) |
| `/health` | GET | Health check endpoint for monitoring |

#### Connecting MCP Clients to HTTP Server

For clients that support Streamable HTTP transport:

**VS Code** (`.vscode/mcp.json`):
```json
{
    "servers": {
        "jokul": {
            "type": "http",
            "url": "https://jokul-mcp.your-domain.com/mcp"
        }
    }
}
```

**Claude Desktop**:
```json
{
    "mcpServers": {
        "jokul": {
            "transport": "http",
            "url": "https://jokul-mcp.your-domain.com/mcp"
        }
    }
}
```

**IntelliJ IDEA** (`.idea/mcp.json`):
```json
{
    "servers": {
        "jokul": {
            "type": "http",
            "url": "https://jokul-mcp.your-domain.com/mcp"
        }
    }
}
```

**Zed** (settings):
```json
{
    "context_servers": {
        "jokul": {
            "type": "http",
            "url": "https://jokul-mcp.your-domain.com/mcp"
        }
    }
}
```

### Docker Deployment

#### Dockerfile

```dockerfile
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

# Copy built files
COPY dist ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Run in HTTP mode
CMD ["node", "dist/index.js", "--http"]
```

#### Docker Compose

```yaml
version: '3.8'

services:
  jokul-mcp:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - HOST=0.0.0.0
      - CORS_ORIGINS=https://your-app.example.com
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
```

#### Building and Running with Docker

```bash
# Build the image (must be run from the monorepo root)
docker build -f packages/mcp-server/Dockerfile -t jokul-mcp-server .

# Or use the npm script from anywhere:
pnpm --filter @fremtind/jokul-mcp-server docker:build

# Run the container
docker run -p 3000:3000 -e SANITY_PROJECT_ID=<din-project-id> jokul-mcp-server

# Run with environment variables
docker run -p 8080:8080 \
    -e PORT=8080 \
    -e SANITY_PROJECT_ID=<din-project-id> \
    -e CORS_ORIGINS=https://myapp.example.com \
    jokul-mcp-server
```

### Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jokul-mcp-server
spec:
  replicas: 2
  selector:
    matchLabels:
      app: jokul-mcp-server
  template:
    metadata:
      labels:
        app: jokul-mcp-server
    spec:
      containers:
      - name: jokul-mcp-server
        image: your-registry/jokul-mcp-server:latest
        ports:
        - containerPort: 3000
        env:
        - name: PORT
          value: "3000"
        - name: CORS_ORIGINS
          value: "*"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: jokul-mcp-server
spec:
  selector:
    app: jokul-mcp-server
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
```

## Environment Variables

### Portal (Sanity CMS) Configuration

The portal tools query the Jøkul portal's Sanity backend. The project ID is bundled as a default, but you can override all values via environment variables:

| Variable | Description | Default |
|---|---|---|
| `SANITY_PROJECT_ID` | Sanity project ID (**required** for portal tools) | *(none)* |
| `SANITY_DATASET` | Sanity dataset name | `production` |
| `SANITY_API_VERSION` | Sanity API version (ISO date) | `2025-04-03` |
| `SANITY_API_TOKEN` | Read token for private datasets | *(none)* |

`SANITY_PROJECT_ID` must match the value in `portal/.env` (`NEXT_PUBLIC_SANITY_PROJECT_ID`). If the dataset is public, no token is needed.

## Available Tools

### `list_components`

List all available Jøkul components with their features.

```json
{
    "filter": "button"
}
```

### `get_component_info`

Get detailed information about a specific component.

```json
{
    "component": "button",
    "include": ["source", "types", "figma", "stories"]
}
```

### `get_figma_code_connect`

Get Figma Code Connect examples for a component, showing how Figma designs map to React code.

```json
{
    "component": "modal"
}
```

### `get_usage_guide`

Get the comprehensive Jøkul usage guide including installation, setup, and best practices.

```json
{}
```

### `get_migration_guide`

Get migration guidance for upgrading Jøkul versions.

```json
{}
```

### `search_components`

Search for components by functionality or use case.

```json
{
    "query": "form input"
}
```

### `get_import_statement`

Get the correct import statement for any Jøkul export.

```json
{
    "item": "Button"
}
```

### `portal_list_components`

List all Jøkul components documented in the portal, including descriptions, categories and status.

```json
{
    "filter": "skjema"
}
```

### `portal_get_component`

Get full portal documentation for a component, including usage guidelines, do/don't lists, code examples and related components.

```json
{
    "slug": "button"
}
```

### `portal_list_fundamentals`

List all Jøkul fundamentals articles (design principles, accessibility guidelines, brand guidelines, etc.).

```json
{}
```

### `portal_get_fundamental`

Get the full content of a Jøkul fundamentals article.

```json
{
    "slug": "tilgjengelighet"
}
```

### `portal_list_blog_posts`

List blog posts and articles from the Jøkul portal. Optionally filter by category.

```json
{
    "category": "Release notes"
}
```

### `portal_get_blog_post`

Get the full content of a Jøkul blog post or article.

```json
{
    "slug": "kom-i-gang"
}
```

### `portal_search`

Search across all content in the Jøkul portal (components, fundamentals and blog posts).

```json
{
    "query": "tilgjengelighet"
}
```

## Available Prompts

The server provides prompt templates to guide AI models in common tasks:

### `create_jokul_component`

Guide for creating a new UI component using Jøkul. Ensures correct imports, accessibility, and best practices.

Arguments:
- `component_type` (required): The type of component (e.g., "form", "card", "modal")
- `description` (optional): What the component should do

### `review_jokul_usage`

Review existing code for correct Jøkul usage patterns, accessibility, and deprecated APIs.

Arguments:
- `code` (required): The code to review

### `migrate_to_jokul_v4`

Help migrate code from older Jøkul versions to v4, including density→size changes, typography updates, and beta component migrations.

Arguments:
- `code` (required): The code to migrate

## Available Resources

The server also exposes resources that can be read directly:

- `jokul://usage-guide` - Comprehensive usage guide
- `jokul://migration-guide` - Migration documentation
- `jokul://components` - JSON list of all components

## Example Interactions

### Finding the right component

> "I need a dropdown for selecting a country"

The AI can use `search_components` with query "select" or "form input" to find the `Select` component, then use `get_component_info` to show usage examples.

### Getting correct imports

> "How do I import the Button component?"

The AI can use `get_import_statement` with item "Button" to get:

```tsx
import { Button } from "@fremtind/jokul/button";

// Style import (SCSS)
@use "@fremtind/jokul/styles/components/button";
```

### Understanding Figma-to-code mapping

> "How does the Modal look in code based on the Figma design?"

The AI can use `get_figma_code_connect` with component "modal" to show exactly how Figma properties map to React props.

## CLI Reference

```
Jøkul MCP Server - AI assistant for Jøkul design system

USAGE:
    jokul-mcp-server [OPTIONS]

OPTIONS:
    --http, -h          Run in HTTP/SSE mode for remote connections
    --port, -p <PORT>   Port number for HTTP mode (default: 3000)
    --help              Show this help message

MODES:
    stdio (default)     Standard input/output mode for local CLI tools
                        Compatible with VS Code, Claude Desktop, Zed, etc.

    http                HTTP server with SSE transport for remote connections
                        Allows multiple teams to share a single MCP server

EXAMPLES:
    # Run in stdio mode (default)
    jokul-mcp-server

    # Run in HTTP mode on default port 3000
    jokul-mcp-server --http

    # Run in HTTP mode on custom port
    jokul-mcp-server --http --port 8080
```

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Development (watch mode)
pnpm dev

# Run in stdio mode
pnpm start

# Run in HTTP mode
pnpm start:http
```

## Contributing

This MCP server is part of the Jøkul monorepo. See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

MIT - See [LICENSE](../../LICENSE)