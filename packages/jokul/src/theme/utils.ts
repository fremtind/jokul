import type { HexColor } from "./types.js";

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const THEME_NAME_PATTERN = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;

/** Sann når verdien matcher `#RRGGBB` (case-insensitiv). */
export const isHex = (value: string): value is HexColor =>
    HEX_COLOR_PATTERN.test(value);

/** Stripper mellomrom og gjør om til store bokstaver */
export const normalizeHex = (value: string): string => {
    return value.replace(/\s+/g, "").toUpperCase();
};

/** Sann når verdien kan brukes som `name` i en temafil. */
export const isThemeName = (value: unknown): value is string =>
    typeof value === "string" && THEME_NAME_PATTERN.test(value);
