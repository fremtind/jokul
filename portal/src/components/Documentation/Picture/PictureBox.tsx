import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MediaBox from "./MediaBox";

interface Props {
    asset: string;
    alt: string;
    rightAlign?: boolean;
    caption?: string;
}

const Picture: React.FC<Props> = ({ asset, alt, ...rest }) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    gatsbyImageData
                }
            }
        }
    `);

    // @ts-ignore No available type for Sharp image data
    const image = data.allImageSharp.nodes.find((node) =>
        (node.gatsbyImageData.images.fallback.src as string).includes(asset),
    );

    return image ? (
        <MediaBox
            media={<GatsbyImage image={image.gatsbyImageData} alt={alt} loading="lazy" decoding="async" />}
            {...rest}
        />
    ) : null;
};

export default Picture;
