import { escapeRegExp, replaceSpecifier } from "../utils.mjs";

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

const WEBFONTS_CSS_SPECIFIER =
    "@fremtind/jokul/styles/fonts/webfonts(?:\\.min)?\\.css";

export const BASE_OR_COMPONENT_CSS_PATTERN = new RegExp(
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

export function applyDirectReplacements(text) {
    let next = text;
    let replacements = 0;

    for (const [from, to] of DIRECT_REPLACEMENTS) {
        const result = replaceSpecifier(next, from, to);
        next = result.text;
        replacements += result.count;
    }

    return { text: next, replacements };
}

export function applyBetaStyleReplacements(text) {
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

// I Jøkul 5 er @font-face-definisjonene flyttet inn i styles/base.css. Standalone
// CSS-importer av webfonts.css fjernes; SCSS-konsumenter håndteres av
// DIRECT_REPLACEMENTS siden de kan overstyre $webfonts-dir.
export function removeRedundantWebfontsCssImport(text) {
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

export function reorderConfiguredFontImport(text) {
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
