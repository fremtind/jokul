import React from "react";
import Layout from "../components/Layout/Layout";
import ReactMarkdown from "react-markdown";
import { renderer } from "../presentation/markdownRenderer";
// @ts-ignore
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";

const IndexPage = () => (
    <Layout>
        <ReactMarkdown renderers={renderer} source={frontPageMarkdown} />
    </Layout>
);

export default IndexPage;
