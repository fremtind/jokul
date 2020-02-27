import React from "react";
import { Link } from "gatsby";
import "./card.scss";

interface Props {
    heading: string;
    to?: string;
}

export const Card: React.FunctionComponent<Props> = ({ heading, to, children }) => {
    const LinkTo = !!to ? Link : React.Fragment;

    return (
        <div className="jkl-portal-card">
            <LinkTo to={to}>
                <h1 className="jkl-portal-card__heading">{heading}</h1>
                <div className="jkl-portal-card__content">{children}</div>
                <div className="jkl-portal-card__footer">→</div>
            </LinkTo>
        </div>
    );
};
