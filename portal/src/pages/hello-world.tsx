import React, { VFC } from "react";
import { motion } from "framer-motion";
import { Link as InternalLink } from "gatsby";

const NotFoundPage: VFC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <h1 className="jkl-title jkl-spacing-2xl--bottom jkl-spacing-2xl--top">Hello, World!</h1>
        <p className="jkl-portal-paragraph">
            Denne siden er en test. Du vil mest sannsynlig starte fra{" "}
            <InternalLink to="/" className="jkl-link">
                forsiden
            </InternalLink>
            !
        </p>
    </motion.main>
);

export default NotFoundPage;
