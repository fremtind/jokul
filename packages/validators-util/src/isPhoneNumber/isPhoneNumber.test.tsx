import { isPhoneNumber } from "./isPhoneNumber";

describe("isPhoneNumber", () => {
    it("should return true for 8-digit numbers", () => {
        expect(isPhoneNumber("12345678")).toBe(true);
    });

    it("should return false for any letters and space", () => {
        expect(isPhoneNumber("1a2 34 56789")).toBe(false);
    });
});
