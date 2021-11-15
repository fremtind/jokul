import React, { FC, ImgHTMLAttributes, useState, useRef } from "react";
import cx from "classnames";
import FocusTrap from "focus-trap-react";
import { motion } from "framer-motion";
import { useKeyListener } from "@fremtind/jkl-react-hooks";
import { BlurredBackground } from "./BlurredBackground";
import { AnimatedImage } from "./AnimatedImage";
import "./portal-image.scss";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    noMargin?: boolean;
    fullWidth?: boolean;
}

export const PortalImage: FC<Props> = ({ src, alt, noMargin = false, fullWidth = false }) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    if (!src) {
        return null;
    }

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
                    <AnimatedImage imgSrc={imgSrc} alt={alt} />
                    {!isFullscreen && !noMargin && <div className="jkl-micro">Klikk for å se større</div>}
                </motion.button>
                {isFullscreen && (
                    <div className="jkl-portal-image__content jkl-portal-paragraph">
                        <AnimatedImage imgSrc={imgSrc} alt={alt} />
                        {!noMargin && <div className="jkl-micro">&nbsp;</div>}
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};
