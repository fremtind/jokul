import { isValidName } from "./isValidName";

describe("isValidName", () => {
    it("should return true if no illegal chars", () => {
        expect(isValidName("Kenneth")).toBe(true);
        expect(isValidName("Kenneth Apeland")).toBe(true);
        expect(isValidName("Rávna Ròverdatter")).toBe(true);
        expect(isValidName("Jökull Guðrún")).toBe(true);
        expect(isValidName("Mike O'Brien")).toBe(true);
        expect(isValidName("Nils-Olav Nordmann")).toBe(true);
    });

    it("should return false if contains Punctuation, Symbols or Digits", () => {
        expect(isValidName("sd@sd")).toBe(false);
        expect(isValidName("Har du det bra?")).toBe(false);
        expect(isValidName("Nei.")).toBe(false);
        expect(isValidName("{asdads}")).toBe(false);
        expect(isValidName("Heisann (sveisann)")).toBe(false);
        expect(isValidName("Formula1")).toBe(false);
    });
});
