import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

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

const DIRECT_REPLACEMENTS = [
    [
        "@fremtind/jokul/styles/core/core.min.css",
        "@fremtind/jokul/styles/base.min.css",
    ],
    [
        "@fremtind/jokul/styles/core/core.css",
        "@fremtind/jokul/styles/base.css",
    ],
    [
        "@fremtind/jokul/styles/core/core.scss",
        "@fremtind/jokul/styles/base.scss",
    ],
    ["@fremtind/jokul/styles/core/core", "@fremtind/jokul/styles/base"],
    [
        "@fremtind/jokul/styles/styles.min.css",
        "@fremtind/jokul/styles/components.min.css",
    ],
    ["@fremtind/jokul/styles/styles.css", "@fremtind/jokul/styles/components.css"],
    [
        "@fremtind/jokul/styles/styles.scss",
        "@fremtind/jokul/styles/components.scss",
    ],
    ["@fremtind/jokul/styles/styles", "@fremtind/jokul/styles/components"],
    [
        "@fremtind/jokul/styles/core/jkl/index",
        "@fremtind/jokul/styles/jkl",
    ],
    ["@fremtind/jokul/styles/core/jkl", "@fremtind/jokul/styles/jkl"],
    [
        "@fremtind/jokul/styles/fonts/webfonts.scss",
        "@fremtind/jokul/styles/theme/fonts",
    ],
    [
        "@fremtind/jokul/styles/fonts/webfonts",
        "@fremtind/jokul/styles/theme/fonts",
    ],
    ["@fremtind/jokul/styles/fonts", "@fremtind/jokul/styles/theme/fonts"],
    ["../../../core/jkl/index", "../../../styles/jkl"],
    ["../../../core/jkl", "../../../styles/jkl"],
    ["../../core/jkl/index", "../../styles/jkl"],
    ["../../core/jkl", "../../styles/jkl"],
    ["../core/jkl/index", "../styles/jkl"],
    ["../core/jkl", "../styles/jkl"],
    ["@fremtind/jokul/tailwind/v4", "@fremtind/jokul/styles/tailwind"],
    ["@fremtind/jokul/styles/core", "@fremtind/jokul/styles/base.scss"],
    ["@fremtind/jokul/styles", "@fremtind/jokul/styles/components.scss"],
    ["@fremtind/jokul/core", "@fremtind/jokul/utilities"],
].sort(([a], [b]) => b.length - a.length);

const BETA_STYLE_MIGRATIONS = [
    {
        component: "DescriptionList",
        betaIdentifiers: ["BETA_DescriptionList", "BETA_DescriptionListItem"],
        replacements: [
            [
                "@fremtind/jokul/styles/components/description-list/_index.scss",
                "@fremtind/jokul/styles/components/beta/description-list/_index.scss",
            ],
            [
                "@fremtind/jokul/styles/components/description-list/description-list.scss",
                "@fremtind/jokul/styles/components/beta/description-list/description-list.scss",
            ],
            [
                "@fremtind/jokul/styles/components/description-list",
                "@fremtind/jokul/styles/components/beta/description-list",
            ],
        ],
    },
    {
        component: "NavLink",
        betaIdentifiers: ["BETA_NavLink"],
        replacements: [
            [
                "@fremtind/jokul/styles/components/nav-link/_index.scss",
                "@fremtind/jokul/styles/components/beta/nav-link/_index.scss",
            ],
            [
                "@fremtind/jokul/styles/components/nav-link/nav-link.scss",
                "@fremtind/jokul/styles/components/beta/nav-link/navlink.scss",
            ],
            [
                "@fremtind/jokul/styles/components/nav-link",
                "@fremtind/jokul/styles/components/beta/nav-link",
            ],
        ],
    },
    {
        component: "Select",
        betaIdentifiers: ["BETA_Select"],
        replacements: [
            [
                "@fremtind/jokul/styles/components/select/_index.scss",
                "@fremtind/jokul/styles/components/beta/select/_index.scss",
            ],
            [
                "@fremtind/jokul/styles/components/select/select.scss",
                "@fremtind/jokul/styles/components/beta/select/select.scss",
            ],
            [
                "@fremtind/jokul/styles/components/select",
                "@fremtind/jokul/styles/components/beta/select",
            ],
        ],
    },
];

function shouldIgnoreFile(filePath) {
    const normalizedPath = filePath.split(path.sep).join("/");

    return IGNORED_FILE_PATTERNS.some((pattern) =>
        normalizedPath.includes(pattern),
    );
}

