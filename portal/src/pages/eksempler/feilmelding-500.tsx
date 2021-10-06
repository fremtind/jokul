import React from "react";
import { motion } from "framer-motion";
import { Link as InternalLink } from "gatsby";

const NotFoundPage = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <h1 className="jkl-title jkl-spacing--bottom-3 jkl-spacing--top-3">
            Huff da, nå har det skjedd en feil hos oss!
        </h1>
        <p className="jkl-portal-paragraph">Vi setter i gang med å fikse feilen. Imens kan du prøve å:</p>
        <ul className="jkl-portal-paragraph">
            <li>
                <InternalLink className="jkl-link" to="/profil/layout">
                    gå til Mine sider
                </InternalLink>
            </li>
            <li>
                <InternalLink className="jkl-link" to="/profil/layout">
                    logge ut
                </InternalLink>{" "}
                og inn igjen
            </li>
        </ul>
    </motion.main>
);

export default NotFoundPage;
