import React from "react";
import { navigate } from "gatsby";
import "./card.scss";

interface Props {
    heading: string;
    link: string;
}

export const Card: React.FunctionComponent<Props> = ({ heading, link, children }) => {
    // right arrow for internal links, up/right for external links:
    const arrow = link.startsWith("http") ? "\u2197" : "\u2192";
    const handleClick = () => navigate(link);

    return (
        <button className="jkl-portal-card" onClick={handleClick}>
            <p className="jkl-portal-card__heading">{heading}</p>
            <div className="jkl-portal-card__content">{children}</div>
            <div className="jkl-portal-card__arrow">{arrow}</div>
        </button>
    );
};
