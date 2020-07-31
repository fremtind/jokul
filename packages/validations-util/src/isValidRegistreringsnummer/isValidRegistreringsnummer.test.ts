import { isValidRegistreringsnummer } from "./isValidRegistreringsnummer";

describe("isValidRegistreringsnummer", () => {
    it("should return true for two letters and 5-digit numbers", () => {
        expect(isValidRegistreringsnummer("AB12345")).toBe(true);
    });

    it("should return false if only one letter and more than 5-digit numbers", () => {
        expect(isValidRegistreringsnummer("A1234567")).toBe(false);
    });
});
