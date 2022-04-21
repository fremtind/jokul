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
    caption?: JSX.Element;
    disableFullscreen?: boolean;
}

export const PortalImage: FC<Props> = ({
    className,
    src,
    alt,
    noMargin = false,
    fullWidth = false,
    caption,
    disableFullscreen,
}) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    if (!src) {
        return null;
    }

    const toggleFullscreen = () => setFullscreen(!isFullscreen);

    return (
        <FocusTrap active={isFullscreen}>
            <div
                className={cx("jkl-portal-image", className, {
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
                    disabled={disableFullscreen}
                    role={disableFullscreen ? "none presentation" : undefined}
                >
                    <AnimatedImage src={src} alt={alt} />
                    {!disableFullscreen && !isFullscreen && !noMargin && (
                        <p className="jkl jkl-small">
                            {caption && caption} Klikk for å se større{caption && "."}
                        </p>
                    )}
                </motion.button>
                {isFullscreen && (
                    <div className="jkl-portal-image__content jkl-portal-paragraph">
                        <AnimatedImage src={src} alt={alt} />
                        {!noMargin && <div className="jkl-small">&nbsp;</div>}
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};
