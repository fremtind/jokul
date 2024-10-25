import { describe, expect, it } from "vitest";
import { isExactLength } from "./isExactLength.js";

describe("isExactLength", () => {
    it("should return true if exact length", () => {
        expect(isExactLength("1234", 4)).toBe(true);
    });

    it("should return false if shorter than exact length", () => {
        expect(isExactLength("asd", 4)).toBe(false);
    });

    it("should return false if longer than exact length", () => {
        expect(isExactLength("12345", 4)).toBe(false);
    });
});
