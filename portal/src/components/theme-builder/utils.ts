import { ColorSpace, contrastWCAG21, sRGB } from "colorjs.io/fn";
import type { CSSProperties } from "react";
import {
    COLOR_VARIANTS,
    type ColorSchemeJson,
    type ColorToken,
    type ContrastRequirementId,
    ROLE_ENTRIES,
    THEME_MODES,
    tokenKey,
    tokensFromSchema,
} from "./tokens";

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const WCAG_TEXT_CONTRAST_AAA = 7;
const WCAG_TEXT_CONTRAST_AA = 4.5;
const WCAG_UI_CONTRAST_MINIMUM = 3;

ColorSpace.register(sRGB);

/**
 * Fire-trinns rating som er felles på tvers av token-grupper, så vi kan vise
 * en oppsummering øverst i fanen:
 *
 * - `AAA` — tekst som passerer WCAG 1.4.6 (≥ 7:1)
 * - `AA`  — tekst som passerer WCAG 1.4.3 (≥ 4.5:1, < 7:1)
 * - `A`   — grafisk innhold som passerer WCAG 1.4.11 (≥ 3:1; det laveste
 *   nivået i WCAG, derav "A")
 * - `✕`   — feiler det gjeldende kravet
 */
export type ContrastRating = "AAA" | "AA" | "A" | "✕";

export type ContrastStatus = {
    rating: ContrastRating;
    /** Hvilket kontrastkrav som ble brukt — tekst eller grafisk/ikke-tekst. */
    scope: "tekst" | "grafisk";
    /** Laveste forholdstall det *gjeldende* scopet må møte for å passere. */
    minimum: number;
};

export type ContrastEvaluation =
    | { kind: "invalid" }
    | {
          kind: "measured";
          passes: boolean;
          ratio: number;
          status: ContrastStatus;
      };

export const CONTRAST_REQUIREMENTS: Record<
    ContrastRequirementId,
    { scope: "tekst" | "grafisk"; minimum: number }
> = {
    text: { scope: "tekst", minimum: WCAG_TEXT_CONTRAST_AA },
    ui: { scope: "grafisk", minimum: WCAG_UI_CONTRAST_MINIMUM },
};

/** Sann når verdien matcher `#RRGGBB`. Case-insensitiv ved input — `normalizeHex` uppercaser ved lagring. */
export const isHex = (value: string): boolean => HEX_COLOR_PATTERN.test(value);

/** Stripper mellomrom og gjør om til store bokstaver — stabil form for lagring og sammenligning. */
export const normalizeHex = (value: string): string =>
    value.replace(/\s+/g, "").toUpperCase();

/** Inline feilmelding for heks-input, eller `undefined` om verdien er OK. */
export const hexErrorLabel = (value: string): string | undefined =>
    isHex(value) ? undefined : "Bruk formatet #RRGGBB";

/** Verdi for native `<input type="color">` — faller tilbake til svart ved ugyldig input. */
export const colorInputValue = (value: string): string =>
    isHex(value) ? value : "#000000";

/** WCAG 2.1-kontrastresultat, inkludert utledet status-tag. */
export function evaluateColorContrast(
    foreground: string | undefined,
    background: string | undefined,
    requirementId: ContrastRequirementId,
): ContrastEvaluation {
    if (
        !foreground ||
        !background ||
        !isHex(foreground) ||
        !isHex(background)
    ) {
        return { kind: "invalid" };
    }

    const ratio = contrastWCAG21(foreground, background);
    if (ratio === undefined) return { kind: "invalid" };

    const requirement = CONTRAST_REQUIREMENTS[requirementId];
    return {
        kind: "measured",
        passes: ratio >= requirement.minimum,
        ratio,
        status: getContrastStatus(ratio, requirementId),
    };
}

/**
 * Parser JSON skrevet inn i editoren og validerer den mot token-strukturen.
 * Returnerer norske feilmeldinger som editoren kan vise inline.
 */
export function parseEditorJson(
    value: string,
): { ok: true; tokens: ColorToken[] } | { ok: false; error: string } {
    let parsed: unknown;
    try {
        parsed = JSON.parse(value);
    } catch {
        return {
            ok: false,
            error: "JSON-en kan ikke parses. Kontroller komma og klammer.",
        };
    }

    const missing = findMissingPaths(parsed);
    if (missing.length > 0) {
        const sample = missing.slice(0, 3).join(", ");
        const suffix =
            missing.length > 3 ? ` (+${missing.length - 3} til)` : "";
        return {
            ok: false,
            error: `JSON-en mangler ${missing.length} ${missing.length === 1 ? "token" : "tokens"}: ${sample}${suffix}.`,
        };
    }

    let tokens: ColorToken[];
    try {
        tokens = tokensFromSchema(parsed as ColorSchemeJson);
    } catch {
        return {
            ok: false,
            error: "JSON-en matcher ikke formatet for color tokens.",
        };
    }

    if (tokensHaveErrors(tokens)) {
        return { ok: false, error: "Alle verdier må bruke formatet #RRGGBB." };
    }
    return { ok: true, tokens };
}

/**
 * Lister alle (variant.group.role)-stier i strukturen som mangler i den
 * brukerleverte JSON-en, eller hvis verdiene ikke har `light`/`dark`-felt.
 */
