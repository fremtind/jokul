import { SPACING_STEPS } from "./types";
import type { BasePadding, PaddingShorthand, SpacingStep } from "./types";

function getSpacingIndex(spacingStep?: SpacingStep, fallback: SpacingStep = "l") {
    return SPACING_STEPS.indexOf(spacingStep || fallback);
}

export function getSpacingClasses(padding: BasePadding | PaddingShorthand) {
    if (typeof padding === "string") {
        return `jkl-spacing-${padding}--all`;
    }

    // Sett sidepadding til den største av de to innsendte verdiene (eller "l")
    const sideSpacingIndex = Math.max(getSpacingIndex(padding.left), getSpacingIndex(padding.right));
    const sidePadding = SPACING_STEPS[sideSpacingIndex];

    // Sett topp-/bunnpadding til det største av innsendt verdi og sidepadding
    const topPadding = SPACING_STEPS[Math.max(sideSpacingIndex, getSpacingIndex(padding.top, sidePadding))];
    const bottomPadding = SPACING_STEPS[Math.max(sideSpacingIndex, getSpacingIndex(padding.bottom, sidePadding))];

    return [
        `jkl-spacing-${topPadding}--top`,
        `jkl-spacing-${sidePadding}--right`,
        `jkl-spacing-${bottomPadding}--bottom`,
        `jkl-spacing-${sidePadding}--left`,
    ];
}
