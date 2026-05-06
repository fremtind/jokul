import type { CSSProperties } from "react";
import { type ColorToken, THEME_MODES, type ThemeMode } from "../tokens";

export function buildPreviewStyle(tokens: ColorToken[]): CSSProperties {
    const [lightMode, darkMode] = getLightDarkModes();
    const style: Record<string, string> = {};

    for (const token of tokens) {
        style[`--jkl-color-${cssVariablePath(token.path)}`] =
            `light-dark(${token[lightMode]}, ${token[darkMode]})`;
    }

    return style as CSSProperties;
}

function getLightDarkModes(): readonly [ThemeMode, ThemeMode] {
    if (THEME_MODES.length !== 2) {
        throw new Error(
            `Theme builder forventer akkurat 2 theme-modes (light + dark) for å støtte CSS light-dark(). Fant ${THEME_MODES.length}: ${THEME_MODES.join(", ")}.`,
        );
    }
    return [THEME_MODES[0], THEME_MODES[1]];
}

function cssVariablePath(path: string[]): string {
    return path.map(kebabSegment).join("-");
}

function kebabSegment(segment: string): string {
    return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
