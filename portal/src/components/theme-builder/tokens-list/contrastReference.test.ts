import { describe, expect, it } from "vitest";
import {
    COLOR_ROLES,
    COLOR_VARIANTS,
    type ColorRole,
    ROLE_ENTRIES,
    tokensFromSchema,
} from "../tokens";
import { contrastReference } from "./contrastReference";

const tokens = tokensFromSchema();
const tokenAt = (variant: string, group: string, role: string) => {
    const found = tokens.find(
        (t) => t.variant === variant && t.group === group && t.role === role,
    );
    if (!found) throw new Error(`Mangler token ${variant}.${group}.${role}`);
    return found;
};

describe("contrastReference — JSON-koblede paringsregler", () => {
    it("paringer `text.on-X` mot `background.X` for hver paret rolle i JSON-en", () => {
        const onRoles = (COLOR_ROLES.text ?? []).filter((r) =>
            r.startsWith("on-"),
        );
        for (const onRole of onRoles) {
            const backingRole = onRole.slice("on-".length) as ColorRole;
            for (const variant of COLOR_VARIANTS) {
                const ref = contrastReference(tokenAt(variant, "text", onRole));
                expect(ref).not.toBeNull();
                expect(ref).toEqual({
                    against: {
                        variant,
                        group: "background",
                        role: backingRole,
                    },
                    requirementId: "text",
                });
            }
        }
    });

    it("paringer `background.X` mot `text.on-X` (omvendt) — kun når paret eksisterer", () => {
        for (const role of COLOR_ROLES.background ?? []) {
            const onRole = `on-${role}` as ColorRole;
            const hasPair = COLOR_ROLES.text?.includes(onRole);
            for (const variant of COLOR_VARIANTS) {
                const ref = contrastReference(
                    tokenAt(variant, "background", role),
                );
                if (hasPair) {
                    expect(ref).toEqual({
                        against: { variant, group: "text", role: onRole },
                        requirementId: "text",
                    });
                } else {
                    expect(ref).toBeNull();
                }
            }
        }
    });

    it("øvrige `text.*` (ikke on-*) måles mot `background.page` med `text`-krav", () => {
        const otherTexts = (COLOR_ROLES.text ?? []).filter(
            (r) => !r.startsWith("on-"),
        );
        for (const role of otherTexts) {
            for (const variant of COLOR_VARIANTS) {
                const ref = contrastReference(tokenAt(variant, "text", role));
                expect(ref?.against).toEqual({
                    variant,
                    group: "background",
                    role: COLOR_ROLES.background?.includes("page" as ColorRole)
                        ? "page"
                        : COLOR_ROLES.background?.[0],
                });
                expect(ref?.requirementId).toBe("text");
            }
        }
    });

    it("`border.*` måles mot `background.page` med `ui`-krav", () => {
        for (const role of COLOR_ROLES.border ?? []) {
            for (const variant of COLOR_VARIANTS) {
                const ref = contrastReference(tokenAt(variant, "border", role));
                expect(ref?.against.group).toBe("background");
                expect(ref?.requirementId).toBe("ui");
            }
        }
    });

    it("alle ROLE_ENTRIES gir enten en gyldig referanse eller eksplisitt null — ingen kaster", () => {
        for (const entry of ROLE_ENTRIES) {
            const token = tokenAt(entry.variant, entry.group, entry.role);
            expect(() => contrastReference(token)).not.toThrow();
        }
    });
});
