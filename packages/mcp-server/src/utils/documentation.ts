import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { JOKUL_PACKAGE_PATH } from "./components.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readDocumentationFile(
    filename: string,
): Promise<string | null> {
    const possiblePaths = [
        path.resolve(__dirname, "../../../../", filename),
        path.resolve(__dirname, "../../../..", filename),
        path.join(JOKUL_PACKAGE_PATH, filename),
        path.join(JOKUL_PACKAGE_PATH, "..", "..", filename),
    ];

    for (const filePath of possiblePaths) {
        try {
            return await fs.readFile(filePath, "utf-8");
        } catch {
            // Skip if file can't be read, try next path
        }
    }
    return null;
}

/**
 * Embedded usage guide as fallback when the documentation file cannot be found.
 */
export function getEmbeddedUsageGuide(): string {
    return `# Jøkul Design System - Usage Guide

## What is Jøkul?

Jøkul is Fremtind's design system providing React components and CSS/SCSS stylesheets. All components are distributed as a single package: \`@fremtind/jokul\`.

## Installation

\`\`\`bash
npm install @fremtind/jokul
# or
pnpm add @fremtind/jokul
\`\`\`

**Note**: Jøkul is a pure ESM module.

## Required Setup

### 1. Core Styles (Required)

\`\`\`tsx
import "@fremtind/jokul/styles/base.scss";
\`\`\`

### 2. Vite Configuration

\`\`\`js
css: {
    preprocessorOptions: {
        scss: { api: 'modern' },
    },
},
\`\`\`

## Import Patterns

### Components
\`\`\`tsx
import { Button } from "@fremtind/jokul/button";
import { TextInput } from "@fremtind/jokul/text-input";
import { Select } from "@fremtind/jokul/select";
\`\`\`

### Component Styles
\`\`\`tsx
import "@fremtind/jokul/styles/components/button/_index.scss";
\`\`\`

### Hooks
\`\`\`tsx
import { useAnimatedDetails, useLocalStorage } from "@fremtind/jokul/hooks";
\`\`\`

### Utilities
\`\`\`tsx
import { formatTelefonnummer, formatKontonummer } from "@fremtind/jokul/utilities";
\`\`\`

## Theming

### Light/Dark Mode
\`\`\`tsx
<div className="jkl" data-theme="light">
    {/* Components inherit light theme */}
</div>
\`\`\`

### Size Modes
Control component sizing with \`data-size\` on container elements. Values: \`small\`, \`medium\` (default), \`large\`.

\`\`\`tsx
<section data-size="small">
    <Button>Compact button</Button>
</section>
\`\`\`

**Important**: Do NOT set size as a prop on individual components.

## Accessibility Requirements

### Buttons Without Visible Text
\`\`\`tsx
// ✅ Correct
<Button icon={<SaveIcon />} aria-label="Save document" />

// ❌ Incorrect
<Button icon={<SaveIcon />} />
\`\`\`

### Form Components
All form components require a \`label\` prop:
\`\`\`tsx
<TextInput label="Email address" name="email" />
\`\`\`

## Resources

- Documentation: https://jokul.fremtind.no
- Storybook: https://jokul.fremtind.no/storybook
- GitHub: https://github.com/fremtind/jokul
`;
}
