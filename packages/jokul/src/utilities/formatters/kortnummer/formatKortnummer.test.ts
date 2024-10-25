import { describe, expect, it } from "vitest";
import { unicode } from "../../constants/index.js";
import { formatKortnummer } from "./formatKortnummer.js";

const { nbsp } = unicode;

describe("formatKortnummer", () => {
    it("correctly formats 16 digit numbers", () => {
        expect(formatKortnummer("5457623898234113")).toEqual(`5457${nbsp}6238${nbsp}9823${nbsp}4113`);
    });

    it("does not format 15 digit numbers", () => {
        expect(formatKortnummer("545762389823411")).toEqual(`545762389823411`);
    });

    it("does not format 17 digit numbers", () => {
        expect(formatKortnummer("54576238982341134")).toEqual(`54576238982341134`);
    });

    it("does not format a string containing letters", () => {
        expect(formatKortnummer("5457heisann")).toEqual(`5457heisann`);
    });
});

describe("formatKortnummer with partial option", () => {
    it("correctly formats numbers over 4 digits", () => {
        expect(formatKortnummer("545762", { partial: true })).toEqual(`5457${nbsp}62`);
        expect(formatKortnummer("5457623898", { partial: true })).toEqual(`5457${nbsp}6238${nbsp}98`);
        expect(formatKortnummer("54576238982341", { partial: true })).toEqual(`5457${nbsp}6238${nbsp}9823${nbsp}41`);
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatKortnummer("5 45762", { partial: true })).toEqual(`5457${nbsp}62`);
        expect(formatKortnummer("545 76238 98", { partial: true })).toEqual(`5457${nbsp}6238${nbsp}98`);
        expect(formatKortnummer("54 57623 898 2341", { partial: true })).toEqual(`5457${nbsp}6238${nbsp}9823${nbsp}41`);
    });
});
