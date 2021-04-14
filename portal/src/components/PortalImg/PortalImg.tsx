import React, { ImgHTMLAttributes, useState, useRef } from "react";
import FocusTrap from "focus-trap-react";
import { withPrefix } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { useKeyListener } from "@fremtind/jkl-react-hooks";
import { Close } from "@fremtind/jkl-icons-react";
import "./style.scss";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    noMargin?: boolean;
}

export const PortalImg: React.FC<Props> = ({ src, alt, noMargin }) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    const toggleFullscreen = () => setFullscreen(!isFullscreen);

    let imgSrc = src;
    if (src?.startsWith("/")) {
        imgSrc = withPrefix(src);
    }

    return (
        <FocusTrap active={isFullscreen}>
            <div>
                <BlurredBackground blur={isFullscreen} />
                <motion.button
                    ref={ref}
                    layout
                    onClick={toggleFullscreen}
                    className={`jkl-portal-image ${noMargin ? "jkl-portal-image--no-margin" : ""} ${
                        isFullscreen ? "jkl-portal-image--fullscreen" : "jkl-portal-paragraph"
                    }`}
                >
                    <Image imgSrc={imgSrc} alt={alt} />
                    {!isFullscreen && !noMargin && <div className="jkl-micro">Klikk for å se større</div>}
                    {
                        <span className="jkl-portal-image__close">
                            Lukk
                            <Close variant="medium" />
                        </span>
                    }
                </motion.button>
                {isFullscreen && (
                    <div
                        className={`jkl-portal-image jkl-portal-paragraph ${
                            noMargin ? "jkl-portal-image--no-margin" : ""
                        }`}
                    >
                        <Image imgSrc={imgSrc} />
                        {!noMargin && <div className="jkl-micro">&nbsp;</div>}
                    </div>
                )}
            </div>
        </FocusTrap>
    );
};

function Image({ imgSrc, alt }: { imgSrc?: string; alt?: string }) {
    return <motion.img layout className="jkl-portal-image__img" src={imgSrc} alt={alt || "illustrasjon"} />;
}

function BlurredBackground({ blur }: { blur: boolean }) {
    return (
        <AnimatePresence>
            {blur && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="portal-bg-blur"
                />
            )}
        </AnimatePresence>
    );
}
