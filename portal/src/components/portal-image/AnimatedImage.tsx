import React, { VFC } from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import "./portal-image.scss";

export const AnimatedImage: VFC<{ src: string; alt?: string }> = ({ src, alt }) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    gatsbyImageData
                }
            }
        }
    `);

    // Vi har ikke tilgang på filstien på disk i query. Ulempen blir at filnavn må være unike.
    let imgSrc = src.split("/").pop() as string;

    // @ts-ignore No available type for Sharp image data
    const image = data.allImageSharp.nodes.find((node) =>
        (node.gatsbyImageData.images.fallback.src as string).includes(imgSrc),
    );

    // Fall tilbake til å vise en img-tag med lenka om bildet ikke prosesseres av Gatsby (f. eks. SVG)
    if (!image) {
        imgSrc = src;
        if (src?.startsWith("/")) {
            imgSrc = withPrefix(src);
        }
        return <motion.img layout className="jkl-portal-image__img" src={imgSrc} alt={alt || ""} />;
    }

    return (
        <motion.div layout className="jkl-portal-image__img">
            <GatsbyImage image={image.gatsbyImageData} alt={alt || ""} />
        </motion.div>
    );
};