function shouldIgnoreDirectory(directoryPath) {
    return IGNORED_DIRECTORIES.has(path.basename(directoryPath));
}

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceSpecifier(text, from, to) {
    const pattern = new RegExp(
        `(?<![A-Za-z0-9_./-])${escapeRegExp(from)}(?![A-Za-z0-9_./-])`,
        "g",
    );

    let count = 0;
    const next = text.replace(pattern, () => {
        count += 1;
        return to;
    });

    return { text: next, count };
}

function applyDirectReplacements(text) {
    let next = text;
    let replacements = 0;

    for (const [from, to] of DIRECT_REPLACEMENTS) {
        const result = replaceSpecifier(next, from, to);
        next = result.text;
        replacements += result.count;
    }

    return { text: next, replacements };
}

function applyBetaStyleReplacements(text) {
    let next = text;
    let replacements = 0;
    const warnings = [];

    for (const migration of BETA_STYLE_MIGRATIONS) {
        const mentionsBeta = migration.betaIdentifiers.some((identifier) =>
            next.includes(identifier),
        );

        const hasOldSpecifier = migration.replacements.some(([from]) =>
            new RegExp(
                `(?<![A-Za-z0-9_./-])${escapeRegExp(from)}(?![A-Za-z0-9_./-])`,
            ).test(next),
        );

        if (!hasOldSpecifier) {
            continue;
        }

        if (!mentionsBeta) {
            warnings.push(
                `Manuell vurdering: gammel stilimport for ${migration.component} kan peke på enten stabil eller beta-variant.`,
            );
            continue;
        }

        for (const [from, to] of migration.replacements) {
            const result = replaceSpecifier(next, from, to);
            next = result.text;
            replacements += result.count;
        }
    }

    return { text: next, replacements, warnings };
}

/**
 * Font-family-navnet "Fremtind Material Symbols" (og tilhørende fallback) ble
 * omdøpt til "Jokul Icons" i Jøkul 5. Konsumenter som har skrevet font-family
 * direkte i sin egen CSS/SCSS får ellers en stille brutt referanse.
 *
 * Fallback-navnet erstattes først (lengst først), slik at det ikke blir
 * delvis overskrevet av kortere mønster.
 */
const FONT_FAMILY_REPLACEMENTS = [
    ["Fremtind Material Symbols Fallback", "Jokul Icons Fallback"],
    ["Fremtind Material Symbols", "Jokul Icons"],
];

function applyFontFamilyReplacements(text) {
    let next = text;
    let count = 0;

    for (const [from, to] of FONT_FAMILY_REPLACEMENTS) {
        const pattern = new RegExp(escapeRegExp(from), "g");
        next = next.replace(pattern, () => {
            count += 1;
            return to;
        });
    }

    return { text: next, count };
}

const WEBFONTS_CSS_SPECIFIER =
    "@fremtind/jokul/styles/fonts/webfonts(?:\\.min)?\\.css";

const BASE_OR_COMPONENT_CSS_PATTERN = new RegExp(
    "@fremtind/jokul/styles/(?:base|components)(?:\\.min)?\\.css",
);

const WEBFONTS_CSS_REMOVAL_PATTERNS = [
    // import "@fremtind/jokul/styles/fonts/webfonts.css"; (ESM)
    new RegExp(
        `^[ \\t]*import\\s+["']${WEBFONTS_CSS_SPECIFIER}["']\\s*;?[ \\t]*\\r?\\n?`,
        "gm",
    ),
    // require("@fremtind/jokul/styles/fonts/webfonts.css"); (CJS)
    new RegExp(
        `^[ \\t]*require\\(\\s*["']${WEBFONTS_CSS_SPECIFIER}["']\\s*\\)\\s*;?[ \\t]*\\r?\\n?`,
        "gm",
    ),
    // @import "@fremtind/jokul/styles/fonts/webfonts.css"; (CSS / SCSS)
    new RegExp(
        `^[ \\t]*@import\\s+["']${WEBFONTS_CSS_SPECIFIER}["']\\s*;?[ \\t]*\\r?\\n?`,
        "gm",
    ),
];

/**
 * I Jøkul 5 er `@font-face`-definisjonene flyttet inn i `styles/base.css`, og den
 * frittstående `styles/fonts/webfonts.css` finnes ikke lenger i pakken. For
 * .css-konsumenter betyr det at gamle `webfonts.css`-imports må fjernes – ellers
 * blir bygget brutt fordi filen er borte. SCSS-konsumenter håndteres av
 * `DIRECT_REPLACEMENTS` siden de kan ha behov for å overstyre `$webfonts-dir`.
 */
function removeRedundantWebfontsCssImport(text) {
    let next = text;
    let count = 0;

    for (const pattern of WEBFONTS_CSS_REMOVAL_PATTERNS) {
        next = next.replace(pattern, () => {
            count += 1;
            return "";
        });
    }

    return { text: next, count };
}

