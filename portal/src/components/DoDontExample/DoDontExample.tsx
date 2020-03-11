import React from "react";
import { withPrefix } from "gatsby";
import classNames from "classnames";

import "./DoDontExample.scss";

interface Props {
    type: "do" | "dont";
    image: string;
    description?: string;
}

export function DoDontExample({ type, image, description }: Props) {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description ? `${heading}: ${description}` : `${heading} bruk`;
    const headingClass = classNames({
        "jkl-portal-do-dont-example__heading": true,
        "jkl-portal-do-dont-example__heading--do": type === "do",
        "jkl-portal-do-dont-example__heading--dont": type === "dont",
    });
    return (
        <aside className="jkl-portal-do-dont-example">
            <img className="jkl-portal-do-dont-example__image" src={withPrefix(image)} alt={altText} />
            <p className={headingClass}>{heading}</p>
            <p className="jkl-portal-do-dont-example__description">{description}</p>
        </aside>
    );
}
