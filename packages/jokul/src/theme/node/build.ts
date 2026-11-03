/** @internal Se `./index.ts`. */
import {
    copyFile,
    mkdir,
    readFile,
    readdir,
    writeFile,
} from "node:fs/promises";
import { join, resolve } from "node:path";
import StyleDictionary from "style-dictionary";
import {
    createThemeConfig,
    findPackageRoot,
} from "../../tokens/style-dictionary/config.js";
import "../../tokens/style-dictionary/register.js";
import type { JokulThemeFile } from "../file/themeFile.js";
import { themeToTokenFiles } from "../file/tokens.js";
import { writeJson } from "./files.js";

const GENERATED_HEADER = "Do not edit directly, this file was auto-generated.";

export type BuildThemeOptions = {
    outDir: string;
    selector?: string;
    /** Mappe med `*.woff2`-filer som kopieres til `<outDir>/fonts/`. */
    fontsDir?: string;
};

export type BuildThemesOptions = {
    outDir: string;
    selector?: string;
    /** Kompiler `_index.scss` til `theme.css` for hvert tema. Krever `sass`. */
    css?: boolean;
    /** Skriv `_index.scss`, `manifest.json` og (med `css`) `all.css` for alle temaene. */
    index?: boolean;
    /** Skriv `brands.d.ts` som utvider `JokulBrands` med temaene. */
    types?: boolean;
};

export type ThemeManifest = {
    jokulVersion: string;
    themes: Array<{
        name: string;
        title: string;
        css?: string;
        scss: string;
    }>;
};

async function copyFonts(fontsDir: string, outDir: string) {
    let fileNames: string[];
    try {
        fileNames = (await readdir(fontsDir)).filter((fileName) =>
            fileName.endsWith(".woff2"),
        );
    } catch {
        return;
    }

    if (fileNames.length === 0) {
        return;
    }

    await mkdir(join(outDir, "fonts"), { recursive: true });
    await Promise.all(
        fileNames.map((fileName) =>
            copyFile(join(fontsDir, fileName), join(outDir, "fonts", fileName)),
        ),
    );
}

/**
 * Skriver temaets token-filer og bygger `_color-scheme.scss`, `_fonts.scss`
 * og `_index.scss` til `outDir`.
 */
export async function buildTheme(
    theme: JokulThemeFile,
    { outDir, selector, fontsDir }: BuildThemeOptions,
): Promise<void> {
    const absoluteOutDir = resolve(outDir);
    const tokenFiles = await Promise.all(
        Object.entries(themeToTokenFiles(theme)).map(
            async ([fileName, tokens]) => {
                const path = join(absoluteOutDir, fileName);
                await writeJson(path, tokens);
                return path;
            },
        ),
    );

    const config = createThemeConfig({
        name: theme.name,
        tokenFiles,
        outDir: absoluteOutDir,
        selector,
    });
    const dictionary = new StyleDictionary({
        ...config,
        log: { ...config.log, verbosity: "silent" },
    });
    await dictionary.buildPlatform("css");

    if (fontsDir) {
        await copyFonts(fontsDir, absoluteOutDir);
    }
}

async function loadSass() {
    try {
        return await import("sass");
    } catch {
        throw new Error(
            "`--css` krever `sass`. Installer det med `pnpm add -D sass`.",
        );
    }
}

async function getJokulVersion() {
    const packageJson = JSON.parse(
        await readFile(join(findPackageRoot(), "package.json"), "utf8"),
    );

    return packageJson.version as string;
}

/**
 * Bygger ett eller flere temaer til `<outDir>/<name>/`, og eventuelt felles
 * filer for alle temaene.
 */
export async function buildThemes(
    themes: Array<{ theme: JokulThemeFile; fontsDir?: string }>,
    { outDir, selector, css, index, types }: BuildThemesOptions,
): Promise<ThemeManifest> {
    const names = themes.map(({ theme }) => theme.name);
    const duplicates = names.filter(
        (name, position) => names.indexOf(name) !== position,
    );
    if (duplicates.length > 0) {
        throw new Error(
            `Flere temafiler har samme navn: ${[...new Set(duplicates)].join(", ")}.`,
        );
    }

    if (selector && themes.length > 1) {
        throw new Error("`--selector` kan bare brukes med én temafil.");
    }

    const absoluteOutDir = resolve(outDir);
    const sass = css ? await loadSass() : undefined;

    for (const { theme, fontsDir } of themes) {
        const themeDir = join(absoluteOutDir, theme.name);
        await buildTheme(theme, { outDir: themeDir, selector, fontsDir });

        if (sass) {
            const result = sass.compile(join(themeDir, "_index.scss"), {
                style: "expanded",
            });
            await writeFile(join(themeDir, "theme.css"), `${result.css}\n`);
        }
    }

    const manifest: ThemeManifest = {
        jokulVersion: await getJokulVersion(),
        themes: themes.map(({ theme }) => ({
            name: theme.name,
            title: theme.title ?? theme.name,
            ...(css && { css: `./${theme.name}/theme.css` }),
            scss: `./${theme.name}/_index.scss`,
        })),
    };

    if (index) {
        await writeFile(
            join(absoluteOutDir, "_index.scss"),
            `// ${GENERATED_HEADER}\n${names.map((name) => `@forward "${name}";`).join("\n")}\n`,
        );
        await writeJson(join(absoluteOutDir, "manifest.json"), manifest);

        if (sass) {
            const entry = names
                .map(
                    (name) =>
                        `@use "${name}" with ($webfonts-dir-${name}: "./${name}/fonts");`,
                )
                .join("\n");
            const result = sass.compileString(entry, {
                loadPaths: [absoluteOutDir],
                style: "expanded",
            });
            await writeFile(join(absoluteOutDir, "all.css"), `${result.css}\n`);
        }
    }

    if (types) {
        const brands = names
            .map((name) => `        ${JSON.stringify(name)}: true;`)
            .join("\n");
        await writeFile(
            join(absoluteOutDir, "brands.d.ts"),
            `// ${GENERATED_HEADER}
export {};

declare module "@fremtind/jokul/utilities" {
    interface JokulBrands {
${brands}
    }
}
`,
        );
    }

    return manifest;
}
