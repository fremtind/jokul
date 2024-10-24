import { describe, expect, it } from "vitest";
import { isValidKortnummer } from "./isValidKortnummer.js";

describe("isValidKortnummer", () => {
    it("returns true for valid credit card numbers", () => {
        expect(isValidKortnummer("5457623898234113")).toBeTruthy();
    });

    it("allows spaces between digit groups", () => {
        expect(isValidKortnummer("5457 6238 9823 4113")).toBeTruthy();
    });

    it("does not allow characters other than digits or spaces", () => {
        expect(isValidKortnummer("5457-6238-9823-4113")).toBeFalsy();
        expect(isValidKortnummer("5457abcd98234113")).toBeFalsy();
        expect(isValidKortnummer("5457****98234113")).toBeFalsy();
    });

    it("returns false for numbers with too few digits", () => {
        expect(isValidKortnummer("545762389823411")).toBeFalsy();
    });

    it("returns false for numbers with too many digits", () => {
        expect(isValidKortnummer("54576238982341134")).toBeFalsy();
    });

    it("returns false of check digit is incorrect", () => {
        expect(isValidKortnummer("5457623898234117")).toBeFalsy();
    });
});
