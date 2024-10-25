import { describe, expect, it } from "vitest";
import { unicode } from "../../constants/index.js";
import { formatBytes } from "./formatBytes.js";

const { nbsp } = unicode;

describe("formatBytes", () => {
    it("correctly formats 8 KB", () => {
        expect(formatBytes(8_000)).toEqual(`8${nbsp}KB`);
    });

    it("correctly formats 88 KB", () => {
        expect(formatBytes(88_000)).toEqual(`88${nbsp}KB`);
    });

    it("correctly formats 8 MB", () => {
        expect(formatBytes(8_000_000)).toEqual(`8${nbsp}MB`);
    });

    it("correctly formats 88 MB", () => {
        expect(formatBytes(88_000_000)).toEqual(`88${nbsp}MB`);
    });

    it("correctly formats 888 MB", () => {
        expect(formatBytes(888_000_000)).toEqual(`888${nbsp}MB`);
    });

    it("correctly formats 8 888 MB", () => {
        expect(formatBytes(8_888_000_000)).toEqual(`8${nbsp}888${nbsp}MB`);
    });
});
