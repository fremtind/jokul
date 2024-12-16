import { useBrowserPreferences, type WithChildren } from "@fremtind/jokul";
import type { MotionProps, Variants } from "framer-motion";
import { motion } from "framer-motion";
import React, { forwardRef, type HTMLAttributes } from "react";

export const entryAnimation: Variants = {
    initial: { y: 10, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            ease: "easeOut",
            duration: 0.35,
        },
    },
};

export const AnimatedPageWrapper = forwardRef<
    HTMLDivElement,
    WithChildren & MotionProps & HTMLAttributes<HTMLDivElement>
>(function AnimatedPageWrapper({ children, ...divProps }, ref) {
    const { prefersReducedMotion } = useBrowserPreferences();

    return (
        <motion.div
            ref={ref}
            variants={prefersReducedMotion ? {} : entryAnimation}
            initial="initial"
            animate="animate"
            {...divProps}
        >
            {children}
        </motion.div>
    );
});
