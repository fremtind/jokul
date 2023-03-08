import { formatBytes } from "@fremtind/jkl-formatters-util";
import type { FileUploadValidation } from "./FileUploaderInput";

export function validateFile(file: File, accept = "", maxSizeBytes?: number): FileUploadValidation | undefined {
    const acceptStrings = accept
        .split(",")
        .map((s) => s.toLowerCase())
        .map((s) => s.replaceAll("*", ""));

    let isValidFormat = acceptStrings.length === 0;

    isValidFormat = acceptStrings.reduce(
        (found, acceptString) => found || file.type.includes(acceptString) || file.name.endsWith(acceptString),
        isValidFormat,
    );

    if (!isValidFormat) {
        return { type: "WRONG_FORMAT", message: `Filtypen ${file.name?.split(".")[1] || ""} støttes ikke` };
    }

    if (typeof maxSizeBytes != "undefined" && file.size > maxSizeBytes) {
        return {
            type: "TOO_BIG",
            message: `Filen er ${formatBytes(file.size)}, men kan maksimalt være ${formatBytes(maxSizeBytes)}`,
        };
    }

    return undefined;
}
