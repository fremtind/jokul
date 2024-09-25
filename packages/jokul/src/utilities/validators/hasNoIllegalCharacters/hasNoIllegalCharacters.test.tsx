import { hasNoIllegalCharacters } from "./hasNoIllegalCharacters";

describe("hasNoIllegalCharacters", () => {
    it("should return true if no illegal characters is present", () => {
        expect(hasNoIllegalCharacters("Heisann")).toBe(true);
        expect(hasNoIllegalCharacters("123-ASD")).toBe(true);
    });

    it("should return false if illegal characters is present", () => {
        expect(hasNoIllegalCharacters("{")).toBe(false);
        expect(hasNoIllegalCharacters("123;230")).toBe(false);
    });
});
