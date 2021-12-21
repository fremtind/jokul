import { isInteger } from "./isInteger";

describe("isInteger", () => {
    it("should return true if only numbers", () => {
        expect(isInteger("1234")).toBe(true);
    });

    it("should return true if numbers and whitespace", () => {
        expect(isInteger(" 123 ")).toBe(true);
    });

    it("should return false if letters", () => {
        expect(isInteger("asd")).toBe(false);
    });

    it("should return false if letters and numbers", () => {
        expect(isInteger("asd123")).toBe(false);
    });

    it("should return false if decimals", () => {
        expect(isInteger("1.23")).toBe(false);
        expect(isInteger("1,23")).toBe(false);
    });
});
