import type { ColorToken } from "../tokens";
import { tokensToSchema } from "../tokens";

export const THEME_BUILDER_EXPORT_FILE_NAME = "color.custom-brand.tokens.json";

export const createThemeBuilderExport = (tokens: ColorToken[]): string =>
    JSON.stringify(tokensToSchema(tokens), null, 4);

export async function copyThemeBuilderExport(value: string): Promise<void> {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
            return;
        }
        if (!fallbackCopyToClipboard(value)) {
            throw new Error("Clipboard API utilgjengelig");
        }
    } catch (error) {
        if (!fallbackCopyToClipboard(value)) {
            console.error("Kunne ikke kopiere eksporten.", error);
            window.alert(
                "Kunne ikke kopiere automatisk. Bruk Last ned i stedet.",
            );
        }
    }
}

export function downloadThemeBuilderExport(value: string): void {
    const blob = new Blob([value], {
        type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = THEME_BUILDER_EXPORT_FILE_NAME;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function fallbackCopyToClipboard(value: string): boolean {
    if (typeof document === "undefined") return false;
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    document.body.append(textArea);
    textArea.focus();
    textArea.select();
    let didCopy = false;
    try {
        didCopy = document.execCommand("copy");
    } catch {
        didCopy = false;
    }
    textArea.remove();
    return didCopy;
}
