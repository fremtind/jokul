import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * Register all prompts on the MCP server
 */
export function registerPrompts(server: McpServer): void {
    // Create Jøkul component prompt
    server.registerPrompt(
        "create_jokul_component",
        {
            description:
                "Guide for creating a new UI component using Jøkul design system",
            argsSchema: {
                component_type: z
                    .string()
                    .describe(
                        "The type of component to create (e.g., form, card, modal, navigation)",
                    ),
                description: z
                    .string()
                    .optional()
                    .describe(
                        "Brief description of what the component should do",
                    ),
            },
        },
        ({ component_type, description }) => {
            return {
                messages: [
                    {
                        role: "user",
                        content: {
                            type: "text",
                            text: `I want to create a ${component_type} component${description ? ` that ${description}` : ""} using Jøkul design system.

Please help me:
1. Identify which Jøkul components I should use
2. Show me the correct import statements
3. Provide a complete code example following Jøkul best practices
4. Ensure accessibility requirements are met

Remember these Jøkul guidelines:
- Always import core styles: import "@fremtind/jokul/styles/base.scss"
- Use data-size on container elements, NOT as component props
- Use data-theme for light/dark mode
- All form components require a label prop
- Icon-only buttons need aria-label or title
- Clickable cards should have aria-label

Use the available tools to look up component details and Figma Code Connect examples.`,
                        },
                    },
                ],
            };
        },
    );

    // Review Jøkul usage prompt
    server.registerPrompt(
        "review_jokul_usage",
        {
            description:
                "Review code for correct Jøkul usage patterns and accessibility",
            argsSchema: {
                code: z.string().describe("The code to review"),
            },
        },
        ({ code }) => {
            return {
                messages: [
                    {
                        role: "user",
                        content: {
                            type: "text",
                            text: `Please review this code for correct Jøkul design system usage:

\`\`\`
${code}
\`\`\`

Check for:
1. **Import patterns**: Are components imported from "@fremtind/jokul/[component-name]"?
2. **Style imports**: Are component styles properly imported?
3. **Size handling**: Is data-size used on containers (NOT as component props)?
4. **Accessibility**:
   - Do icon-only buttons have aria-label or title?
   - Do form components have label props?
   - Do clickable cards have aria-label?
5. **Theming**: Is data-theme used correctly on container elements?
6. **Deprecated patterns**: Check for deprecated props or components

Use the get_usage_guide and get_migration_guide tools if needed.`,
                        },
                    },
                ],
            };
        },
    );

    // Migrate to Jøkul v4 prompt
    server.registerPrompt(
        "migrate_to_jokul_v4",
        {
            description: "Help migrate code from older Jøkul versions to v4",
            argsSchema: {
                code: z.string().describe("The code to migrate"),
            },
        },
        ({ code }) => {
            return {
                messages: [
                    {
                        role: "user",
                        content: {
                            type: "text",
                            text: `Please help me migrate this code to Jøkul v4:

\`\`\`
${code}
\`\`\`

Key migrations for v4:
1. **data-density → data-size**: Replace data-density="compact" with data-size="small"
2. **Remove size/density props**: Set data-size on container elements instead
3. **Typography mixins**:
   - "body" → "paragraph-medium"
   - "small" → "text-small" or "paragraph-small"
4. **Beta components**: Remove BETA_ prefix from Search, TableOfContents
5. **LinkList changes**: variant="ordered" → use TableOfContents component
6. **DescriptionList**: BETA_DescriptionList API has changed

Use the get_migration_guide tool for detailed migration instructions.

Please provide the migrated code with explanations of each change.`,
                        },
                    },
                ],
            };
        },
    );
}
