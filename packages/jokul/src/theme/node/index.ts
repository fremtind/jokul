/**
 * @internal Brukes kun av `jokul theme`-kommandolinjen. Modulen er ikke en del
 * av det offentlige API-et og har ingen oppføring i `exports`.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import StyleDictionary from "style-dictionary";
import { createThemeConfig } from "../../tokens/style-dictionary/config.js";
import "../../tokens/style-dictionary/register.js";
import { type JokulThemeFile, validateThemeFile } from "../file/themeFile.js";
import { themeToTokenFiles } from "../file/tokens.js";

export type BuildThemeOptions = {
    outDir: string;
    selector?: string;
};

async function writeJson(path: string, value: unknown) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${JSON.stringify(value, null, 4)}\n`);
}

/**
 * Skriver temaets token-filer og bygger `_color-scheme.scss`, `_fonts.scss`
 * og `_index.scss` til `outDir`.
 */
export async function buildTheme(
    theme: JokulThemeFile,
    { outDir, selector }: BuildThemeOptions,
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
}

export async function writeThemeFile(
    theme: JokulThemeFile,
    path: string,
): Promise<void> {
    await writeJson(path, theme);
}

/** Leser og validerer en temafil. Kaster en feil med alle valideringsfeilene. */
export async function readThemeFile(path: string): Promise<JokulThemeFile> {
    let value: unknown;
    try {
        value = JSON.parse(await readFile(path, "utf8"));
    } catch (error) {
        throw new Error(
            `Kunne ikke lese ${path}: ${error instanceof Error ? error.message : String(error)}`,
        );
    }

    const result = validateThemeFile(value);
    if (!result.valid) {
        throw new Error(
            `${path} er ikke en gyldig temafil:\n${result.errors.map((error) => `  - ${error}`).join("\n")}`,
        );
    }

    return result.theme;
}
