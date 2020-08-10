import React, { ImgHTMLAttributes, useState } from "react";
import { withPrefix } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

export const PortalImg: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src }) => {
    const [isFullscreen, setFullscreen] = useState(false);

    const toggleFullscreen = () => setFullscreen(!isFullscreen);

    let imgSrc = src;
    if (src?.startsWith("/")) {
        imgSrc = withPrefix(src);
    }

    return (
        <>
            <BlurredBackground blur={isFullscreen} />
            <motion.button
                layout
                onClick={toggleFullscreen}
                className={`jkl-portal-image ${isFullscreen ? "jkl-portal-image--fullscreen" : "jkl-portal-paragraph"}`}
            >
                <Image imgSrc={imgSrc} />
                {!isFullscreen && <ClickText />}
            </motion.button>
            {isFullscreen && (
                <button aria-hidden className="jkl-portal-image jkl-portal-paragraph">
                    <Image imgSrc={imgSrc} />
                    <ClickText />
                </button>
            )}
        </>
    );
};

function ClickText() {
    return <div className="jkl-small">Klikk for å se større</div>;
}

function Image({ imgSrc }: { imgSrc?: string }) {
    return <motion.img layout className="jkl-portal-image__img" src={imgSrc} alt="illustrasjon" />;
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
