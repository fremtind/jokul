import React from "react";

interface Props {
    type: "do" | "dont";
    image: string;
    description?: string;
}

export function DoDontExample({ type, image, description }: Props) {
    const heading = type === "do" ? "Riktig" : "Feil";
    return (
        <aside className="jkl-portal-do-dont-example">
            <img className="jkl-portal-do-dont-example__image" src={image} alt={description || `${heading} bruk`} />
            <p className="jkl-portal-do-dont-example__caption">
                <span className="jkl-portal-do-dont-example__heading">{heading}</span>
                <span className="jkl-portal-do-dont-example__description">{description}</span>
            </p>
        </aside>
    );
}
