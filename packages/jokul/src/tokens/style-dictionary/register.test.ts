import { kebabCase } from "change-case";
import type { TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import { cssVarReferenceTransform } from "./register.js";

/**
 * Simulerer det SD sitt `name/kebab`-transform gjør, slik at vi kan teste
 * hele pipelinen (name/kebab → value/css-var-reference) uten å kjøre SD-bygget.
 */
function makeToken(path: string[]): Pick<TransformedToken, "name"> {
    return { name: kebabCase([undefined, ...path].join(" ")) };
}

describe("cssVarReferenceTransform", () => {
    describe("spacing", () => {
        it("genererer riktig CSS-variabelreferanse for numeriske tokens", () => {
            expect(cssVarReferenceTransform(makeToken(["spacing", "0"]))).toBe(
                "var(--jkl-spacing-0)",
            );
            expect(cssVarReferenceTransform(makeToken(["spacing", "24"]))).toBe(
                "var(--jkl-spacing-24)",
            );
            expect(
                cssVarReferenceTransform(makeToken(["spacing", "168"])),
            ).toBe("var(--jkl-spacing-168)");
        });

        it("genererer riktig CSS-variabelreferanse for alfanumeriske tokens (2xs, 2xl)", () => {
            expect(
                cssVarReferenceTransform(makeToken(["spacing", "2xs"])),
            ).toBe("var(--jkl-spacing-2xs)");
            expect(
                cssVarReferenceTransform(makeToken(["spacing", "2xl"])),
            ).toBe("var(--jkl-spacing-2xl)");
        });

        it("genererer riktig CSS-variabelreferanse for semantiske tokens", () => {
            expect(
                cssVarReferenceTransform(makeToken(["spacing", "none"])),
            ).toBe("var(--jkl-spacing-none)");
            expect(cssVarReferenceTransform(makeToken(["spacing", "xs"]))).toBe(
                "var(--jkl-spacing-xs)",
            );
            expect(cssVarReferenceTransform(makeToken(["spacing", "m"]))).toBe(
                "var(--jkl-spacing-m)",
            );
            expect(cssVarReferenceTransform(makeToken(["spacing", "xl"]))).toBe(
                "var(--jkl-spacing-xl)",
            );
        });
    });

    describe("farger (color)", () => {
        it("genererer riktig CSS-variabelreferanse for dypt nøstede fargetokens", () => {
            expect(
                cssVarReferenceTransform(
                    makeToken(["color", "neutral", "background", "page"]),
                ),
            ).toBe("var(--jkl-color-neutral-background-page)");
            expect(
                cssVarReferenceTransform(
                    makeToken(["color", "warning", "border", "strong"]),
                ),
            ).toBe("var(--jkl-color-warning-border-strong)");
        });

        it("håndterer camelCase-segmenter i fargetokens via name/kebab", () => {
            expect(
                cssVarReferenceTransform(
                    makeToken(["color", "background", "containerAccent"]),
                ),
            ).toBe("var(--jkl-color-background-container-accent)");
            expect(
                cssVarReferenceTransform(
                    makeToken(["color", "success", "text", "onContrast"]),
                ),
            ).toBe("var(--jkl-color-success-text-on-contrast)");
        });
    });

    describe("typografi (font)", () => {
        it("genererer riktig CSS-variabelreferanse for skriftstørrelse", () => {
            expect(
                cssVarReferenceTransform(makeToken(["font", "size", "1"])),
            ).toBe("var(--jkl-font-size-1)");
            expect(
                cssVarReferenceTransform(makeToken(["font", "size", "10"])),
            ).toBe("var(--jkl-font-size-10)");
        });

        it("genererer riktig CSS-variabelreferanse for tekststiler med bindestrek", () => {
            expect(
                cssVarReferenceTransform(
                    makeToken(["text", "style", "heading-1"]),
                ),
            ).toBe("var(--jkl-text-style-heading-1)");
            expect(
                cssVarReferenceTransform(
                    makeToken(["text", "style", "paragraph-large"]),
                ),
            ).toBe("var(--jkl-text-style-paragraph-large)");
        });
    });

    describe("bevegelse (motion)", () => {
        it("håndterer camelCase-segmenter via name/kebab (ingen egendefinert logikk)", () => {
            expect(
                cssVarReferenceTransform(
                    makeToken(["motion", "easing", "easeInBounceOut"]),
                ),
            ).toBe("var(--jkl-motion-easing-ease-in-bounce-out)");
        });

        it("genererer riktig CSS-variabelreferanse for enkle motion-tokens", () => {
            expect(
                cssVarReferenceTransform(
                    makeToken(["motion", "timing", "productive"]),
                ),
            ).toBe("var(--jkl-motion-timing-productive)");
        });
    });

    describe("enheter (unit)", () => {
        it("genererer riktig CSS-variabelreferanse for numeriske enhets-tokens", () => {
            expect(cssVarReferenceTransform(makeToken(["unit", "10"]))).toBe(
                "var(--jkl-unit-10)",
            );
            expect(cssVarReferenceTransform(makeToken(["unit", "20"]))).toBe(
                "var(--jkl-unit-20)",
            );
        });

        it("genererer riktig CSS-variabelreferanse for desimal-tokens (02, 05)", () => {
            expect(cssVarReferenceTransform(makeToken(["unit", "02"]))).toBe(
                "var(--jkl-unit-02)",
            );
            expect(cssVarReferenceTransform(makeToken(["unit", "05"]))).toBe(
                "var(--jkl-unit-05)",
            );
        });
    });

    describe("kant (border)", () => {
        it("genererer riktig CSS-variabelreferanse for border-tokens", () => {
            expect(
                cssVarReferenceTransform(makeToken(["border", "radius", "xs"])),
            ).toBe("var(--jkl-border-radius-xs)");
            expect(
                cssVarReferenceTransform(makeToken(["border", "width", "1"])),
            ).toBe("var(--jkl-border-width-1)");
        });
    });

    describe("regresjonstest: name/kebab må kjøre før value/css-var-reference", () => {
        it("produserer feil resultat hvis name/camel har kjørt i stedet (dokumenterer bugg i next.8)", () => {
            // Etter name/camel ville token.name være "spacing24" (uten bindestrek)
            const mangledToken = { name: "spacing24" };
            expect(cssVarReferenceTransform(mangledToken)).toBe(
                "var(--jkl-spacing24)",
            );
        });

        it("produserer riktig resultat når name/kebab har kjørt", () => {
            const correctToken = makeToken(["spacing", "24"]);
            expect(cssVarReferenceTransform(correctToken)).toBe(
                "var(--jkl-spacing-24)",
            );
        });
    });
});
