import { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import { motion } from "framer-motion";
import React, { FC, useContext } from "react";
import { a11yContext } from "../a11yContext";

interface MainContentProps extends WithChildren {
    className?: string;
}

export const MainContent: FC<MainContentProps> = ({ className, children }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const isE2e = typeof window !== "undefined" ? window.location.search === "?mode=e2e" : false;

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: prefersReducedMotion || isE2e ? 0 : 0.35 }}
            className={cn("jkl-portal__main", className)}
            id="innhold"
        >
            {children}
        </motion.main>
    );
};
