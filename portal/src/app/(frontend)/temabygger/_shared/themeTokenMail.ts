import type { JokulThemeFile } from "@fremtind/jokul/theme";

export function createThemeBlob(theme: JokulThemeFile): string {
    return `data:application/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(theme),
    )}`;
}
