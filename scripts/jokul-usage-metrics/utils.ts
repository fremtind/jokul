import { readdirSync } from "node:fs";
import { join } from "node:path";

export function createLogger(isVerbose) {
    return (message, warn = false) => {
        if (!isVerbose && !warn) {
            return;
        }

        const method = warn ? console.warn : console.log;
        method(message);
    };
}

export async function mapWithConcurrency(items, concurrency, mapper) {
    const results = [];
    let index = 0;

    const workers = Array.from(
        { length: Math.min(concurrency, items.length) },
        async () => {
            while (index < items.length) {
                const currentIndex = index;
                index += 1;
                results[currentIndex] = await mapper(items[currentIndex]);
            }
        },
    );

    await Promise.all(workers);
    return results;
}

export function chunk(items, size) {
    const chunks = [];

    for (let index = 0; index < items.length; index += size) {
        chunks.push(items.slice(index, index + size));
    }

    return chunks;
}

export function walkFiles(rootDir) {
    const filePaths = [];

    for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
        const fullPath = join(rootDir, entry.name);

        if (entry.isDirectory()) {
            filePaths.push(...walkFiles(fullPath));
        } else if (entry.isFile()) {
            filePaths.push(fullPath);
        }
    }

    return filePaths;
}

export function getWorkspaceRoot(packageJsonPath) {
    const slashIndex = packageJsonPath.lastIndexOf("/");
    return slashIndex === -1 ? "" : packageJsonPath.slice(0, slashIndex);
}

export function isPathInsideRoot(filePath, rootPath) {
    if (!rootPath) {
        return true;
    }

    return filePath === rootPath || filePath.startsWith(`${rootPath}/`);
}

export function isIgnoredSourcePath(filePath) {
    return (
        filePath.includes("node_modules/") ||
        filePath.includes("/dist/") ||
        filePath.includes("/build/") ||
        filePath.includes("/coverage/") ||
        filePath.includes("/storybook-static/") ||
        filePath.includes("/.next/") ||
        filePath.includes("/__tests__/") ||
        filePath.includes("/__mocks__/") ||
        filePath.includes("/stories/") ||
        filePath.endsWith(".d.ts") ||
        filePath.endsWith(".test.ts") ||
        filePath.endsWith(".test.tsx") ||
        filePath.endsWith(".test.js") ||
        filePath.endsWith(".test.jsx") ||
        filePath.endsWith(".spec.ts") ||
        filePath.endsWith(".spec.tsx") ||
        filePath.endsWith(".spec.js") ||
        filePath.endsWith(".spec.jsx") ||
        filePath.endsWith(".stories.ts") ||
        filePath.endsWith(".stories.tsx") ||
        filePath.endsWith(".stories.js") ||
        filePath.endsWith(".stories.jsx") ||
        filePath.endsWith(".figma.tsx")
    );
}

export function normalizeComponentKey(componentName) {
    return normalizeDashedKey(componentName.replace(/^BETA_/, ""));
}

export function normalizeHookKey(hookName) {
    return normalizeDashedKey(hookName);
}

export function normalizeUtilityKey(utilityName) {
    return normalizeDashedKey(utilityName);
}

export function normalizeDashedKey(name) {
    return name
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/_/g, "-")
        .toLowerCase();
}

export function toPascalCase(value) {
    return value
        .split(/[-_/]/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

export function determinePackageFamilyFromModulePath(modulePath) {
    if (
        modulePath === "@fremtind/jokul" ||
        modulePath.startsWith("@fremtind/jokul/")
    ) {
        return "consolidated";
    }

    if (modulePath.startsWith("@fremtind/jkl-")) {
        return "legacy";
    }

    return "";
}

export function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
