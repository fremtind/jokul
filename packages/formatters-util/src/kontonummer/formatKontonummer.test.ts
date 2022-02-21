import { unicode } from "@fremtind/jkl-constants-util";
import { formatKontonummer } from "./formatKontonummer";

const { nbsp } = unicode;

describe("formatKontonummer", () => {
    it("correctly formats 11 digit numbers", () => {
        expect(formatKontonummer("16024454979")).toEqual(`1602${nbsp}44${nbsp}54979`);
    });

    it("handles custom separators", () => {
        expect(formatKontonummer("16024454979", { separator: "." })).toEqual(`1602.44.54979`);
    });

    it("does not format 10 digit numbers", () => {
        expect(formatKontonummer("1602445497")).toEqual(`1602445497`);
    });

    it("does not format 12 digit numbers", () => {
        expect(formatKontonummer("160244549710")).toEqual(`160244549710`);
    });

    it("does not format a string containing letters", () => {
        expect(formatKontonummer("1602heisann")).toEqual(`1602heisann`);
    });
});

describe("formatKontonummer with partial option", () => {
    it("correctly formats numbers over 4 digits", () => {
        expect(formatKontonummer("16024", { partial: true })).toEqual(`1602${nbsp}4`);
        expect(formatKontonummer("1602445", { partial: true })).toEqual(`1602${nbsp}44${nbsp}5`);
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatKontonummer("16 0244 54 979", { partial: true })).toEqual(`1602${nbsp}44${nbsp}54979`);
        expect(formatKontonummer("16 0244", { partial: true })).toEqual(`1602${nbsp}44`);
    });
});
