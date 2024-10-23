import { CSSProperties } from "react";
import { NEW_SPACING_STEPS, SPACING_STEPS, isOldSpacingStep } from "./types.js";
import type { BasePadding, PaddingShorthand, SpacingStep } from "./types.js";

function getSpacingIndex(spacingStep?: SpacingStep, fallback: SpacingStep = "24"): number {
    const value = spacingStep || fallback;
    if (isOldSpacingStep(value)) {
        return SPACING_STEPS.indexOf(value);
    } else {
        return NEW_SPACING_STEPS.indexOf(value);
    }
}

export function getPaddingStyles(padding: BasePadding | PaddingShorthand): CSSProperties {
    if (typeof padding === "string") {
        return { padding: `var(--jkl-spacing-${NEW_SPACING_STEPS[getSpacingIndex(padding)]})` };
    }

    // Sett sidepadding til den største av de to innsendte verdiene (eller "24")
    const sideSpacingIndex = Math.max(getSpacingIndex(padding.left), getSpacingIndex(padding.right));
    const sidePadding = NEW_SPACING_STEPS[sideSpacingIndex];

    // Sett topp-/bunnpadding til det største av innsendt verdi og sidepadding
    const topPadding = NEW_SPACING_STEPS[Math.max(sideSpacingIndex, getSpacingIndex(padding.top, sidePadding))];
    const bottomPadding = NEW_SPACING_STEPS[Math.max(sideSpacingIndex, getSpacingIndex(padding.bottom, sidePadding))];

    const top = `var(--jkl-spacing-${topPadding})`;
    const right = `var(--jkl-spacing-${sidePadding})`;
    const bottom = `var(--jkl-spacing-${bottomPadding})`;
    const left = `var(--jkl-spacing-${sidePadding})`;

    return { padding: `${top} ${right} ${bottom} ${left}` };
}
