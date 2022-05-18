import { motion, AnimatePresence } from "framer-motion";
import React, { FC } from "react";

export const BlurredBackground: FC<{ blur: boolean }> = ({ blur }) => {
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
};
