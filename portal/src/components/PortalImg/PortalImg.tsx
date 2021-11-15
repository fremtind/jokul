import React, { ImgHTMLAttributes, useState, useRef } from "react";
import cx from "classnames";
import FocusTrap from "focus-trap-react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { useKeyListener } from "@fremtind/jkl-react-hooks";
import "./portal-img.scss";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    inline?: boolean;
    noMargin?: boolean;
    fullWidth?: boolean;
}

export const PortalImg: React.FC<Props> = ({ src, alt, inline = false, noMargin = false, fullWidth = false }) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    const toggleFullscreen = () => setFullscreen(!isFullscreen);
    // Vi har ikke tilgang på filstien på disk i query. Ulempen blir at filnavn må være unike.
    const imgSrc = src.split("/").pop() as string;

    return (
        <FocusTrap active={isFullscreen}>
            <div
                className={cx("jkl-portal-image", {
                    "jkl-portal-image--no-margin": noMargin,
                })}
            >
                <BlurredBackground blur={isFullscreen} />
                <motion.button
                    ref={ref}
                    layout
                    onClick={toggleFullscreen}
                    className={cx("jkl-portal-image__content", {
                        "jkl-portal-image__content--fullscreen": isFullscreen,
                        "jkl-portal-paragraph": !fullWidth && !isFullscreen,
                    })}
                >
                    <Image imgSrc={imgSrc} alt={alt} />
                    {!isFullscreen && !noMargin && <div className="jkl-micro">Klikk for å se større</div>}
                </motion.button>
                {isFullscreen && (
                    <div className="jkl-portal-image__content jkl-portal-paragraph">
                        <Image imgSrc={imgSrc} alt={alt} />
                        {!noMargin && <div className="jkl-micro">&nbsp;</div>}
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};

function Image({ imgSrc, alt }: { imgSrc: string; alt: string }) {
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
            <GatsbyImage image={image.gatsbyImageData} alt={alt} />
        </motion.div>
    );
}

function BlurredBackground({ blur }: { blur: boolean }) {
    return (
        <AnimatePresence>
            {blur && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="jkl-portal-image__bg-blur"
                />
            )}
        </AnimatePresence>
    );
}
