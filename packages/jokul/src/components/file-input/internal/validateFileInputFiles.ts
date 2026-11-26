import { formatBytes } from "../../../utilities/formatters/bytes/formatBytes.js";
import type { UploadedFile } from "../types.js";

export function validateFileInputFiles(
    file: File,
    accept = "",
    maxSizeBytes?: number,
): UploadedFile["validation"] | undefined {
    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();
    const tokens = accept
        .split(",")
        .map((token) => token.trim().toLowerCase())
        .filter(Boolean);

    // Samme regler som nettleseren bruker for `accept`, men vi godtar også
    // filendelser uten punktum (`pdf`) for bakoverkompatibilitet.
    // https://html.spec.whatwg.org/multipage/input.html#attr-input-accept
    const isValidFormat =
        tokens.length === 0 ||
        tokens.some((token) => {
            if (token.endsWith("/*")) {
                return fileType.startsWith(token.slice(0, -1));
            }
            if (token.includes("/")) {
                return fileType === token;
            }
            return fileName.endsWith(
                token.startsWith(".") ? token : `.${token}`,
            );
        });

    if (!isValidFormat) {
        const extension = file.name.includes(".")
            ? file.name.split(".").pop()
            : undefined;
        return {
            type: "WRONG_TYPE",
            message: extension
                ? `Filtypen ${extension} støttes ikke`
                : "Filtypen støttes ikke",
        };
    }

    if (maxSizeBytes !== undefined && file.size > maxSizeBytes) {
        return {
            type: "TOO_LARGE",
            message: `Filen er ${formatBytes(
                file.size,
            )}, men kan maksimalt være ${formatBytes(maxSizeBytes)}`,
        };
    }

    return undefined;
}
