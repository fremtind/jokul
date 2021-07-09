import React from "react";
import { motion } from "framer-motion";
import { Link } from "@fremtind/jkl-core";
import { Link as InternalLink } from "gatsby";

const NotFoundPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
        <h1 className="jkl-title jkl-spacing--bottom-3 jkl-spacing--top-3">Oj, dette ble feil</h1>
        <p className="jkl-heading-2 jkl-spacing--bottom-2">Minst en av oss har rota dette til.</p>
        <p className="jkl-body">
            Kanskje du kan hjelpe oss å rette opp i dette? Rapporter en feil eller endringsønske på vår{" "}
            <Link external href="https://github.com/fremtind/jokul/">
                Github
            </Link>
            . Og har du lyst, så kan du rette feilen selv, sjekk ut{" "}
            <InternalLink to="/komigang/utvikling" className="jkl-link">
                kom i gang guiden
            </InternalLink>{" "}
            her i portalen!
        </p>
    </motion.div>
);

export default NotFoundPage;
