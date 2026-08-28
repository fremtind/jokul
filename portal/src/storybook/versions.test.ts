import { describe, expect, it } from "vitest";
import { isSupportedVersion, parseStorybookVersion } from "./versions";

describe("isSupportedVersion", () => {
    it.each(["latest", "next", "version-4", "local"])(
        "accepts %s",
        (version) => {
            expect(isSupportedVersion(version)).toBe(true);
        },
    );

    it.each(["version-3", "unknown"])("rejects %s", (version) => {
        expect(isSupportedVersion(version)).toBe(false);
    });
});

describe("parseStorybookVersion", () => {
    it("reads the version from an existing Storybook URL", () => {
        expect(
            parseStorybookVersion(
                "https://fremtind.github.io/jokul/version-4/iframe.html?id=button--primary",
            ),
        ).toBe("version-4");
    });

    it("recognizes a local Storybook URL", () => {
        expect(
            parseStorybookVersion(
                "http://localhost:6007/iframe.html?id=button--primary",
            ),
        ).toBe("local");
    });

    it("uses latest when the URL has no supported version", () => {
        expect(parseStorybookVersion("https://example.com/storybook")).toBe(
            "latest",
        );
    });
});
