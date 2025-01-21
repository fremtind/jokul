import { graphql } from "gatsby";
import React from "react";
import { APIDocumentation } from "../components/APIDocumentation";
import { Seo } from "../components/seo";
import { SuggestionBlock } from "../components/SuggestionBlock";
import { BlogPageHeader, ComponentPageHeader } from "../layout/header";
import { MainContent } from "../layout/MainContent";

export const Head = ({ pageContext }) => <Seo title={pageContext.title} />;

export const DocPageLayout = ({ location, data, pageContext, children }) => {
    const { frontmatter } = data.page; // Fra pageQuery
    const { types } = pageContext; // Fra context i gatsby-node

    return (
        <MainContent
            className={
                location.pathname === "/profil/bildebruk"
                    ? "jkl-portal__main--no-margin"
                    : undefined
            }
        >
            <ComponentPageHeader
                {...frontmatter}
                versions={pageContext.versions}
            />
            {location.pathname.includes("komponenter") && (
                <SuggestionBlock
                    variant="komponent"
                    component={frontmatter.title}
                />
            )}
            <BlogPageHeader {...frontmatter} />
            {children}
            {types && <APIDocumentation types={types} />}
        </MainContent>
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
