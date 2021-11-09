import type { RgbValue } from "./";

const componentToHex = (numValue: number) => {
    const hexVal = numValue.toString(16).toUpperCase();
    return hexVal.length === 1 ? `0${hexVal}` : hexVal;
};

export const rgbToHex = (rgbValue: RgbValue): string =>
    componentToHex(rgbValue[0]) + componentToHex(rgbValue[1]) + componentToHex(rgbValue[2]);
