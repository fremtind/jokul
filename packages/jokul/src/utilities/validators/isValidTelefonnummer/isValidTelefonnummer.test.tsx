import { isValidTelefonnummer } from "./isValidTelefonnummer.js";

describe("isValidTelefonnummer", () => {
    it("should return true for 8-digit numbers", () => {
        expect(isValidTelefonnummer("12345678")).toBe(true);
    });

    it("should return false for any letters and space", () => {
        expect(isValidTelefonnummer("1a2 34 56789")).toBe(false);
    });
});
