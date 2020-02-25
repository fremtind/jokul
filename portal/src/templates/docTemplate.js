import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import "@fremtind/jkl-core/core.min.css";
import "../pages/style.scss";
import "../components/Typography/typography.scss";
import { jokulRenderer } from "../presentation/markdownRenderer";
import { FormatProvider } from "../components/Typography";
import ReactMarkdown from "react-markdown";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const {
        rawMarkdownBody,
        frontmatter: { title },
    } = markdownRemark;

    return (
        <Layout title={title}>
            <FormatProvider>
                <ReactMarkdown renderers={jokulRenderer}>{rawMarkdownBody}</ReactMarkdown>
            </FormatProvider>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            rawMarkdownBody
            frontmatter {
                path
                title
            }
        }
    }
`;
