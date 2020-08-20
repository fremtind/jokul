import React, { ImgHTMLAttributes, useState, useRef } from "react";
import { withPrefix } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import { useKeyListener } from "@fremtind/jkl-react-hooks";

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
        <>
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
            </motion.button>
            {isFullscreen && (
                <button
                    aria-hidden
                    className={`jkl-portal-image jkl-portal-paragraph ${noMargin ? "jkl-portal-image--no-margin" : ""}`}
                >
                    <Image imgSrc={imgSrc} />
                    {!noMargin && <div className="jkl-micro">&nbsp;</div>}
                </button>
            )}
        </>
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
