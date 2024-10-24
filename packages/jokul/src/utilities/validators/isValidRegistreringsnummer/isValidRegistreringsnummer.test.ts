import { describe, expect, it } from "vitest";
import { isValidRegistreringsnummer } from "./isValidRegistreringsnummer.js";

describe("isValidRegistreringsnummer", () => {
    it("should return true for two letters and 5-digit numbers", () => {
        expect(isValidRegistreringsnummer("AB12345")).toBe(true);
    });

    it("should return false if only one letter and more than 5-digit numbers", () => {
        expect(isValidRegistreringsnummer("A1234567")).toBe(false);
    });

    it("should return false for two letters and 4-digit numbers", () => {
        expect(isValidRegistreringsnummer("AB1234")).toBe(false);
    });

    it("should return true if product=bil and value two letters and 5-digit numbers", () => {
        expect(isValidRegistreringsnummer("AB12345", { vehicle: "bil" })).toBe(true);
    });

    it("should return false if product=mc and use bil regnr", () => {
        expect(isValidRegistreringsnummer("AD12345", { vehicle: "mc" })).toBe(false);
    });

    it("should return true if product=mc + two letters and 4-digit numbers ", () => {
        expect(isValidRegistreringsnummer("AD1235", { vehicle: "mc" })).toBe(true);
    });

    it("should return false if product=moped and use bil regnr", () => {
        expect(isValidRegistreringsnummer("AD12345", { vehicle: "moped" })).toBe(false);
    });

    it("should return true if product=mc + two letters and 4-digit numbers ", () => {
        expect(isValidRegistreringsnummer("AD1235", { vehicle: "moped" })).toBe(true);
    });
});
