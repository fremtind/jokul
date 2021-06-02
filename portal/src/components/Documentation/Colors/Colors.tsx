import React, { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import "./Colors.scss";
import { getComputedProperty } from "../../../utils/getComputedProperty";

type RgbValue = number[];

export interface Color {
    colorVariable: string;
    cmyk?: string;
    pantone?: string;
}

const componentToHex = (numValue: number) => {
    const hexVal = numValue.toString(16).toUpperCase();
    return hexVal.length === 1 ? `0${hexVal}` : hexVal;
};
export const rgbToHex = (rgbValue: RgbValue) =>
    componentToHex(rgbValue[0]) + componentToHex(rgbValue[1]) + componentToHex(rgbValue[2]);

interface ColorSwatchProps {
    colorVariable: string;
    className?: string;
    setColor?: (color: RgbValue) => void;
}

export const ColorSwatch = ({ colorVariable, className, setColor }: ColorSwatchProps) => {
    const swatchClasses = classNames(
        {
            "jkl-portal-color-swatch": true,
            "jkl-portal-color-swatch--hvit": colorVariable === "snohvit",
            "jkl-portal-color-swatch--svart": colorVariable === "granitt",
        },
        className,
    );
    const ref = useRef<SVGSVGElement>(null);
    useLayoutEffect(() => {
        const rgb = getComputedProperty(ref.current, "color").split(",");
        if (typeof setColor === "function") {
            setColor(rgb.map((color) => parseInt(color.replace(/[^0-9]/g, ""), 10)));
        }
    }, [setColor]);
    return (
        <svg
            ref={ref}
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

export const ColorInfo = ({ colorVariable, cmyk, pantone, vertical, className }: ColorInfoProps) => {
    const colorInfoClassName = classNames(
        {
            "jkl-portal-color-info": true,
            "jkl-portal-color-info--vertical": vertical,
        },
        className,
    );
    const [color, setColor] = useState<number[]>();
    return (
        <article className={colorInfoClassName}>
            <ColorSwatch setColor={setColor} className="jkl-portal-color-info__swatch" colorVariable={colorVariable} />
            <p className="jkl-portal-color-info__values jkl-small">
                {color && color.length === 3 && (
                    <>
                        {`RGB: ${color[0]} ${color[1]} ${color[2]}`} <br />
                        {`HEX: ${rgbToHex(color)}`}
                    </>
                )}
                {cmyk && <br />}
                {cmyk && `CMYK: ${cmyk}`}
                {pantone && <br />}
                {pantone}
            </p>
        </article>
    );
};
