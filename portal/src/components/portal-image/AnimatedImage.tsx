import React, { VFC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import "./portal-image.scss";

export const AnimatedImage: VFC<{ imgSrc: string; alt?: string }> = ({ imgSrc, alt }) => {
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
        (node.gatsbyImageData.images.fallback.src as string).includes(imgSrc),
    );

    return (
        <motion.div layout className="jkl-portal-image__img">
            <GatsbyImage image={image.gatsbyImageData} alt={alt || ""} />
        </motion.div>
    );
};
