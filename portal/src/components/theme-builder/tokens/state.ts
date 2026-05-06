import { isHexColor } from "./colorValue";
import { THEME_MODES } from "./definitions";
import type { ColorToken } from "./types";
import { getTokenId } from "./types";

export const tokenValuesAreValid = (tokens: ColorToken[]): boolean =>
    tokens.every((token) =>
        THEME_MODES.every((mode) => isHexColor(token[mode])),
    );

export const tokenListsAreEqual = (a: ColorToken[], b: ColorToken[]): boolean =>
    a.length === b.length &&
    a.every((token, index) => {
        const other = b[index];
        return (
            getTokenId(token) === getTokenId(other) &&
            THEME_MODES.every((mode) => token[mode] === other[mode])
        );
    });
