import { isChassisNumber } from "./isChassisNumber";

describe("isChassisNumber", () => {
    it("should return true for 9-digit numbers", () => {
        expect(isChassisNumber("123456789")).toBe(true);
    });

    it("should return false if any letters", () => {
        expect(isChassisNumber("123A456")).toBe(false);
    });
});
