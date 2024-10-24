import { describe, expect, it } from "vitest";
import { isValidChassisnummer } from "./isValidChassisnummer.js";

describe("isValidChassisnummer", () => {
    it("should return true for 9-character strings", () => {
        expect(isValidChassisnummer("123456789")).toBe(true);
        expect(isValidChassisnummer("A23C56U89")).toBe(true);
        expect(isValidChassisnummer("ABCDEFGHI")).toBe(true);
        expect(isValidChassisnummer("abcdefghi")).toBe(true);
    });
    it("should return false for 9-charachter strings containing special characters", () => {
        expect(isValidChassisnummer("12345678#")).toBe(false);
        expect(isValidChassisnummer("1234 6789")).toBe(false);
        expect(isValidChassisnummer("A23[56U89")).toBe(false);
        expect(isValidChassisnummer("AAA{_}AAA")).toBe(false);
    });
    it("should return true for 17-character strings", () => {
        expect(isValidChassisnummer("12345678901234567")).toBe(true);
        expect(isValidChassisnummer("ABCDEFG1IJK2MN3P6")).toBe(true);
        expect(isValidChassisnummer("ABCDEFGHIJKLMNOPQ")).toBe(true);
        expect(isValidChassisnummer("abcdefghijklmnopq")).toBe(true);
    });
    it("should return false for 17-charachter strings containing special characters", () => {
        expect(isValidChassisnummer("123456789 1234567")).toBe(false);
        expect(isValidChassisnummer("1234567$901234567")).toBe(false);
        expect(isValidChassisnummer("ABCDEFG_IJKLMNOPQ")).toBe(false);
    });
    it("should return false for strings neither 9 nor 17 characters long", () => {
        expect(isValidChassisnummer("")).toBe(false);
        expect(isValidChassisnummer("short")).toBe(false);
        expect(isValidChassisnummer("longstringisloooooooooooooooooooooooooooooooooooooooooong")).toBe(false);
    });
});
