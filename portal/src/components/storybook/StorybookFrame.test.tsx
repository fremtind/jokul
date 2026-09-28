import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
    StorybookFrame,
    getStorybookFrameUrl,
    getStorybookUrl,
} from "./StorybookFrame";

afterEach(() => {
    cleanup();
});

describe("StorybookFrame", () => {
    it("shows the frame when the iframe has loaded", () => {
        render(<StorybookFrame storyId="button--primary" title="Primary" />);

        const frame = screen.getByTitle("Primary");

        expect(frame.style.visibility).toBe("hidden");

        fireEvent.load(frame);

        expect(frame.style.visibility).toBe("visible");
    });
});

describe("getStorybookFrameUrl", () => {
    it("uses latest when no version is provided", () => {
        expect(getStorybookFrameUrl({ storyId: "button--primary" })).toBe(
            "https://fremtind.github.io/jokul/latest/iframe.html?viewMode=story&id=button--primary",
        );
    });

    it("builds a URL from story ID and version", () => {
        expect(
            getStorybookFrameUrl({
                storyId: "button--primary",
                version: "version-4",
            }),
        ).toBe(
            "https://fremtind.github.io/jokul/version-4/iframe.html?viewMode=story&id=button--primary",
        );
    });

    it("removes hidden Sanity preview data from the story ID", () => {
        const hiddenPreviewData = "\u200b\u200b\u200b\u200b";

        expect(
            getStorybookFrameUrl({
                storyId: `button--primary${hiddenPreviewData}`,
            }),
        ).toBe(
            "https://fremtind.github.io/jokul/latest/iframe.html?viewMode=story&id=button--primary",
        );
    });

    it("returns no URL when the story ID is missing", () => {
        expect(getStorybookFrameUrl({})).toBeUndefined();
    });
});

describe("getStorybookUrl", () => {
    it("builds a link to the selected story and version", () => {
        expect(
            getStorybookUrl({
                storyId: "button--primary",
                version: "version-4",
            }),
        ).toBe(
            "https://fremtind.github.io/jokul/version-4/?path=/story/button--primary",
        );
    });

    it("returns undefined without a story ID", () => {
        expect(getStorybookUrl({})).toBeUndefined();
    });
});
