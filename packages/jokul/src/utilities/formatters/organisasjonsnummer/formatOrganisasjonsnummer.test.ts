import { describe, expect, it } from "vitest";
import { unicode } from "../../constants/index.js";
import { formatOrganisasjonsnummer } from "./formatOrganisasjonsnummer.js";

const { nbsp } = unicode;

describe("formatOrganisasjonsnummer", () => {
    it("correctly formats 9 digit numbers", () => {
        expect(formatOrganisasjonsnummer("915651232")).toEqual(`915${nbsp}651${nbsp}232`);
    });

    it("does not format 10 digit numbers", () => {
        expect(formatOrganisasjonsnummer("9156512322")).toEqual(`9156512322`);
    });

    it("does not format a string containing letters", () => {
        expect(formatOrganisasjonsnummer("915651hei")).toEqual(`915651hei`);
    });
});

describe("formatOrganisasjonsnummer with partial option", () => {
    it("correctly formats numbers over 2 digits", () => {
        expect(formatOrganisasjonsnummer("915", { partial: true })).toEqual(`915`);
        expect(formatOrganisasjonsnummer("9156", { partial: true })).toEqual(`915${nbsp}6`);
        expect(formatOrganisasjonsnummer("91565", { partial: true })).toEqual(`915${nbsp}65`);
        expect(formatOrganisasjonsnummer("915651", { partial: true })).toEqual(`915${nbsp}651`);
        expect(formatOrganisasjonsnummer("9156512", { partial: true })).toEqual(`915${nbsp}651${nbsp}2`);
        expect(formatOrganisasjonsnummer("91565123", { partial: true })).toEqual(`915${nbsp}651${nbsp}23`);
        expect(formatOrganisasjonsnummer("915651232", { partial: true })).toEqual(`915${nbsp}651${nbsp}232`);
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatOrganisasjonsnummer("91 5 ", { partial: true })).toEqual(`915`);
        expect(formatOrganisasjonsnummer("9 15 65 1", { partial: true })).toEqual(`915${nbsp}651`);
        expect(formatOrganisasjonsnummer("91 5 651 2", { partial: true })).toEqual(`915${nbsp}651${nbsp}2`);
        expect(formatOrganisasjonsnummer("9 1 5 6 5 1 2 3 2", { partial: true })).toEqual(`915${nbsp}651${nbsp}232`);
    });
});
