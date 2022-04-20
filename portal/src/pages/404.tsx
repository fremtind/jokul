import React, { VFC } from "react";
import { motion } from "framer-motion";
import { Link } from "@fremtind/jkl-core";
import { Link as InternalLink } from "gatsby";

const NotFoundPage: VFC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <h1 className="jkl-title jkl-spacing-2xl--bottom jkl-spacing-2xl--top">Oj sann, der fikk du en blank side!</h1>
        <p className="jkl-portal-paragraph">
            Det beklager vi. Du kan prøve å:
            <ul>
                <li>
                    rapportere en feil eller endringsønske på vår{" "}
                    <Link external href="https://github.com/fremtind/jokul/">
                        Github
                    </Link>
                </li>
                <li>
                    rette feilen selv? Sjekk ut{" "}
                    <InternalLink to="/endre/utvikling" className="jkl-link">
                        kom i gang guiden
                    </InternalLink>{" "}
                    her i portalen!
                </li>
            </ul>
        </p>
    </motion.main>
);

export default NotFoundPage;
