import cx from "classnames";
import React, { ReactNode } from "react";
import { ExampleVideo } from "../ExampleVideo";
import { PortalImage } from "../portal-image";
import "./DoDontExample.scss";

interface Props {
    type: "do" | "dont";
    content?: ReactNode;
    image?: string;
    video?: string;
    description?: string;
    fullWidth?: boolean;
}

export const DoDontExample: React.FC<Props> = ({
    type,
    content,
    image = "",
    video,
    description,
    fullWidth,
}) => {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description
        ? `${heading}: ${description}`
        : `${heading} bruk`;

    return (
        <section
            className={cx("jkl-portal-do-dont-example", {
                "jkl-portal-do-dont-example--fullwidth": fullWidth,
                "jkl-portal-do-dont-example--halfwidth": !fullWidth,
            })}
        >
            {content && (
                <div className="jkl-portal-do-dont-example__content">
                    {content}
                </div>
            )}
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
            <p className="jkl-portal-do-dont-example__heading">{heading}</p>
            <p className="jkl-portal-do-dont-example__description">
                {description}
            </p>
        </section>
    );
};
