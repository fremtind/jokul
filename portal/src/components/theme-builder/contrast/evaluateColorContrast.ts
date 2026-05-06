import { ColorSpace, contrastWCAG21, sRGB } from "colorjs.io/fn";
import type { ContrastRequirementId } from "../tokens";
import { isHexColor } from "../tokens/colorValue";

const WCAG_TEXT_CONTRAST_AAA = 7;
const WCAG_TEXT_CONTRAST_AA = 4.5;
const WCAG_UI_CONTRAST_MINIMUM = 3;

ColorSpace.register(sRGB);

export type ContrastRating = "AAA" | "AA" | "A" | "✕";

export type ContrastStatus = {
    rating: ContrastRating;
    scope: "tekst" | "grafisk";
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

export function evaluateColorContrast(
    foreground: string | undefined,
    background: string | undefined,
    requirementId: ContrastRequirementId,
): ContrastEvaluation {
    if (
        !foreground ||
        !background ||
        !isHexColor(foreground) ||
        !isHexColor(background)
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
