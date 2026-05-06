import { type ColorToken, THEME_MODES, getTokenId } from "../tokens";
import {
    type ContrastRating,
    evaluateColorContrast,
} from "./evaluateColorContrast";
import { contrastReference } from "./getContrastReference";

export type RatingCounts = Record<ContrastRating, number>;

const EMPTY_COUNTS: RatingCounts = { AAA: 0, AA: 0, A: 0, "✕": 0 };

export function countRatings(tokens: ColorToken[]): RatingCounts {
    const tokensById = new Map(
        tokens.map((token) => [getTokenId(token), token]),
    );
    const counts: RatingCounts = { ...EMPTY_COUNTS };

    for (const token of tokens) {
        const reference = contrastReference(token);
        if (!reference) continue;
        const referenceToken = tokensById.get(getTokenId(reference.against));
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
