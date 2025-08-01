import { describe, expect, it } from "vitest";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

describe("validateFileInputFiles", () => {
    it("should pass when file is of an expected format and size", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "text/plain";
        const maxSizeBytes = 100_000_000;

        expect(validateFileInputFiles(file, accept, maxSizeBytes)).toEqual(
            undefined,
        );
    });

    it("should pass when no restrictions are set", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });

        expect(validateFileInputFiles(file)).toEqual(undefined);
    });

    it("should fail when file is too big", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "text/plain";
        const maxSizeBytes = 1;

        const result = validateFileInputFiles(file, accept, maxSizeBytes);
        expect(result).toBeTruthy();
        expect(result?.type).toBe("TOO_LARGE");
        expect(result?.message).toMatch(/men kan maksimalt være/);
    });

    it("should fail when file is of unexpected type", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "image/*";
        const maxSizeBytes = 100_000_000;

        const result = validateFileInputFiles(file, accept, maxSizeBytes);
        expect(result).toBeTruthy();
        expect(result?.type).toBe("WRONG_TYPE");
        expect(result?.message).toMatch(/Filtypen/);
        expect(result?.message).toMatch(/støttes ikke/);
    });

    it("should handle differences in case", () => {
        const file = new File(["BRRRRRRRR"], "TEST.TxT", {
            type: "text/plain",
        });
        const accept = "txt,exe";

        const result = validateFileInputFiles(file, accept);

        expect(result).toBeUndefined();
    });
});
