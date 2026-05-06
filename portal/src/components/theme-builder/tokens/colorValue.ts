const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

export const isHexColor = (value: string): boolean =>
    HEX_COLOR_PATTERN.test(value);

export const normalizeHexColor = (value: string): string =>
    value.replace(/\s+/g, "").toUpperCase();

export const hexColorErrorLabel = (value: string): string | undefined =>
    isHexColor(value) ? undefined : "Bruk formatet #RRGGBB";

export const colorPickerValue = (value: string): string =>
    isHexColor(value) ? value : "#000000";
