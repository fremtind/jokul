import { motion } from "framer-motion";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import "./portal-image.scss";

export const AnimatedImage: FC<{ src: string; alt?: string }> = ({ src, alt, ...rest }) => {
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
        return (
            <motion.img
                layout
                className="jkl-portal-image__img"
                src={imgSrc}
                alt={alt || ""}
                {...rest}
                loading="lazy"
                decoding="async"
            />
        );
    }

    return (
        <motion.div layout className="jkl-portal-image__img">
            <GatsbyImage image={image.gatsbyImageData} alt={alt || ""} {...rest} loading="lazy" decoding="async" />
        </motion.div>
    );
};
