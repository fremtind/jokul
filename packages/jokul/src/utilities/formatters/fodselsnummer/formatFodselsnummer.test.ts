import { unicode } from "../../constants/index.js";
import { formatFodselsnummer } from "./formatFodselsnummer.js";

const { nbsp } = unicode;

describe("formatFodselsnummer", () => {
    it("correctly formats 11 digit numbers", () => {
        expect(formatFodselsnummer("01065100203")).toEqual(`010651${nbsp}00203`);
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatFodselsnummer("010 65 100 203")).toEqual(`010651${nbsp}00203`);
    });

    it("does not format a 10 digit number", () => {
        expect(formatFodselsnummer("0106510020")).toEqual(`0106510020`);
    });

    it("does not format a 12 digit number", () => {
        expect(formatFodselsnummer("010651002034")).toEqual(`010651002034`);
    });

    it("does not format a string containing letters", () => {
        expect(formatFodselsnummer("0106heisann")).toEqual(`0106heisann`);
    });
});

describe("formatFodselsnummer with partial option", () => {
    it("correctly formats numbers over 6 digits", () => {
        expect(formatFodselsnummer("0106510", { partial: true })).toEqual(`010651${nbsp}0`);
        expect(formatFodselsnummer("010651002", { partial: true })).toEqual(`010651${nbsp}002`);
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatFodselsnummer("010 65 100 203", { partial: true })).toEqual(`010651${nbsp}00203`);
        expect(formatFodselsnummer("010 65 100", { partial: true })).toEqual(`010651${nbsp}00`);
    });

    it("does not format a 6 digit number", () => {
        expect(formatFodselsnummer("010651002034", { partial: true })).toEqual(`010651002034`);
    });

    it("does not format a 12 digit number", () => {
        expect(formatFodselsnummer("010651002034", { partial: true })).toEqual(`010651002034`);
    });

    it("does not format a string containing letters", () => {
        expect(formatFodselsnummer("0106heisann")).toEqual(`0106heisann`);
    });
});
