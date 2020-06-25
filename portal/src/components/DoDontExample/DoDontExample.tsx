import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import classNames from "classnames";

import "./DoDontExample.scss";

interface Props {
    type: "do" | "dont";
    content?: ReactNode;
    image?: string;
    description?: string;
    fullWidth?: boolean;
}

export function DoDontExample({ type, content, image = "", description, fullWidth }: Props) {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description ? `${heading}: ${description}` : `${heading} bruk`;
    const headingClass = classNames({
        "jkl-portal-do-dont-example__heading": true,
        "jkl-portal-do-dont-example__heading--do": type === "do",
        "jkl-portal-do-dont-example__heading--dont": type === "dont",
    });
    const containerClass = classNames("jkl-portal-do-dont-example", {
        "jkl-portal-do-dont-example--fullwidth": fullWidth,
        "jkl-portal-do-dont-example--halfwidth": !fullWidth,
    });

    return (
        <aside className={containerClass}>
            {content ? (
                <div>{content}</div>
            ) : (
                <img className="jkl-portal-do-dont-example__image" src={withPrefix(image)} alt={altText} />
            )}
            <p className={headingClass}>{heading}</p>
            <p className="jkl-portal-do-dont-example__description">{description}</p>
        </aside>
    );
}
