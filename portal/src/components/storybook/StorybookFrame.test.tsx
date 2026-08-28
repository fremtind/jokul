import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
    StorybookFrame,
    getStorybookFrameUrl,
    getStorybookUrl,
} from "./StorybookFrame";

afterEach(() => {
    cleanup();
    vi.unstubAllEnvs();
});

describe("StorybookFrame", () => {
    it("shows the frame when the iframe has loaded", () => {
        render(<StorybookFrame storyId="button--primary" title="Primary" />);

        const frame = screen.getByTitle("Primary");

        expect(frame.style.visibility).toBe("hidden");

        fireEvent.load(frame);

        expect(frame.style.visibility).toBe("visible");
    });

    it("shows a stored legacy URL without a story ID", () => {
        const storyUrl =
            "https://fremtind.github.io/jokul/next/iframe.html?viewMode=story&id=button--primary";

        render(<StorybookFrame storyUrl={storyUrl} title="Primary" />);

        const frame = screen.getByTitle("Primary");

        fireEvent.load(frame);

        expect(frame.style.visibility).toBe("visible");
        expect(frame.getAttribute("src")).toBe(
            `${storyUrl}&globals=backgrounds.value:page;backgrounds.grid:!false`,
        );
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

    it("uses the configured Storybook URL locally", () => {
        vi.stubEnv("NEXT_PUBLIC_STORYBOOK_BASE_URL", "http://localhost:6007/");

        expect(
            getStorybookFrameUrl({
                storyId: "button--primary",
                version: "next",
            }),
        ).toBe(
            "http://localhost:6007/iframe.html?viewMode=story&id=button--primary",
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

    it("uses the stored URL for legacy content", () => {
        const storyUrl =
            "https://fremtind.github.io/jokul/next/iframe.html?viewMode=story&id=button--primary";

        expect(
            getStorybookFrameUrl({
                storyId: "button--primary",
                storyUrl,
                version: "version-4",
            }),
        ).toBe(storyUrl);
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

    it("uses the configured Storybook URL locally", () => {
        vi.stubEnv("NEXT_PUBLIC_STORYBOOK_BASE_URL", "http://localhost:6007/");

        expect(
            getStorybookUrl({
                storyId: "button--primary",
                version: "next",
            }),
        ).toBe("http://localhost:6007/?path=/story/button--primary");
    });
});
