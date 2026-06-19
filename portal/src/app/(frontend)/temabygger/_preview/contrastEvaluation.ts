import chroma from "chroma-js";
import type { ThemeDraftColorTokenValue } from "../_context/types";
import { isHex } from "../_shared/utils";
import type {
    ColorRole,
    ColorScheme,
    EditableLightDarkPalette,
    Palette,
} from "../generator/types";

export const WCAG_TEXT_CONTRAST_AAA = 7;
export const WCAG_TEXT_CONTRAST_AA = 4.5;
export const WCAG_UI_CONTRAST_MINIMUM = 3;

export type ContrastRequirements = Partial<{
    [Background in keyof Palette["background"]]: Partial<{
        [K in ColorRole]: number;
    }>;
}>;

export const CONTRAST_REQUIREMENTS = {
    page: {
        "text.default": WCAG_TEXT_CONTRAST_AAA,
        "text.accent": WCAG_TEXT_CONTRAST_AAA,
        "text.subdued": WCAG_TEXT_CONTRAST_AA,
        "border.default": WCAG_UI_CONTRAST_MINIMUM,
        "border.strong": WCAG_UI_CONTRAST_MINIMUM,
        // "border.subdued": WCAG_UI_CONTRAST_MINIMUM,
        "background.contrast": WCAG_UI_CONTRAST_MINIMUM,
    },
    container: {
        "text.default": WCAG_TEXT_CONTRAST_AAA,
        "text.accent": WCAG_TEXT_CONTRAST_AAA,
        "text.subdued": WCAG_TEXT_CONTRAST_AA,
        "border.default": WCAG_UI_CONTRAST_MINIMUM,
        "border.strong": WCAG_UI_CONTRAST_MINIMUM,
        // "border.subdued": WCAG_UI_CONTRAST_MINIMUM,
        "background.contrast": WCAG_UI_CONTRAST_MINIMUM,
    },
    "container-accent": {
        "text.default": WCAG_TEXT_CONTRAST_AA,
        "text.accent": WCAG_TEXT_CONTRAST_AA,
        "text.subdued": WCAG_TEXT_CONTRAST_AA,
        "border.default": WCAG_UI_CONTRAST_MINIMUM,
        "border.strong": WCAG_UI_CONTRAST_MINIMUM,
        // "border.subdued": WCAG_UI_CONTRAST_MINIMUM,
        "background.contrast": WCAG_UI_CONTRAST_MINIMUM,
    },
    contrast: {
        "text.on-contrast": WCAG_TEXT_CONTRAST_AA,
    },
} as const satisfies ContrastRequirements;

export type FailingContrastCombination = {
    backgroundRole: ColorRole;
    foregroundRole: ColorRole;
    colorScheme: ColorScheme;
    actualContrast: number;
    expectedContrast: number;
};

/**
 * Returnerer alle kombinasjoner fra `CONTRAST_REQUIREMENTS` der faktisk
 * kontrast er lavere enn kravet, for de oppgitte fargemodusene.
 */
export function getFailingContrasts(
    tokens: EditableLightDarkPalette,
    colorSchemes: readonly ColorScheme[],
): FailingContrastCombination[] {
    const tokenLookup = tokens as Record<
        string,
        Record<string, ThemeDraftColorTokenValue>
    >;
    const failingCombinations: FailingContrastCombination[] = [];

    for (const [backgroundRole, foregrounds] of Object.entries(
        CONTRAST_REQUIREMENTS,
    )) {
        const backgroundToken = tokenLookup.background?.[backgroundRole];
        if (!backgroundToken) continue;

        for (const [foregroundKey, expectedContrast] of Object.entries(
            foregrounds as Record<string, number>,
        )) {
            const [foregroundGroup, foregroundRole] = foregroundKey.split(".");
            const foregroundToken =
                tokenLookup[foregroundGroup]?.[foregroundRole];
            if (!foregroundToken) continue;

            for (const scheme of colorSchemes) {
                const bg = backgroundToken[scheme];
                const fg = foregroundToken[scheme];
                if (!isHex(bg) || !isHex(fg)) continue;

                const contrast = chroma.contrast(bg, fg);

                if (contrast < expectedContrast) {
                    failingCombinations.push({
                        backgroundRole:
                            `background.${backgroundRole}` as ColorRole,
                        foregroundRole: foregroundKey as ColorRole,
                        actualContrast: +contrast.toFixed(2),
                        expectedContrast,
                        colorScheme: scheme,
                    });
                }
            }
        }
    }

    return failingCombinations;
}
