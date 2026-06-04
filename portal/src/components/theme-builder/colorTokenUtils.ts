import { ColorSpace, contrastWCAG21, sRGB } from "colorjs.io/fn";
import type { CSSProperties } from "react";
import {
    COLOR_VARIANTS,
    type ColorToken,
    type ContrastRequirementId,
    THEME_MODES,
    tokenKey,
} from "./colorTokens";

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
        style[`--jkl-color-${tokenKey(t).replaceAll(".", "-")}`] = value;
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
