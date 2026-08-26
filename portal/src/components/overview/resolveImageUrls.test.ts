import { describe, expect, it } from "vitest";
import { resolveImageUrls } from "./resolveImageUrls";

const fallback = {
    light: "/placeholder-light.svg",
    dark: "/placeholder-dark.svg",
};

describe("resolveImageUrls", () => {
    it("uses the matching image for each color mode", () => {
        expect(resolveImageUrls("light.png", "dark.png", fallback)).toEqual({
            light: "light.png",
            dark: "dark.png",
        });
    });

    it("uses the light image in both modes when no dark image exists", () => {
        expect(resolveImageUrls("light.png", undefined, fallback)).toEqual({
            light: "light.png",
            dark: "light.png",
        });
    });

    it("uses the dark image in both modes when no light image exists", () => {
        expect(resolveImageUrls(undefined, "dark.png", fallback)).toEqual({
            light: "dark.png",
            dark: "dark.png",
        });
    });

    it("uses mode-specific placeholders when no images exist", () => {
        expect(resolveImageUrls(undefined, undefined, fallback)).toEqual(
            fallback,
        );
    });
});
