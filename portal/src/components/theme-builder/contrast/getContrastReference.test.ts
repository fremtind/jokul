import { describe, expect, it } from "vitest";
import {
    TOKEN_DEFINITIONS,
    TOKEN_ROLES_BY_SECTION,
    TOKEN_SECTIONS,
    tokensFromSchema,
} from "../tokens";
import { contrastReference } from "./getContrastReference";

const tokens = tokensFromSchema();
const tokenAt = (section: string, group: string, role: string) => {
    const found = tokens.find(
        (t) => t.section === section && t.group === group && t.role === role,
    );
    if (!found) throw new Error(`Mangler token ${section}.${group}.${role}`);
    return found;
};

describe("contrastReference — JSON-koblede paringsregler", () => {
    it("parer `text.onContrast` mot `background.contrast` i samme seksjon", () => {
        for (const section of TOKEN_SECTIONS) {
            if (!TOKEN_ROLES_BY_SECTION[section]?.text?.includes("onContrast"))
                continue;

            const ref = contrastReference(
                tokenAt(section, "text", "onContrast"),
            );
            const path =
                section === "root"
                    ? ["background", "contrast"]
                    : [section, "background", "contrast"];

            expect(ref).toEqual({
                against: {
                    path,
                    id: path.join("."),
                    section,
                    group: "background",
                    role: "contrast",
                },
                requirementId: "text",
            });
        }
    });

    it("parer `background.contrast` mot `text.onContrast` i samme seksjon", () => {
        for (const section of TOKEN_SECTIONS) {
            if (
                !TOKEN_ROLES_BY_SECTION[section]?.background?.includes(
                    "contrast",
                )
            ) {
                continue;
            }

            const ref = contrastReference(
                tokenAt(section, "background", "contrast"),
            );
            const path =
                section === "root"
                    ? ["text", "onContrast"]
                    : [section, "text", "onContrast"];

            expect(ref).toEqual({
                against: {
                    path,
                    id: path.join("."),
                    section,
                    group: "text",
                    role: "onContrast",
                },
                requirementId: "text",
            });
        }
    });

    it("øvrige `text.*` måles mot `background.page` med tekstkrav", () => {
        for (const section of TOKEN_SECTIONS) {
            const textRoles = TOKEN_ROLES_BY_SECTION[section]?.text ?? [];
            for (const role of textRoles.filter((r) => r !== "onContrast")) {
                const ref = contrastReference(tokenAt(section, "text", role));
                const path =
                    section === "root"
                        ? ["background", "page"]
                        : [section, "background", "page"];

                expect(ref).toEqual({
                    against: {
                        path,
                        id: path.join("."),
                        section,
                        group: "background",
                        role: "page",
                    },
                    requirementId: "text",
                });
            }
        }
    });

    it("`border.*` måles mot `background.page` med UI-krav", () => {
        for (const section of TOKEN_SECTIONS) {
            for (const role of TOKEN_ROLES_BY_SECTION[section]?.border ?? []) {
                const ref = contrastReference(tokenAt(section, "border", role));
                expect(ref?.against.section).toBe(section);
                expect(ref?.against.group).toBe("background");
                expect(ref?.against.role).toBe("page");
                expect(ref?.requirementId).toBe("ui");
            }
        }
    });

    it("bakgrunnsflater uten eksplisitt forgrunnspar returnerer null", () => {
        for (const section of TOKEN_SECTIONS) {
            expect(
                contrastReference(tokenAt(section, "background", "page")),
            ).toBeNull();
        }
    });

    it("alle TOKEN_DEFINITIONS gir enten en gyldig referanse eller eksplisitt null — ingen kaster", () => {
        for (const entry of TOKEN_DEFINITIONS) {
            const token = tokenAt(entry.section, entry.group, entry.role);
            expect(() => contrastReference(token)).not.toThrow();
        }
    });
});
