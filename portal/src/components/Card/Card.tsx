import React from "react";
import "./card.scss";

interface Props {
    heading: string;
}

export const Card: React.FunctionComponent<Props> = ({ heading, children }) => {
    return (
        <div className="jkl-portal-card">
            <h1 className="jkl-portal-card__heading">{heading}</h1>
            <div className="jkl-portal-card__content">{children}</div>
            <div className="jkl-portal-card__footer">→</div>
        </div>
    );
};
