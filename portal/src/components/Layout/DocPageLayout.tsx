import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Frontmatter } from "../Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "./components";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: Frontmatter;
    };
}

export const DocPageLayout = ({ children, pageContext: { frontmatter } }: Props) => {
    return (
        <motion.main
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="jkl-portal__main"
        >
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            {children}
        </motion.main>
    );
};

export default DocPageLayout;
