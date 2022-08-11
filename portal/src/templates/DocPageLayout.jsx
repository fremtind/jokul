import { motion } from "framer-motion";
import { graphql } from "gatsby";
import React, { useContext } from "react";
import { APIDocumentation } from "../components";
import { BlogPageHeader, ComponentPageHeader } from "../components/Layout/components";
import { Seo } from "../components/seo";
import { a11yContext } from "../contexts/a11yContext";

export const Head = ({ pageContext }) => <Seo title={pageContext.title} />;

export const DocPageLayout = ({ location, data, pageContext, children }) => {
    const { prefersReducedMotion } = useContext(a11yContext);

    const { frontmatter } = data.page; // Fra pageQuery
    const { types } = pageContext; // Fra context i gatsby-node
    const isE2e = typeof window !== "undefined" ? window.location.search === "?mode=e2e" : false;

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: prefersReducedMotion || isE2e ? 0 : 0.35 }}
            className={`jkl-portal__main ${
                location.pathname === "/profil/bildebruk" ? "jkl-portal__main--no-margin" : ""
            }`}
            id="innhold"
        >
            <ComponentPageHeader {...frontmatter} versions={pageContext.versions} />
            <BlogPageHeader {...frontmatter} />
            {children}
            {types && <APIDocumentation types={types} />}
        </motion.main>
    );
};

export default DocPageLayout;

export const pageQuery = graphql`
    query ($id: String!) {
        page: mdx(id: { eq: $id }) {
            id
            frontmatter {
                title
                react
                scss
                order
                author
                publishDate
                group
            }
        }
    }
`;
