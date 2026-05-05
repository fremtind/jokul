import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import {
    applyDirectReplacements,
    applyBetaStyleReplacements,
    removeRedundantWebfontsCssImport,
    reorderConfiguredFontImport,
    BASE_OR_COMPONENT_CSS_PATTERN,
} from "./transforms/import-specifiers.mjs";
import { applyCssTokenRenames, applyTailwindColorRenames } from "./transforms/color-tokens.mjs";
import { applyFontFamilyReplacements } from "./transforms/font-family.mjs";
import { collectManualMigrationWarnings } from "./transforms/warnings.mjs";

const TEXT_EXTENSIONS = new Set([
    ".cjs",
    ".css",
    ".cts",
    ".js",
    ".jsx",
    ".md",
    ".mdx",
    ".mjs",
    ".mts",
    ".sass",
    ".scss",
    ".ts",
    ".tsx",
]);

const IGNORED_DIRECTORIES = new Set([
    ".changeset",
    ".git",
    ".github",
    ".next",
    ".turbo",
    "build",
    "coverage",
    "dist",
    "node_modules",
    "storybook-static",
]);

const IGNORED_FILE_PATTERNS = [
    "/packages/jokul/CHANGELOG.md",
    "/packages/jokul/MIGRATION.md",
    "/packages/jokul/build-styles.mjs",
    "/packages/jokul/bin/",
    "/packages/jokul/codemods/",
];

function shouldIgnoreFile(filePath) {
    const normalizedPath = filePath.split(path.sep).join("/");
    return IGNORED_FILE_PATTERNS.some((pattern) => normalizedPath.includes(pattern));
}

function shouldIgnoreDirectory(directoryPath) {
    return IGNORED_DIRECTORIES.has(path.basename(directoryPath));
}

export function transformImportPaths(text, filePath = "") {
    const webfontsRemoval = removeRedundantWebfontsCssImport(text);
    const fontFamily = applyFontFamilyReplacements(webfontsRemoval.text);
    const direct = applyDirectReplacements(fontFamily.text);
    const beta = applyBetaStyleReplacements(direct.text);
    const cssTokens = applyCssTokenRenames(beta.text);
    const tailwindColors = applyTailwindColorRenames(cssTokens.text);
    let next = tailwindColors.text;
    let reordered = false;

    if (/\.(sass|scss)$/i.test(filePath)) {
        const reorderedResult = reorderConfiguredFontImport(next);
        next = reorderedResult.text;
        reordered = reorderedResult.reordered;
    }

    const warnings = [
        ...beta.warnings,
        ...collectManualMigrationWarnings(text),
    ];

    if (webfontsRemoval.count > 0 && !BASE_OR_COMPONENT_CSS_PATTERN.test(next)) {
        warnings.push(
            "Manuell vurdering: fjernet import av `styles/fonts/webfonts.css`. `@font-face`-definisjonene ligger nå i `@fremtind/jokul/styles/base.css`, så den må importeres for at fontene skal lastes.",
        );
    }

    return {
        text: next,
        changed: next !== text,
        replacements:
            direct.replacements +
            beta.replacements +
            webfontsRemoval.count +
            fontFamily.count +
            cssTokens.count +
            tailwindColors.count,
        warnings,
        reordered,
    };
}

async function collectFiles(targetPath, collected) {
    const stats = await stat(targetPath);

    if (stats.isDirectory()) {
        if (shouldIgnoreDirectory(targetPath)) {
            return collected;
        }

        const entries = await readdir(targetPath, { withFileTypes: true });
        const sortedEntries = [...entries].sort((a, b) => a.name.localeCompare(b.name));

        for (const entry of sortedEntries) {
            if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) {
                continue;
            }
            await collectFiles(path.join(targetPath, entry.name), collected);
        }

        return collected;
    }

    if (TEXT_EXTENSIONS.has(path.extname(targetPath)) && !shouldIgnoreFile(targetPath)) {
        collected.push(targetPath);
    }

    return collected;
}

function parseArguments(rawArgs) {
    const options = { dryRun: false, verbose: false };
    const targets = [];

    for (const arg of rawArgs) {
        if (arg === "--dry-run") { options.dryRun = true; continue; }
        if (arg === "--verbose") { options.verbose = true; continue; }
        if (arg === "--help" || arg === "-h") {
            throw new Error(
                "Bruk: jokul codemod [import-paths] [sti ...] [--dry-run] [--verbose]",
            );
        }
        targets.push(arg);
    }

    return { options, targets: targets.length > 0 ? targets : ["."] };
}

export async function runImportPathsCodemod(rawArgs = []) {
    const { options, targets } = parseArguments(rawArgs);
    const files = [];

    for (const target of targets) {
        await collectFiles(path.resolve(target), files);
    }

    const uniqueFiles = [...new Set(files)].sort((a, b) => a.localeCompare(b));
    let changedFiles = 0;
    let changedSpecifiers = 0;
    let reorderedFiles = 0;
    const warnings = [];

    for (const filePath of uniqueFiles) {
        const source = await readFile(filePath, "utf-8");
        const result = transformImportPaths(source, filePath);

        for (const warning of result.warnings) {
            warnings.push(`${filePath}: ${warning}`);
        }

        if (!result.changed) {
            continue;
        }

        changedFiles += 1;
        changedSpecifiers += result.replacements;
        reorderedFiles += result.reordered ? 1 : 0;

        if (!options.dryRun) {
            await writeFile(filePath, result.text, "utf-8");
        }

        if (options.verbose || options.dryRun) {
            console.log(`${options.dryRun ? "Ville endret" : "Endret"} ${filePath}`);
        }
    }

    if (warnings.length > 0) {
        console.warn("\nFiler som trenger manuell oppfølging:");
        for (const warning of warnings) {
            console.warn(`- ${warning}`);
        }
    }

    console.log(
        `\n${options.dryRun ? "Dry run ferdig" : "Codemod ferdig"}: ${changedFiles} filer, ${changedSpecifiers} erstatninger${reorderedFiles > 0 ? `, ${reorderedFiles} justerte font-importrekkefølger` : ""}.`,
    );
}
