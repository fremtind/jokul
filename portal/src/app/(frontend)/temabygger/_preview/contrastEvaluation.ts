import { ColorSpace, contrastWCAG21, sRGB } from "colorjs.io/fn";
import { COLOR_SCHEMES } from "../_components/ThemeBuilder";
import type { ColorToken, ColorTokens } from "../_context/ThemeDraftContext";
import { isHex } from "../_lib/hexColor";
import type { ColorScheme } from "../generator/types";

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
export type ContrastRequirementId = "text" | "ui";

type ContrastStatus = {
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

const CONTRAST_REQUIREMENTS: Record<
    ContrastRequirementId,
    { scope: "tekst" | "grafisk"; minimum: number }
> = {
    text: { scope: "tekst", minimum: WCAG_TEXT_CONTRAST_AA },
    ui: { scope: "grafisk", minimum: WCAG_UI_CONTRAST_MINIMUM },
};

export type RatingCounts = Record<ContrastRating, number>;

type ContrastReference = {
    againstGroup: string;
    againstRole: string;
    requirementId: ContrastRequirementId;
};

const EMPTY_COUNTS: RatingCounts = { AAA: 0, AA: 0, A: 0, "✕": 0 };

export function countRatings(
    tokens: ColorTokens,
    colorSchemes: readonly ColorScheme[] = COLOR_SCHEMES,
): RatingCounts {
    const counts: RatingCounts = { ...EMPTY_COUNTS };

    for (const [group, roles] of Object.entries(tokens) as Array<
        [string, Record<string, ColorToken>]
    >) {
        for (const [role, token] of Object.entries(roles)) {
            const reference = contrastReference(group, role);
            if (!reference) continue;

            const referenceToken =
                tokens[reference.againstGroup]?.[reference.againstRole];
            if (!referenceToken) continue;

            for (const scheme of colorSchemes) {
                const evaluation = evaluateColorContrast(
                    token[scheme],
                    referenceToken[scheme],
                    reference.requirementId,
                );
                if (evaluation.kind !== "measured") continue;
                counts[evaluation.status.rating] += 1;
            }
        }
    }

    return counts;
}

export function contrastReference(
    group: string,
    role: string,
): ContrastReference | null {
    if (group === "text" && role.startsWith("on-")) {
        return {
            againstGroup: "background",
            againstRole: role.slice("on-".length),
            requirementId: "text",
        };
    }

    if (group === "background") {
        return {
            againstGroup: "text",
            againstRole: `on-${role}`,
            requirementId: "text",
        };
    }

    if (group === "text" || group === "border") {
        return {
            againstGroup: "background",
            againstRole: "page",
            requirementId: group === "text" ? "text" : "ui",
        };
    }

    return null;
}

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
