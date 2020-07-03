import React from "react";
import classNames from "classnames";

import "./Colors.scss";

interface RgbValue {
    r: number;
    g: number;
    b: number;
}

export interface Color {
    colorVariable: string;
    rgbValue: RgbValue;
    cmyk?: string;
    pantone?: string;
}

const componentToHex = (numValue: number) => {
    const hexVal = numValue.toString(16).toUpperCase();
    return hexVal.length === 1 ? `0${hexVal}` : hexVal;
};
export const rgbToHex = (rgbValue: RgbValue) =>
    componentToHex(rgbValue.r) + componentToHex(rgbValue.g) + componentToHex(rgbValue.b);

interface ColorSwatchProps {
    colorVariable: string;
    className?: string;
}

export const ColorSwatch = ({ colorVariable, className }: ColorSwatchProps) => {
    const swatchClasses = classNames(
        {
            "jkl-portal-color-swatch": true,
            "jkl-portal-color-swatch--hvit": colorVariable === "hvit",
            "jkl-portal-color-swatch--svart": colorVariable === "svart",
        },
        className,
    );
    return (
        <svg
            role="img"
            aria-label={`Fargeprøve av fargen ${colorVariable}`}
            className={`${swatchClasses} jkl-color-${colorVariable}`}
            viewBox="0 0 20 20"
            fill="none"
        >
            <title>{`Fargeprøve av fargen ${colorVariable}`}</title>
            <path
                className="jkl-portal-color-swatch__diamond"
                d="M0.0707109 10L10 0.0707109L19.9293 10L10 19.9293L0.0707109 10Z"
            />
        </svg>
    );
};

interface ColorInfoProps extends Color {
    vertical?: boolean;
    className?: string;
}

export const ColorInfo = ({ colorVariable, rgbValue, cmyk, pantone, vertical, className }: ColorInfoProps) => {
    const colorInfoClassName = classNames(
        {
            "jkl-portal-color-info": true,
            "jkl-portal-color-info--vertical": vertical,
        },
        className,
    );
    return (
        <article className={colorInfoClassName}>
            <ColorSwatch className="jkl-portal-color-info__swatch" colorVariable={colorVariable} />
            <p className="jkl-portal-color-info__values jkl-small">
                {`RGB: ${rgbValue.r} ${rgbValue.g} ${rgbValue.b}`}
                <br />
                {`HEX: ${rgbToHex(rgbValue)}`}
                {cmyk && <br />}
                {cmyk && `CMYK: ${cmyk}`}
                {pantone && <br />}
                {pantone}
            </p>
        </article>
    );
};
