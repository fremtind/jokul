import React from "react";
import classNames from "classnames";

import { useFixedImage, FixedImage } from "./useFixedImage";
import "./DoDontExample.scss";

interface Props {
    type: "do" | "dont";
    image: string;
    description?: string;
}

export function DoDontExample({ type, image, description }: Props) {
    const heading = type === "do" ? "Riktig" : "Feil";
    const altText = description ? `${heading}: ${description}` : `${heading} bruk`;
    const imageName = image.match(/(.*).(jpg|jpeg|png|webm)/)?.[1];
    const headingClass = classNames({
        "jkl-portal-do-dont-example__heading": true,
        "jkl-portal-do-dont-example__heading--do": type === "do",
        "jkl-portal-do-dont-example__heading--dont": type === "dont",
    });
    const img = useFixedImage(imageName || "");

    return (
        <aside className="jkl-portal-do-dont-example">
            <Image image={img} alt={altText} className="jkl-portal-do-dont-example__image" />
            <p className={headingClass}>{heading}</p>
            <p className="jkl-portal-do-dont-example__description">{description}</p>
        </aside>
    );
}

interface ImageProps {
    image: FixedImage;
    alt: string;
    className?: string;
}

function Image({ image, alt, className }: ImageProps) {
    return (
        <picture className={className}>
            <source srcSet={image.srcSet} />
            <img style={{ width: "100%" }} srcSet={image.srcSet} src={image.src} alt={alt}></img>
        </picture>
    );
}
