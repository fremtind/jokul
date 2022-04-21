import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./portrait.scss";

export interface PortraitProps {
    name: string;
    title?: string;
    image: string;
}

export const Portrait: FC<PortraitProps> = ({ name, title, image }) => {
    const caption = `${name}${title ? `, ${title}` : ""}`;
    const queryResult = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
                }
            }
        }
    `);
    // @ts-ignore No available type for Sharp image data
    const imageData = queryResult.allImageSharp.nodes.find((node) =>
        (node.gatsbyImageData.images.fallback.src as string).includes(image),
    )?.gatsbyImageData;

    return (
        <figure className="jkl-portal-portrait">
            <GatsbyImage className="jkl-portal-portrait__image" image={imageData} alt={`Portrett av ${name}`} />
            <figcaption className="jkl-portal-portrait__caption">{caption}</figcaption>
        </figure>
    );
};
