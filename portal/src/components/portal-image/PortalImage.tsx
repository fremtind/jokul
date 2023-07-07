import { useKeyListener } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import FocusTrap from "focus-trap-react";
import { motion } from "framer-motion";
import React, { FC, ImgHTMLAttributes, useState, useRef } from "react";
import { AnimatedImage } from "./AnimatedImage";
import { BlurredBackground } from "./BlurredBackground";
import "./portal-image.scss";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    noMargin?: boolean;
    fullWidth?: boolean;
    caption?: JSX.Element;
    disableFullscreen?: boolean;
}

/**
 * Brukes for å embedde bilder fra MDX. Lider av ytelsesproblemer,
 * men de kan ikke kommes rundt så lenge innholdet er MDX i stedet
 * for TSX.
 *
 * @see https://www.gatsbyjs.com/blog/mdx-embedded-gatsby-image/
 */
export const PortalImage: FC<Props> = ({
    className,
    src,
    alt,
    noMargin = false,
    fullWidth = false,
    caption,
    disableFullscreen,
    ...rest
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
                    <AnimatedImage src={src} alt={alt} {...rest} />
                    {!disableFullscreen && !isFullscreen && !noMargin && (
                        <p className="jkl small">
                            {caption && caption} Klikk for å se større{caption && "."}
                        </p>
                    )}
                </motion.button>
                {isFullscreen && (
                    <div className="jkl-portal-image__content jkl-portal-paragraph">
                        <AnimatedImage src={src} alt={alt} {...rest} />
                        {!noMargin && <div className="small">&nbsp;</div>}
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};
