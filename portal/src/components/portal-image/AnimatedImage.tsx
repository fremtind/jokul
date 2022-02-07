import React, { VFC } from "react";
import { motion } from "framer-motion";
import { withPrefix } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import "./portal-image.scss";

export const AnimatedImage: VFC<{ src: ImageDataLike | string; alt?: string }> = ({ src, alt }) => {
    // Fall tilbake til å vise en img-tag med lenka om bildet ikke prosesseres av Gatsby (f. eks. SVG)
    if (typeof src === "string") {
        let imgSrc = src;
        if (src?.startsWith("/")) {
            imgSrc = withPrefix(src);
        }
        return <motion.img layout className="jkl-portal-image__img" src={imgSrc} alt={alt || ""} />;
    }

    const image = getImage(src);
    if (!image) {
        return null;
    }

    return (
        <motion.div layout className="jkl-portal-image__img">
            <GatsbyImage image={image} alt={alt || ""} />
        </motion.div>
    );
};
