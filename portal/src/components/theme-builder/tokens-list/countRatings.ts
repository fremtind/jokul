import { type ColorToken, THEME_MODES, tokenKey } from "../tokens";
import { type ContrastRating, evaluateColorContrast } from "../utils";
import { contrastReference } from "./contrastReference";

export type RatingCounts = Record<ContrastRating, number>;

const EMPTY_COUNTS: RatingCounts = { AAA: 0, AA: 0, A: 0, "✕": 0 };

/**
 * Itererer alle tokens og theme-moduser, evaluerer kontrast mot den naturlige
 * paringen (se {@link contrastReference}), og teller hvor mange som havner i
 * hver rating-kategori.
 */
export function countRatings(tokens: ColorToken[]): RatingCounts {
    const tokensByKey = new Map(tokens.map((t) => [tokenKey(t), t]));
    const counts: RatingCounts = { ...EMPTY_COUNTS };

    for (const token of tokens) {
        const reference = contrastReference(token);
        if (!reference) continue;
        const referenceToken = tokensByKey.get(tokenKey(reference.against));
        if (!referenceToken) continue;

        for (const mode of THEME_MODES) {
            const evaluation = evaluateColorContrast(
                token[mode],
                referenceToken[mode],
                reference.requirementId,
            );
            if (evaluation.kind !== "measured") continue;
            counts[evaluation.status.rating] += 1;
        }
    }

    return counts;
}
