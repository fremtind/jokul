import React, { FC, MouseEventHandler } from "react";
import "./PortalLogo.scss";

export interface PortalLogoProps {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const PortalLogo: FC<PortalLogoProps> = ({ onClick }) => {
    const today = new Date();
    const isSpooky = today.getMonth() === 9 && today.getDate() === 31;

    return (
        <a className="jkl-portal-logo" href="/" onClick={onClick}>
            {isSpooky ? "Bøkul 🎃" : "Jøkul"}
        </a>
    );
};
