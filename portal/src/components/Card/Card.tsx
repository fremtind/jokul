import { unicode } from "@fremtind/jkl-constants-util";
import { WithChildren } from "@fremtind/jkl-core";
import { navigate } from "gatsby";
import React, { FC } from "react";
import "./card.scss";

interface Props extends WithChildren {
    heading: string;
    link: string;
}

export const Card: FC<Props> = ({ heading, link, children }) => {
    // right arrow for internal links, up/right for external links:
    const arrow = link.startsWith("http") ? unicode.NORTH_EAST_ARROW : unicode.RIGHTWARDS_ARROW;
    const handleClick = () => navigate(link);

    return (
        <button className="jkl-portal-card" onClick={handleClick}>
            <p className="jkl-portal-card__heading">{heading}</p>
            <div className="jkl-portal-card__content">{children}</div>
            <div className="jkl-portal-card__arrow">{arrow}</div>
        </button>
    );
};
