import { type ContrastRating, evaluateColorContrast } from "./colorTokenUtils";
import { type ColorToken, THEME_MODES, tokenKey } from "./colorTokens";
import {
    COLOR_ROLES,
    type ColorRole,
    type ContrastRequirementId,
    type RoleEntry,
} from "./colorTokens";

export type RatingCounts = Record<ContrastRating, number>;

const EMPTY_COUNTS: RatingCounts = { AAA: 0, AA: 0, A: 0, "✕": 0 };

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

export function contrastReference(token: ColorToken): {
    against: RoleEntry;
    requirementId: ContrastRequirementId;
} | null {
    const { variant, group, role } = token;

    if (group === "text" && role.startsWith("on-")) {
        return {
            against: {
                variant,
                group: "background",
                role: role.slice("on-".length) as ColorRole,
            },
            requirementId: "text",
        };
    }

    if (group === "background") {
        const onRole = `on-${role}` as ColorRole;
        if (COLOR_ROLES.text?.includes(onRole)) {
            return {
                against: { variant, group: "text", role: onRole },
                requirementId: "text",
            };
        }
        return null;
    }

    if (group === "text" || group === "border") {
        const page = "page" as ColorRole;
        const surface = COLOR_ROLES.background?.includes(page)
            ? page
            : COLOR_ROLES.background?.[0];
        if (!surface) return null;
        return {
            against: { variant, group: "background", role: surface },
            requirementId: group === "text" ? "text" : "ui",
        };
    }

    return null;
}
