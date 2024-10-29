import cx from "classnames";
import React, { FC } from "react";
import "./color.scss";

interface ColorProps {
    className?: string;
    name: string;
    hex: string;
    rgb: string;
    hsl: string;
}

export const Color: FC<ColorProps> = ({ className, name, hex, rgb, hsl }) => {
    return (
        <div className="jkl-portal-color" id={name}>
            <div
                className={cx(
                    "jkl-portal-color__swatch",
                    `jkl-portal-color__swatch--${name}`,
                    className,
                )}
            />
            <p className="jkl-portal-color__name">{name}</p>
            <p className="jkl-portal-color__value">{hex}</p>
            <p className="jkl-portal-color__value">{rgb}</p>
            <p className="jkl-portal-color__value">{hsl}</p>
        </div>
    );
};
