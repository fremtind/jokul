import { useKeyListener } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useState, useRef, ReactNode } from "react";
import "./image.scss";

interface ImageProps {
    /**
     * På grunn av begrensninger i StaticImage må du bruke komponenten på denne måten:
     *
     * @example
     *
     * ```tsx
     * <Image>
     *   <StaticImage
     *     src="../../../static/assets/kom-i-gang/github-discussions.png"
     *     alt="Skjermbilde som viser oversikten du finner når du først kommer til Jøkuls GitHub Discussions"
     *   />
     * </Image>
     * ```
     */
    children: ReactNode;
    /** Vises under bildet. Sett alt til tom string om du bruker denne. */
    caption?: JSX.Element;
    className?: string;
    disableFullscreen?: boolean;
}

/**
 * Bildekomponent for bruk der du har GatsbyImageData tilgjengelig, for eksempel
 * etter å ha gjort en pageQuery. Om du ikke får gjort en page query, for eksempel
 * fra MDX, bruk PortalImage. Er det snakk om en SVG, embed den inline eller som
 * en komponent.
 *
 * På grunn av begrensninger i StaticImage må du bruke komponenten på denne måten:
 *
 * @example
 *
 * ```tsx
 * <Image>
 *   <StaticImage
 *     src="../../../static/assets/kom-i-gang/github-discussions.png"
 *     alt="Skjermbilde som viser oversikten du finner når du først kommer til Jøkuls GitHub Discussions"
 *   />
 * </Image>
 * ```
 *
 * @see PortalImage
 * @see https://www.gatsbyjs.com/blog/mdx-embedded-gatsby-image/
 */
export const Image: FC<ImageProps> = ({
    className,
    children,
    caption,
    disableFullscreen,
}) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    const toggleFullscreen = () => setFullscreen(!isFullscreen);

    return (
        <FocusTrap active={isFullscreen}>
            <div className={cn("jkl-portal-image", className)}>
                <AnimatePresence>
                    {isFullscreen && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            className="jkl-portal-image__bg-blur"
                        />
                    )}
                </AnimatePresence>
                <motion.button
                    ref={ref}
                    layout
                    onClick={toggleFullscreen}
                    className={cn("jkl-portal-image__content", {
                        "jkl-portal-image__content--fullscreen": isFullscreen,
                        "jkl-portal-paragraph": !isFullscreen,
                    })}
                    disabled={disableFullscreen}
                    role={disableFullscreen ? "none presentation" : undefined}
                >
                    <motion.div layout className="jkl-portal-image__img">
                        {children}
                    </motion.div>
                    {!disableFullscreen && !isFullscreen && (
                        <p className="jkl small">
                            {caption && caption} Klikk for å se større
                            {caption && "."}
                        </p>
                    )}
                </motion.button>
                {isFullscreen && (
                    <div className="jkl-portal-image__content jkl-portal-paragraph">
                        <motion.div layout className="jkl-portal-image__img">
                            {children}
                        </motion.div>
                        <div className="small">&nbsp;</div>
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};
