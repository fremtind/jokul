import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import MediaBox from "./MediaBox";

interface Props {
    asset: string;
    alt: string;
    rightAlign?: boolean;
    caption?: string;
}

type Node = {
    fluid: {
        originalName: string;
    };
};

const Picture: React.FC<Props> = ({ asset, alt, ...rest }) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    fluid {
                        originalName
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const image = data.allImageSharp.nodes.find((node: Node) => node.fluid.originalName === asset);

    return image ? <MediaBox media={<Img fluid={image.fluid} alt={alt} />} {...rest} /> : null;
};

export default Picture;
