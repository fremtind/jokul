import { unicode } from "@fremtind/jkl-constants-util";
import { formatBytes } from "./formatBytes";

const { nbsp } = unicode;

describe("formatBytes", () => {
    it("correctly formats 8 Kb", () => {
        expect(formatBytes(8_000)).toEqual(`8${nbsp}Kb`);
    });

    it("correctly formats 88 Kb", () => {
        expect(formatBytes(88_000)).toEqual(`88${nbsp}Kb`);
    });

    it("correctly formats 8 Mb", () => {
        expect(formatBytes(8_000_000)).toEqual(`8${nbsp}Mb`);
    });

    it("correctly formats 88 Mb", () => {
        expect(formatBytes(88_000_000)).toEqual(`88${nbsp}Mb`);
    });

    it("correctly formats 888 Mb", () => {
        expect(formatBytes(888_000_000)).toEqual(`888${nbsp}Mb`);
    });

    it("correctly formats 8 888 Mb", () => {
        expect(formatBytes(8_888_000_000)).toEqual(`8${nbsp}888${nbsp}Mb`);
    });
});
