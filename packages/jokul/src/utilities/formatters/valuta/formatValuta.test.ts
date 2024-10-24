import { describe, expect, it } from "vitest";
import { unicode } from "../../constants/index.js";
import { formatValuta } from "./formatValuta.js";

const { nbsp } = unicode;

describe("formatValuta", () => {
    it("uses suffix 'kr' by default", () => {
        expect(formatValuta(123)).toEqual(`123${nbsp}kr`);
    });

    it("displays custom suffix correctly", () => {
        expect(formatValuta(123.5, { suffix: "kr/mnd" })).toEqual(`123,50${nbsp}kr/mnd`);
    });

    it("displays custom prefix correctly", () => {
        expect(formatValuta(123.5, { prefix: "fra" })).toEqual(`fra${nbsp}123,50${nbsp}kr`);
    });

    it("always uses two digit fractions on non-integers", () => {
        expect(formatValuta(123.5)).toEqual(`123,50${nbsp}kr`);
    });

    it("allows to ovveride number of fraction digits", () => {
        expect(formatValuta(123.5, { minimumFractionDigits: 3, maximumFractionDigits: 3 })).toEqual(`123,500${nbsp}kr`);
    });

    it("works on valid strings", () => {
        expect(formatValuta("123.5")).toEqual(`123,50${nbsp}kr`);
    });

    it("passes through strings that cannot be parsed as numbers", () => {
        expect(formatValuta("hundreogtjuetre")).toEqual(`hundreogtjuetre`);
    });

    it("handles a sum of 0", () => {
        expect(formatValuta("0")).toEqual(`0${nbsp}kr`);
    });
});
