import React, { ReactNode } from "react";
import classNames from "classnames";
import { PortalImage } from "../portal-image";
import { ExampleVideo } from "../ExampleVideo";
import "./DoDontExample.scss";

interface Props {
    type: "do" | "dont";
    content?: ReactNode;
    image?: string;
    video?: string;
    description?: string;
    fullWidth?: boolean;
}

export const DoDontExample: React.FC<Props> = ({ type, content, image = "", video, description, fullWidth }) => {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description ? `${heading}: ${description}` : `${heading} bruk`;
    const containerClass = classNames({
        "jkl-portal-do-dont-example": true,
        "jkl-portal-do-dont-example--fullwidth": fullWidth,
        "jkl-portal-do-dont-example--halfwidth": !fullWidth,
    });
    const headingClass = classNames({
        "jkl-portal-do-dont-example__heading": true,
        "jkl-portal-do-dont-example__heading--do": type === "do",
        "jkl-portal-do-dont-example__heading--dont": type === "dont",
    });

    return (
        <section className={containerClass}>
            {content && <div className="jkl-portal-do-dont-example__content">{content}</div>}
            {image && (
                <div className="jkl-portal-do-dont-example__image">
                    <PortalImage src={image} alt={altText} noMargin fullWidth />
                </div>
            )}
            {video && (
                <div>
                    <ExampleVideo videoUrl={video} />
                </div>
            )}
            <p className={headingClass}>{heading}</p>
            <p className="jkl-portal-do-dont-example__description">{description}</p>
        </section>
    );
};
