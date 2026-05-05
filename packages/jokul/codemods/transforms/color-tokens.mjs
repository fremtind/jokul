import { replaceSpecifier, replaceTailwindClass } from "../utils.mjs";

// Sortert lengst-først: spesifikke tokens (f.eks. -alert-info) må ikke bli
// delvis matchet av kortere prefiks.
const CSS_TOKEN_RENAMES = [
    ["--jkl-color-background-alert-warning", "--jkl-color-warning-background-container"],
    ["--jkl-color-background-alert-success", "--jkl-color-success-background-container"],
    ["--jkl-color-background-alert-error", "--jkl-color-error-background-container"],
    ["--jkl-color-background-alert-info", "--jkl-color-info-background-container"],
    ["--jkl-color-background-container-high", "--jkl-color-background-container"],
    ["--jkl-color-background-container-low", "--jkl-color-background-container"],
    ["--jkl-color-background-container-inverted", "--jkl-color-background-contrast"],
    ["--jkl-color-background-action", "--jkl-color-background-contrast"],
    ["--jkl-color-text-on-action", "--jkl-color-text-on-contrast"],
    ["--jkl-color-text-inverted", "--jkl-color-text-on-contrast"],
].sort(([a], [b]) => b.length - a.length);

// Tilsvarende omdøyping for Tailwind --color-{nøkkel}-variablar.
const TAILWIND_COLOR_RENAMES = [
    ["background-alert-warning", "warning-background-container"],
    ["background-alert-success", "success-background-container"],
    ["background-alert-error", "error-background-container"],
    ["background-alert-info", "info-background-container"],
    ["background-container-high", "background-container"],
    ["background-container-low", "background-container"],
    ["background-container-inverted", "background-contrast"],
    ["background-action", "background-contrast"],
    ["text-on-action", "text-on-contrast"],
    ["text-inverted", "text-on-contrast"],
].sort(([a], [b]) => b.length - a.length);

const TAILWIND_COLOR_PREFIXES = [
    "bg",
    "text",
    "border",
    "ring",
    "shadow",
    "fill",
    "stroke",
    "accent",
    "caret",
    "outline",
    "placeholder",
    "divide",
    "from",
    "via",
    "to",
    "decoration",
];

export function applyCssTokenRenames(text) {
    let next = text;
    let count = 0;

    for (const [from, to] of CSS_TOKEN_RENAMES) {
        const result = replaceSpecifier(next, from, to);
        next = result.text;
        count += result.count;
    }

    return { text: next, count };
}

export function applyTailwindColorRenames(text) {
    let next = text;
    let count = 0;

    for (const [fromKey, toKey] of TAILWIND_COLOR_RENAMES) {
        for (const prefix of TAILWIND_COLOR_PREFIXES) {
            const result = replaceTailwindClass(next, `${prefix}-${fromKey}`, `${prefix}-${toKey}`);
            next = result.text;
            count += result.count;
        }
    }

    return { text: next, count };
}
