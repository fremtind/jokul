import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the jokul package from this MCP server
export const JOKUL_PACKAGE_PATH = path.resolve(__dirname, "../../../jokul");
export const COMPONENTS_PATH = path.join(JOKUL_PACKAGE_PATH, "src/components");

// Component information cache
export interface ComponentInfo {
    name: string;
    path: string;
    hasFigmaConnect: boolean;
    hasStories: boolean;
    hasDocumentation: boolean;
    exports: string[];
}

let componentsCache: ComponentInfo[] | null = null;

export async function getAvailableComponents(): Promise<ComponentInfo[]> {
    if (componentsCache) {
        return componentsCache;
    }

    const componentDirs = await fs.readdir(COMPONENTS_PATH);
    const components: ComponentInfo[] = [];

    for (const dir of componentDirs) {
        const componentPath = path.join(COMPONENTS_PATH, dir);
        const stat = await fs.stat(componentPath);

        if (!stat.isDirectory()) continue;

        const files = await fs.readdir(componentPath);

        // Check for various files
        const hasFigmaConnect = files.some((f) => f.endsWith(".figma.tsx"));
        const hasStories =
            files.includes("stories") ||
            files.some((f) => f.includes(".stories."));
        const hasDocumentation =
            files.includes("documentation") ||
            files.some((f) => f.includes("Docs.tsx"));

        // Get exports from index.ts
        const indexPath = path.join(componentPath, "index.ts");
        let exports: string[] = [];
        try {
            const indexContent = await fs.readFile(indexPath, "utf-8");
            const exportMatches = indexContent.match(/export\s+\{([^}]+)\}/g);
            if (exportMatches) {
                exports = exportMatches
                    .map((m) => m.replace(/export\s*\{|\}/g, ""))
                    .flatMap((m) => m.split(","))
                    .map((e) => e.trim().split(" as ")[0].trim())
                    .filter((e) => e && !e.startsWith("type"));
            }
        } catch {
            // No index.ts or can't read it
        }

        components.push({
            name: dir,
            path: componentPath,
            hasFigmaConnect,
            hasStories,
            hasDocumentation,
            exports,
        });
    }

    componentsCache = components;
    return components;
}

export async function getComponentFigmaConnect(
    componentName: string,
): Promise<string | null> {
    const componentPath = path.join(COMPONENTS_PATH, componentName);

    try {
        const files = await fs.readdir(componentPath);
        const figmaFiles = files.filter((f) => f.endsWith(".figma.tsx"));

        if (figmaFiles.length === 0) {
            // Check subdirectories (e.g., icons/code-connect/)
            const subDirs = files.filter((f) =>
                fs
                    .stat(path.join(componentPath, f))
                    .then((s) => s.isDirectory()),
            );
            for (const subDir of subDirs) {
                const subPath = path.join(componentPath, subDir);
                try {
                    const subFiles = await fs.readdir(subPath);
                    const subFigmaFiles = subFiles.filter((f) =>
                        f.endsWith(".figma.tsx"),
                    );
                    if (subFigmaFiles.length > 0) {
                        const contents = await Promise.all(
                            subFigmaFiles.map((f) =>
                                fs.readFile(path.join(subPath, f), "utf-8"),
                            ),
                        );
                        return contents.join("\n\n---\n\n");
                    }
                } catch {
                    // Skip directories that can't be read
                }
            }
            return null;
        }

        const contents = await Promise.all(
            figmaFiles.map((f) =>
                fs.readFile(path.join(componentPath, f), "utf-8"),
            ),
        );
        return contents.join("\n\n---\n\n");
    } catch {
        return null;
    }
}

export async function getComponentSource(
    componentName: string,
): Promise<string | null> {
    const componentPath = path.join(COMPONENTS_PATH, componentName);

    try {
        const files = await fs.readdir(componentPath);
        // Find main component file (typically PascalCase.tsx)
        const mainFile = files.find(
            (f) =>
                f.endsWith(".tsx") &&
                !f.includes(".test.") &&
                !f.includes(".stories.") &&
                !f.includes(".figma.") &&
                !f.includes("Docs"),
        );

        if (!mainFile) return null;

        return await fs.readFile(path.join(componentPath, mainFile), "utf-8");
    } catch {
        return null;
    }
}

export async function getComponentTypes(
    componentName: string,
): Promise<string | null> {
    const componentPath = path.join(COMPONENTS_PATH, componentName);

    try {
        const typesPath = path.join(componentPath, "types.ts");
        return await fs.readFile(typesPath, "utf-8");
    } catch {
        return null;
    }
}

export async function getComponentStories(
    componentName: string,
): Promise<string | null> {
    const storiesPath = path.join(COMPONENTS_PATH, componentName, "stories");

    try {
        const files = await fs.readdir(storiesPath);
        const storyFiles = files.filter(
            (f) => f.endsWith(".stories.tsx") && !f.includes(".visual."),
        );

        if (storyFiles.length === 0) return null;

        const contents = await Promise.all(
            storyFiles.map(async (f) => {
                const content = await fs.readFile(
                    path.join(storiesPath, f),
                    "utf-8",
                );
                return `// ${f}\n${content}`;
            }),
        );
        return contents.join("\n\n---\n\n");
    } catch {
        return null;
    }
}
