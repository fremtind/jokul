import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import MediaBox from "./MediaBox";

interface Props {
    src: ImageDataLike;
    alt: string;
    rightAlign?: boolean;
    caption?: string;
}

const Picture: React.FC<Props> = ({ src, alt, ...rest }) => {
    const image = getImage(src);
    return image ? <MediaBox media={<GatsbyImage image={image} alt={alt} />} {...rest} /> : null;
};

export default Picture;
