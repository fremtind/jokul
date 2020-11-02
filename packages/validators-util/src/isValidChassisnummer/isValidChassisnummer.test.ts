import { isValidChassisnummer } from "./isValidChassisnummer";

describe("isValidChassisnummer", () => {
    it("should return true for 9-digit numbers", () => {
        expect(isValidChassisnummer("123456789")).toBe(true);
    });

    it("should return false if any letters", () => {
        expect(isValidChassisnummer("123A456")).toBe(false);
    });
});
