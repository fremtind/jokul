import { formatBytes } from "@fremtind/jkl-formatters-util";
import type { FileInputFileValidation } from "../types";

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

    isValidFormat = acceptStrings.some(
        (acceptString) =>
            file.type.toLowerCase().includes(acceptString) ||
            file.name.toLowerCase().endsWith(acceptString),
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
