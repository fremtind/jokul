/** @internal Se `./index.ts`. */
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { type JokulThemeFile, validateThemeFile } from "../file/themeFile.js";

export type LoadedThemeFile =
    | { valid: true; path: string; theme: JokulThemeFile; fontsDir: string }
    | { valid: false; path: string; errors: string[] };

export async function writeJson(path: string, value: unknown): Promise<void> {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${JSON.stringify(value, null, 4)}\n`);
}

export async function writeThemeFile(
    theme: JokulThemeFile,
    path: string,
): Promise<void> {
    await writeJson(path, theme);
}

async function exists(path: string) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

/**
 * Leser og validerer en temafil, inkludert at fontfilene i `fonts.faces`
 * finnes i `fonts/`-mappen ved siden av temafilen.
 */
export async function loadThemeFile(path: string): Promise<LoadedThemeFile> {
    let value: unknown;
    try {
        value = JSON.parse(await readFile(path, "utf8"));
    } catch (error) {
        return {
            valid: false,
            path,
            errors: [
                `Kunne ikke lese filen: ${error instanceof Error ? error.message : String(error)}`,
            ],
        };
    }

    const result = validateThemeFile(value);
    if (!result.valid) {
        return { valid: false, path, errors: result.errors };
    }

    const fontsDir = join(dirname(path), "fonts");
    const errors: string[] = [];
    for (const face of result.theme.fonts?.faces ?? []) {
        if (!(await exists(join(fontsDir, face.fileName)))) {
            errors.push(
                `Fant ikke fontfilen ${join(fontsDir, face.fileName)}.`,
            );
        }
    }

    if (errors.length > 0) {
        return { valid: false, path, errors };
    }

    return { valid: true, path, theme: result.theme, fontsDir };
}

export function formatThemeFileErrors(
    result: Extract<LoadedThemeFile, { valid: false }>,
): string {
    return `${result.path} er ikke en gyldig temafil:\n${result.errors.map((error) => `  - ${error}`).join("\n")}`;
}

/** Leser og validerer en temafil. Kaster en feil med alle valideringsfeilene. */
export async function readThemeFile(path: string): Promise<JokulThemeFile> {
    const result = await loadThemeFile(path);
    if (!result.valid) {
        throw new Error(formatThemeFileErrors(result));
    }

    return result.theme;
}
