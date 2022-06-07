import cx from "classnames";
import React, { FC, useEffect, useRef } from "react";
import { getComputedProperty } from "../../utils/getComputedProperty";
import type { RgbValue } from ".";
import "./color-swatch.scss";

interface ColorSwatchProps {
    colorVariable: string;
    className?: string;
    setColor?: (color: RgbValue) => void;
}

export const ColorSwatch: FC<ColorSwatchProps> = ({ colorVariable, className, setColor }) => {
    const ref = useRef<SVGSVGElement>(null);
    useEffect(() => {
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
            className={cx("jkl-portal-color-swatch", `jkl-portal-color-swatch--${colorVariable}`, className, {
                "jkl-portal-color-swatch--granitt-stroke": ["hvit", "sand", "dis", "snohvit"].includes(colorVariable),
                "jkl-portal-color-swatch--snohvit-stroke": ["granitt", "svart", "skifer"].includes(colorVariable),
            })}
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
