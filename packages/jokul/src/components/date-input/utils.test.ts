import { describe, expect, it } from "vitest";
import {
    toNorwegianDateFormat,
    toValidBoundary,
    toValidInputValue,
} from "./utils.js";

describe("toValidInputValue", () => {
    it("returns padded ISO for a Date object", () => {
        expect(toValidInputValue(new Date(2020, 0, 5))).toBe("2020-01-05");
    });
    it("converts dd.mm.yyyy to padded ISO", () => {
        expect(toValidInputValue("5.6.2020")).toBe("2020-06-05");
    });
    it("pads a non-zero-padded ISO string", () => {
        expect(toValidInputValue("2020-6-5")).toBe("2020-06-05");
    });
    it("leaves a valid ISO string intact", () => {
        expect(toValidInputValue("2020-06-05")).toBe("2020-06-05");
    });
    it("returns empty string for invalid dates/segments", () => {
        expect(toValidInputValue("32.13.2020")).toBe("");
        expect(toValidInputValue("2020-02-30")).toBe("");
        expect(toValidInputValue("2020-xx-05")).toBe("");
        expect(toValidInputValue("05.06.20")).toBe("");
    });
    it("returns empty string for empty/undefined", () => {
        expect(toValidInputValue(undefined)).toBe("");
        expect(toValidInputValue("")).toBe("");
    });
});

describe("toNorwegianDateFormat", () => {
    it("formats an ISO date in Norwegian short form", () => {
        expect(toNorwegianDateFormat("2020-06-05")).toMatch(/05.06.2020/);
    });
});

describe("toValidBoundary", () => {
    it("beholder gyldig ISO-dato", () => {
        expect(toValidBoundary("2026-08-13")).toBe("2026-08-13");
    });
    it("normaliserer norsk datoformat", () => {
        expect(toValidBoundary("13.08.2026")).toBe("2026-08-13");
    });
    it("tolker tall som timestamp", () => {
        expect(toValidBoundary(new Date(2026, 7, 13).getTime())).toBe(
            "2026-08-13",
        );
    });
    it("gir undefined for ugyldige verdier", () => {
        expect(toValidBoundary("ikke en dato")).toBeUndefined();
        expect(toValidBoundary(Number.NaN)).toBeUndefined();
        expect(toValidBoundary("")).toBeUndefined();
        expect(toValidBoundary(undefined)).toBeUndefined();
    });
});
