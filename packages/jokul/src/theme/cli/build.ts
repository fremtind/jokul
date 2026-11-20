import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import StyleDictionary from "style-dictionary";
import { createBrandConfig } from "../../tokens/style-dictionary/config.js";
import { convertThemeFileToTokens } from "../conversion/convertThemeFileToTokens.js";
import { validateThemeFile } from "../validation/validateThemeFile.js";

import "../../tokens/style-dictionary/register.js";

export async function runBuild(args: string[]): Promise<number> {
    const { values, positionals } = parseArgs({
        args,
        allowPositionals: true,
        options: { out: { type: "string" } },
    });

    if (positionals.length !== 1) {
        throw new Error("Oppgi nøyaktig én temafil.");
    }

    const [themeFilePath] = positionals;
    const input: unknown = JSON.parse(await readFile(themeFilePath, "utf8"));
    const result = validateThemeFile(input);

    if (!result.valid) {
        throw new Error(result.errors.join("\n"));
    }

    const { theme } = result;
    const outputRoot = values.out ?? "src";
    const stylesDir = resolve(
        outputRoot,
        "styles",
        "theme",
        "brands",
        theme.name,
    );
    const tokensDir = resolve(outputRoot, "tokens", "brands");

    const tokens = convertThemeFileToTokens(theme);
    const sources: string[] = [];

    await mkdir(tokensDir, { recursive: true });
    await mkdir(stylesDir, { recursive: true });

    for (const [kind, document] of Object.entries(tokens)) {
        const filePath = join(tokensDir, `${kind}.${theme.name}.tokens.json`);
        const content = `${JSON.stringify(document, null, 4)}\n`;

        await writeFile(filePath, content, "utf8");
        sources.push(filePath);
    }

    const dictionary = new StyleDictionary(
        createBrandConfig({
            brand: theme.name,
            source: sources,
            outputDir: stylesDir,
        }),
    );

    await dictionary.buildPlatform("css");

    console.log(`Skrev tokenfiler til ${tokensDir} og Sass til ${stylesDir}`);
    return 0;
}
