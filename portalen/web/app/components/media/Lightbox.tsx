import { useBrowserPreferences, type WithChildren } from "@fremtind/jokul";
import cn from "classnames";
import { type Transition } from "framer-motion";
import { motion } from "framer-motion";
import React, { type FC } from "react";
import { useEffect, useState } from "react";

export interface LightboxProps extends WithChildren {
    aspectRatio?: string;
    className?: string;
}

const transition: Transition = {
    type: "spring",
    damping: 30,
    stiffness: 220,
};
const shortTransition: Transition = {
    ease: "linear",
    duration: 0.05,
};

export const Lightbox: FC<LightboxProps> = ({
    aspectRatio = "16 / 9",
    className,
    children,
}) => {
    const { prefersReducedMotion } = useBrowserPreferences();
    const [isOpen, setIsOpen] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    useEffect(() => {
        const closeOpenLightbox = () => {
            if (!isOpen) return;
            setIsOpen(false);
        };
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeOpenLightbox();
            }
        };
        // Lukk forstørret bilde ved scroll eller trykk på escape
        window.addEventListener("scroll", closeOpenLightbox);
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("scroll", closeOpenLightbox);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [isOpen]);

    return (
        <div className={cn("jkl-portal-lightbox", className)}>
            <motion.button
                data-open={isOpen}
                data-overlay={isOverlay}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={transition}
                className="jkl-portal-lightbox__scrim"
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
            >
                <span className="jkl-sr-only">Forminsk</span>
            </motion.button>
            <button
                className="jkl-portal-lightbox__trigger"
                style={{ aspectRatio }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div
                    layout
                    transition={
                        prefersReducedMotion ? shortTransition : transition
                    }
                    data-open={isOpen}
                    data-overlay={isOverlay}
                    style={{ aspectRatio }}
                    className="jkl-portal-lightbox__media"
                    onLayoutAnimationStart={() => {
                        setIsOverlay(true);
                    }}
                    onLayoutAnimationComplete={() => {
                        // Vent til animasjonen er ferdig med å resette z-index
                        setIsOverlay(isOpen);
                    }}
                >
                    {children}
                </motion.div>
                <span className="jkl-sr-only">
                    {isOpen ? "Forminsk" : "Forstørr"}
                </span>
            </button>
        </div>
    );
};