function findMissingPaths(source: unknown): string[] {
    if (typeof source !== "object" || source === null) {
        return ROLE_ENTRIES.map(
            (entry) => `${entry.variant}.${entry.group}.${entry.role}`,
        );
    }
    const root = source as { color?: Record<string, unknown> };
    if (typeof root.color !== "object" || root.color === null) {
        return ROLE_ENTRIES.map(
            (entry) => `${entry.variant}.${entry.group}.${entry.role}`,
        );
    }
    const missing: string[] = [];
    for (const { variant, group, role } of ROLE_ENTRIES) {
        const path = `${variant}.${group}.${role}`;
        const variantNode = (root.color as Record<string, unknown>)[variant];
        if (typeof variantNode !== "object" || variantNode === null) {
            missing.push(path);
            continue;
        }
        const groupNode = (variantNode as Record<string, unknown>)[group];
        if (typeof groupNode !== "object" || groupNode === null) {
            missing.push(path);
            continue;
        }
        const roleNode = (groupNode as Record<string, unknown>)[role];
        if (typeof roleNode !== "object" || roleNode === null) {
            missing.push(path);
            continue;
        }
        const value = (roleNode as { value?: unknown }).value;
        if (typeof value !== "object" || value === null) {
            missing.push(path);
            continue;
        }
        const valueRecord = value as Record<string, unknown>;
        if (THEME_MODES.some((mode) => typeof valueRecord[mode] !== "string")) {
            missing.push(path);
        }
    }
    return missing;
}

/** Sann hvis noe token har en ugyldig heks-verdi i noen theme-modus. */
export const tokensHaveErrors = (tokens: ColorToken[]): boolean =>
    tokens.some((t) => THEME_MODES.some((mode) => !isHex(t[mode])));

/** Strukturlik likhet for to token-lister — brukes for å regne ut "dirty"-status. */
export const tokensEqual = (a: ColorToken[], b: ColorToken[]): boolean =>
    a.length === b.length &&
    a.every((t, i) => {
        const o = b[i];
        return (
            tokenKey(t) === tokenKey(o) &&
            THEME_MODES.every((mode) => t[mode] === o[mode])
        );
    });

/**
 * Bygger inline CSS-variabler for preview-scopet. Hvert token slippes ut som
 * en `--jkl-color-<variant>-<group>-<role>`-variabel; den første varianten i
 * JSON-en aliaseres i tillegg til bart `--jkl-color-<group>-<role>` slik at
 * uscopete Jøkul-komponenter plukker opp de live-verdiene.
 *
 * CSS `light-dark()`-funksjonen tar nøyaktig to argumenter, så vi krever at
 * `THEME_MODES` har akkurat to entries (`light` og `dark`). Skulle JSON-en
 * en gang utvides med en tredje mode, vil `assertTwoModes` kaste — det er et
 * tydelig signal om at preview-mekanismen må tenkes på nytt.
 */
export function buildPreviewStyle(tokens: ColorToken[]): CSSProperties {
    const [lightMode, darkMode] = assertTwoModes();
    const baseVariant = COLOR_VARIANTS[0];
    const style: Record<string, string> = {};
    for (const t of tokens) {
        const value = `light-dark(${t[lightMode]}, ${t[darkMode]})`;
        style[`--jkl-color-${t.variant}-${t.group}-${t.role}`] = value;
        if (t.variant === baseVariant) {
            style[`--jkl-color-${t.group}-${t.role}`] = value;
        }
    }
    return style as CSSProperties;
}

function assertTwoModes(): readonly [string, string] {
    if (THEME_MODES.length !== 2) {
        throw new Error(
            `Theme builder forventer akkurat 2 theme-modes (light + dark) for å støtte CSS light-dark(). Fant ${THEME_MODES.length}: ${THEME_MODES.join(", ")}.`,
        );
    }
    return [THEME_MODES[0], THEME_MODES[1]];
}

/**
 * Mapper et kontrastforhold til en {@link ContrastRating} innenfor det
 * gjeldende scopet.
 *
 * - **Tekst** (tekst-tokens): WCAG 1.4.3 krever ≥ 4.5:1 (`AA`); 1.4.6 krever
 *   ≥ 7:1 (`AAA`).
 * - **Grafisk innhold** (border, ikoner, dekorasjon): WCAG 1.4.11 krever
 *   ≥ 3:1 — vises som `A` for å markere det som det laveste passerende
 *   nivået, slik at oppsummeringen øverst skiller det fra tekst-AA.
 */
function getContrastStatus(
    ratio: number,
    requirementId: ContrastRequirementId,
): ContrastStatus {
    const requirement = CONTRAST_REQUIREMENTS[requirementId];
    if (requirementId === "text") {
        if (ratio >= WCAG_TEXT_CONTRAST_AAA) {
            return {
                rating: "AAA",
                scope: "tekst",
                minimum: WCAG_TEXT_CONTRAST_AAA,
            };
        }
        if (ratio >= WCAG_TEXT_CONTRAST_AA) {
            return {
                rating: "AA",
                scope: "tekst",
                minimum: WCAG_TEXT_CONTRAST_AA,
            };
        }
        return {
            rating: "✕",
            scope: requirement.scope,
            minimum: requirement.minimum,
        };
    }
    if (ratio >= WCAG_UI_CONTRAST_MINIMUM) {
        return {
            rating: "A",
            scope: "grafisk",
            minimum: WCAG_UI_CONTRAST_MINIMUM,
        };
    }
    return {
        rating: "✕",
        scope: requirement.scope,
        minimum: requirement.minimum,
    };
}
