import React, { FC, ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { Frontmatter } from "../Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "./components";
import { a11yContext } from "../../contexts/a11yContext";
import { useLocation } from "../../contexts/locationContext";
import { APIDocumentation } from "./components/APIDocumentation/APIDocumentation";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: Frontmatter;
    };
}

export const DocPageLayout: FC<Props> = ({ children, location, pageContext: { frontmatter } }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const { isCypress } = useLocation();

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: isCypress ? 0 : 0.35 }}
            className={`jkl-portal__main ${
                location.pathname === "/profil/bildebruk" ? "jkl-portal__main--no-margin" : ""
            }`}
            id="innhold"
        >
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            {children}
            {frontmatter.type && frontmatter.type.length > 0 && <APIDocumentation types={frontmatter.type} />}
        </motion.main>
    );
};

export default DocPageLayout;
