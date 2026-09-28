import { describe, expect, it } from "vitest";
import { isSupportedVersion } from "./versions";

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