/**
 * Patterns som ikke kan auto-erstattes, men som krever manuell migrering ved
 * oppgradering fra Jøkul 4 til 5. Hvert mønster gir én advarsel per fil det
 * matcher i (uavhengig av antall forekomster), med peker til hva man skal
 * gjøre i stedet.
 */
const MANUAL_MIGRATION_WARNINGS = [
    {
        // jkl.$color-granitt, jkl.$color-varde, osv. Alle Sass-fargevariabler
        // ble fjernet i Jøkul 5 til fordel for semantiske CSS-variabler.
        pattern: /\bjkl\.\$color-[a-z][a-z0-9-]*/i,
        message:
            "Fjernede Sass-fargevariabler (jkl.$color-*). I Jøkul 5 er alle gamle fargenavn (granitt, varde, snohvit osv.) fjernet — bruk semantiske CSS-variabler, f.eks. var(--jkl-color-text-default). Se https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/farger.",
    },
    {
        // @include jkl.light-mode-variables { ... } / dark-mode-variables { ... }
        pattern: /@include\s+jkl\.(?:light|dark)-mode-variables\b/,
        message:
            "Fjernede mixins for custom light/dark-farger (jkl.light-mode-variables / jkl.dark-mode-variables). I Jøkul 5 må du bruke semantiske CSS-variabler i stedet for å definere egne dark/light-varianter.",
    },
    {
        // @include jkl.text-style("body") / text-style("small")
        pattern: /\btext-style\(\s*["'](?:body|small)["']\s*\)/,
        message:
            'Fjernede tekststiler ("body", "small") i text-style-mixin. Foretrekk å bruke <Text>-komponenten der det er mulig (`import { Text } from "@fremtind/jokul/components/typography"`). Hvis du må sette stiler direkte, bytt til "paragraph-large/medium/small" eller "text-large/medium/small/micro" — se https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/typografi.',
    },
];

function collectManualMigrationWarnings(text) {
    const warnings = [];

    for (const { pattern, message } of MANUAL_MIGRATION_WARNINGS) {
        if (pattern.test(text)) {
            warnings.push(`Manuell vurdering: ${message}`);
        }
    }

    return warnings;
}

function reorderConfiguredFontImport(text) {
    const fontImportPattern =
        /^@use\s+["']@fremtind\/jokul\/styles\/theme\/fonts["'][\s\S]*?;\s*/m;
    const baseImportPattern =
        /^@use\s+["']@fremtind\/jokul\/styles\/base(?:\.scss)?["'][^;]*;\s*/m;

    const fontMatch = fontImportPattern.exec(text);
    const baseMatch = baseImportPattern.exec(text);

    if (!fontMatch || !baseMatch || fontMatch.index < baseMatch.index) {
        return { text, reordered: false };
    }

    const withoutFontImport =
        text.slice(0, fontMatch.index) +
        text.slice(fontMatch.index + fontMatch[0].length);
    const nextBaseMatch = baseImportPattern.exec(withoutFontImport);

    if (!nextBaseMatch) {
        return { text, reordered: false };
    }

    const nextText =
        withoutFontImport.slice(0, nextBaseMatch.index) +
        fontMatch[0] +
        withoutFontImport.slice(nextBaseMatch.index);

    return { text: nextText, reordered: true };
}

export function transformImportPaths(text, filePath = "") {
    const webfontsRemoval = removeRedundantWebfontsCssImport(text);
    const fontFamily = applyFontFamilyReplacements(webfontsRemoval.text);
    const direct = applyDirectReplacements(fontFamily.text);
    const beta = applyBetaStyleReplacements(direct.text);
    let next = beta.text;
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

    if (
        webfontsRemoval.count > 0 &&
        !BASE_OR_COMPONENT_CSS_PATTERN.test(next)
    ) {
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
            fontFamily.count,
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
        const sortedEntries = [...entries].sort((a, b) =>
            a.name.localeCompare(b.name),
        );

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
    const options = {
        dryRun: false,
        verbose: false,
    };
    const targets = [];

    for (const arg of rawArgs) {
        if (arg === "--dry-run") {
            options.dryRun = true;
            continue;
        }

        if (arg === "--verbose") {
            options.verbose = true;
            continue;
        }

        if (arg === "--help" || arg === "-h") {
            throw new Error(
                "Bruk: jokul codemod [import-paths] [sti ...] [--dry-run] [--verbose]",
            );
        }

        targets.push(arg);
    }

    return {
        options,
        targets: targets.length > 0 ? targets : ["."],
    };
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
        `\n${options.dryRun ? "Dry run ferdig" : "Codemod ferdig"}: ${changedFiles} filer, ${changedSpecifiers} erstattede imports${reorderedFiles > 0 ? `, ${reorderedFiles} justerte font-importrekkefølger` : ""}.`,
    );
}
