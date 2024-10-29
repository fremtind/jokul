import React, { FC, ReactNode } from "react";
import "./portrait.scss";

export interface PortraitProps {
    children: ReactNode;
    name: string;
    title?: string;
}

export const Portrait: FC<PortraitProps> = ({ children, name, title }) => {
    const caption = `${name}${title ? `, ${title}` : ""}`;

    return (
        <figure className="jkl-portal-portrait">
            {children}
            <figcaption className="jkl-portal-portrait__caption">
                {caption}
            </figcaption>
        </figure>
    );
};
