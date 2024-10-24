import { describe, expect, it } from "vitest";
import { unicode } from "../../constants/index.js";
import { formatAvstand } from "./formatAvstand.js";

const { nbsp } = unicode;

describe("formatAvstand", () => {
    it("uses kilometers as default unit", () => {
        expect(formatAvstand(12345)).toEqual(`12${nbsp}345 km`);
    });

    it("uses specified unit", () => {
        expect(formatAvstand(12345, { unit: "foot" })).toEqual(`12${nbsp}345 fot`);
    });

    it("handles suffix", () => {
        expect(formatAvstand(12345, { suffix: "/år" })).toEqual(`12${nbsp}345 km/år`);
    });

    it("handles other locales", () => {
        expect(formatAvstand(12345, { unit: "foot", locale: "en-US" })).toEqual(`12,345 ft`);
    });
});
