import { describe, expect, it } from "vitest";
import { hasMinimumWords } from "./hasMinimumWords.js";

describe("hasMinimumWords", () => {
    it("should return true if same number as minimum words", () => {
        expect(hasMinimumWords("Kenneth Apeland")).toBe(true);
        expect(hasMinimumWords("Kenneth", { minimumWords: 1 })).toBe(true);
        expect(hasMinimumWords("Ola Nilsen Nordmann", { minimumWords: 3 })).toBe(true);
    });

    it("should return true if longer than minimum words", () => {
        expect(hasMinimumWords("Ola Nilsen Nordmann")).toBe(true);
    });

    it("should return false if shorter than minimum words", () => {
        expect(hasMinimumWords("Kenneth")).toBe(false);
        expect(hasMinimumWords("Kenneth Apeland", { minimumWords: 3 })).toBe(false);
    });
});
