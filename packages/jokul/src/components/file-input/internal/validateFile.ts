import { formatBytes } from "../../../utilities/formatters/bytes/formatBytes.js";
import type { FileInputFileValidation } from "../types.js";

export function validateFile(
    file: File,
    accept = "",
    maxSizeBytes?: number,
): FileInputFileValidation | undefined {
    const acceptStrings = accept
        .split(",")
        .map((s) => s.toLowerCase())
        .map((s) => s.replaceAll("*", ""))
        .map((s) => s.trim());

    let isValidFormat = acceptStrings.length === 0;

    isValidFormat = acceptStrings.reduce(
        (found, acceptString) =>
            found ||
            file.type.includes(acceptString) ||
            file.name.endsWith(acceptString),
        isValidFormat,
    );

    if (!isValidFormat) {
        return {
            type: "WRONG_TYPE",
            message: `Filtypen ${file.name?.split(".")[1] || ""} støttes ikke`,
        };
    }

    if (typeof maxSizeBytes != "undefined" && file.size > maxSizeBytes) {
        return {
            type: "TOO_LARGE",
            message: `Filen er ${formatBytes(
                file.size,
            )}, men kan maksimalt være ${formatBytes(maxSizeBytes)}`,
        };
    }

    return undefined;
}
