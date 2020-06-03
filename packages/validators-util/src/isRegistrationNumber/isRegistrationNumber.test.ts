import { isRegistrationNumber } from "./isRegistrationNumber";

describe("isRegistrationNumber", () => {
    it("should return true for two letters and 5-digit numbers", () => {
        expect(isRegistrationNumber("AB12345")).toBe(true);
    });

    it("should return false if only one letter and more than 5-digit numbers", () => {
        expect(isRegistrationNumber("A1234567")).toBe(false);
    });
});
