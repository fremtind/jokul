import React, { FC, MouseEventHandler } from "react";
import "./PortalLogo.scss";

export interface PortalLogoProps {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function isBetween(date: Date, start: Date, end: Date) {
    return date >= start && date <= end;
}

export const PortalLogo: FC<PortalLogoProps> = ({ onClick }) => {
    const today = new Date();

    const isSpooky = today.getMonth() === 9 && today.getDate() === 31;
    const is2023Easter = isBetween(
        today,
        new Date(2023, 3, 2),
        new Date(2023, 3, 10),
    );

    const isSpecial = isSpooky || is2023Easter;

    return (
        <a className="jkl-portal-logo" href="/" onClick={onClick}>
            {isSpooky && "Bøkul 🎃"}
            {is2023Easter && "Påskul 🐣"}
            {!isSpecial && "Jøkul"}
        </a>
    );
};
