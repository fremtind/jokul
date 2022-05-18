import cx from "classnames";
import React, { FC, useState } from "react";
import { ColorSwatch, rgbToHex } from "./";
import "./color-info.scss";

export interface Color {
    colorVariable: string;
    cmyk?: string;
    pantone?: string;
}

interface ColorInfoProps extends Color {
    vertical?: boolean;
    className?: string;
}

export const ColorInfo: FC<ColorInfoProps> = ({ colorVariable, cmyk, pantone, vertical, className }) => {
    const [color, setColor] = useState<number[]>();
    return (
        <article
            className={cx("jkl-portal-color-info", className, {
                "jkl-portal-color-info--vertical": vertical,
            })}
        >
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
