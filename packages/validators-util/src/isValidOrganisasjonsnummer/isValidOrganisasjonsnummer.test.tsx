import { isValidOrganisasjonsnummer } from "./isValidOrganisasjonsnummer";

describe("isValidOrganisasjonsnummer", () => {
    it("should return true for orgnr without space", () => {
        expect(isValidOrganisasjonsnummer("915651232")).toBe(true);
    });

    it("should return false for any spaces", () => {
        expect(isValidOrganisasjonsnummer("91 651232")).toBe(false);
    });

    it("should return false for any letters or spaces", () => {
        expect(isValidOrganisasjonsnummer("91a651232")).toBe(false);
    });
});
