import { isValidOrganisasjonsnummer } from "./isValidOrganisasjonsnummer.js";

describe("isValidOrganisasjonsnummer", () => {
    it("should return true for orgnr without space", () => {
        expect(isValidOrganisasjonsnummer("915651232")).toBe(true);
    });

    it("should return false for any spaces", () => {
        expect(isValidOrganisasjonsnummer("915 651 232")).toBe(false);
    });

    it("should return false for fake orgnr", () => {
        expect(isValidOrganisasjonsnummer("100100100")).toBe(false);
    });

    it("should return false for missing number", () => {
        expect(isValidOrganisasjonsnummer("91565123")).toBe(false);
    });

    it("should return false for any letters", () => {
        expect(isValidOrganisasjonsnummer("91a651232")).toBe(false);
    });
});
