import React from "react";
import { useScreen } from "@fremtind/jkl-react-hooks";

import { ColorInfo, Color } from "./Colors";
import "./ColorDescription.scss";

interface ColorDescriptionProps extends Color {
    title: string;
}

export const ColorDescription: React.FC<ColorDescriptionProps> = ({ title, children, ...colorInfo }) => (
    <article className="jkl-portal-color-description">
        <h3 className="jkl-portal-color-description__title jkl-heading-medium">{title}</h3>
        <ColorInfo className="jkl-portal-color-description__swatch" {...colorInfo} />
        <p className="jkl-portal-color-description__text jkl-body jkl-portal-paragraph">{children}</p>
    </article>
);

interface TwoToneProps extends ColorDescriptionProps {
    color: Color;
    darkColor: Color;
    className?: string;
}
export const TwoToneColorDescription: React.FC<TwoToneProps> = ({ title, color, darkColor, className, children }) => {
    const screen = useScreen();
    return (
        <article className={`jkl-portal-two-tone-description ${className ? className : ""}`}>
            <div className="jkl-portal-two-tone-description__info-wrapper">
                <h3 className="jkl-portal-two-tone-description__title jkl-heading-medium">{title}</h3>
                <p className="jkl-portal-two-tone-description__info jkl-body">{children}</p>
            </div>
            <div className="jkl-portal-two-tone-description__light-color">
                <ColorInfo vertical={!screen.isSmallDevice} {...color} />
            </div>
            <div className="jkl-portal-two-tone-description__dark-color">
                <ColorInfo vertical={!screen.isSmallDevice} {...darkColor} />
            </div>
        </article>
    );
};
